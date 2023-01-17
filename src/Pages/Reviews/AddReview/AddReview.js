import React, { useContext } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider';
import './AddReview.css';

const AddReview = ({service}) => {
    const {user}=useContext(AuthContext);
    const {_id,name,img}=service;

    const handleAddReview=event=>{
        event.preventDefault();
        const form=event.target;

        const reviewer=form.reviewer.value;
        const photoURL=form.photoURL.value;
        const email=form.email.value;
        const comment=form.comment.value;
        // console.log(name,photoURL,email,comment);

        const review = {
            service: _id,
            serviceName: name,
            reviewer: reviewer,
            email,
            comment,
            img,
            photoURL
        }
        
        fetch('https://jannet-dekker-server.vercel.app/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('review add successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

    return (
            <div className="review_form">
            <Form onSubmit={handleAddReview}>
            <h1 className='text-center fw-bold text-danger mb-4'>Please Add a Review</h1>
            <Form.Group className="mb-3 input-group-lg">
                <Form.Label>Name:</Form.Label>
                <Form.Control defaultValue={user?.displayName} name='reviewer' type="text" required/>
            </Form.Group>

            <Form.Group className="mb-3 input-group-lg">
                <Form.Label>photoURL:</Form.Label>
                <Form.Control defaultValue={user?.photoURL} name='photoURL' type="text" required/>
            </Form.Group>

            <Form.Group className="mb-3 input-group-lg">
                <Form.Label>Email:</Form.Label>
                <Form.Control defaultValue={user?.email} name='email' type="email" required readOnly/>
            </Form.Group>

            <FloatingLabel controlId="floatingTextarea2" label="Review">
                <Form.Control
                name='comment'
                as="textarea"
                style={{ height: '100px' }}
                required
                />
            </FloatingLabel>

            <Button variant="info my-4 text-light fw-bold btn-lg w-100" type="submit">
                Submit
            </Button>
            </Form>
            </div>
    );
};

export default AddReview;