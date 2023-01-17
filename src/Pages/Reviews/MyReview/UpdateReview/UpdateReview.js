import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../../hooks/useTitle';

const UpdateReview = () => {
    const StoredReview=useLoaderData()
    const [review,setReview]=useState(StoredReview);
    useTitle('Update Review');

    const handleUpdateReview=event=>{
        event.preventDefault();
        fetch(`https://jannet-dekker-server.vercel.app/myReview/${StoredReview._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0){
                alert('review updated')
                console.log(data);
                window.location.reload();
            }
        })
    }

    const handleInputChange = event =>{
        const field = event.target.name;
        const value = event.target.value;
        const newReview = {...review}
        newReview[field] = value;
        setReview(newReview);
    }

    return (
        <div className="review_form">
            <Form onSubmit={handleUpdateReview}>
            <h1 className='text-center fw-bold text-danger mb-4'>Update Your Review</h1>
            <Form.Group className="mb-3 input-group-lg">
                <Form.Label>Name:</Form.Label>
                <Form.Control defaultValue={StoredReview?.reviewer} onChange={handleInputChange} name='reviewer' type="text" required/>
            </Form.Group>

            <Form.Group className="mb-3 input-group-lg">
                <Form.Label>photoURL:</Form.Label>
                <Form.Control defaultValue={StoredReview?.photoURL} onChange={handleInputChange} name='photoURL' type="text" required/>
            </Form.Group>

            <Form.Group className="mb-3 input-group-lg">
                <Form.Label>Email:</Form.Label>
                <Form.Control defaultValue={StoredReview?.email} onChange={handleInputChange} name='email' type="email" required readOnly/>
            </Form.Group>

            <FloatingLabel controlId="floatingTextarea2" label="Review">
                <Form.Control
                defaultValue={StoredReview?.comment}
                name='comment'
                onChange={handleInputChange}
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

export default UpdateReview;