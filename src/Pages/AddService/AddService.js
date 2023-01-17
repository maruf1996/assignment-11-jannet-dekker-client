import React from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');

    const handleAddService=event=>{
        event.preventDefault();
        const form=event.target;

        const name=form.name.value;
        const price=form.price.value;
        const img=form.img.value;
        const description=form.description.value;

        const service = {name,price,img,description}
        
        fetch('https://jannet-dekker-server.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.acknowledged){
                    alert('Service add successfully')
                    form.reset();
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <div className="review_form">
            <Form onSubmit={handleAddService}>
            <h1 className='text-center fw-bold text-danger mb-4'>Please Add a Service</h1>
            <Form.Group className="mb-3 input-group-lg">
                <Form.Label>Name:</Form.Label>
                <Form.Control name='name' type="text" required/>
            </Form.Group>

            <Form.Group className="mb-3 input-group-lg">
                <Form.Label>Price:</Form.Label>
                <Form.Control name='price' type="text" required/>
            </Form.Group>

            <Form.Group className="mb-3 input-group-lg">
                <Form.Label>Image:</Form.Label>
                <Form.Control name='img' type="text" required/>
            </Form.Group>

            <FloatingLabel controlId="floatingTextarea2" label="Description">
                <Form.Control
                name='description'
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

export default AddService;