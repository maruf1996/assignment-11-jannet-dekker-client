import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name,_id,img,price,description}=service;
    return (
        <div>
            <Col>
                <Card>
                <PhotoProvider>
                <PhotoView src={img}>
                <Card.Img className='service_img' variant="top" src={img} />
                </PhotoView>
                </PhotoProvider>
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <h5>Price: ${price}</h5>
                    <Card.Text>
                        {description.slice(0,100)}
                    </Card.Text>
                    <Link to={`/service/${_id}`}>
                        <Button variant='danger float-end'>Details</Button>
                    </Link>
                    </Card.Body>
                </Card>
                </Col>
        </div>
    );
};

export default Service;