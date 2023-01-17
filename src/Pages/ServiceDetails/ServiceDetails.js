import React, { useContext } from 'react';
import { Card } from 'react-bootstrap';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../hooks/useTitle';
import AddReview from '../Reviews/AddReview/AddReview';
import AllReview from '../Reviews/AllReview/AllReview';
import './ServiceDetails.css';

const ServiceDetails = () => {
    useTitle('Service Details');
    const {user}=useContext(AuthContext);
    const service=useLoaderData();
    const {name,img,price,description}=service;
    return (
        <div className=''>
            <Card className='service_details border-0'>
                <Card.Title className='text-danger'><h1 className='details_title fw-bold'>{name} Details</h1></Card.Title>
                <PhotoProvider>
                <PhotoView src={img}>
                <Card.Img variant="top" src={img} />
                </PhotoView>
                </PhotoProvider>
                <Card.Body>
                <h5>Price: ${price}</h5>
                <Card.Text>
                        {description}
                </Card.Text>
                </Card.Body>
            </Card>
            <div className="">
                <AllReview key={service._id} service={service}></AllReview>
            </div>
            <div className="">
                {!user?.email? <div className='review_warning'>
                    <h2>are you writing review??</h2>
                    <h4>Please Confirm <Link to='/login' className='text-decoration-none fw-bold text-info'>Login</Link></h4>
                    </div>:
                <AddReview key={service._id} service={service}></AddReview>}
            </div>
        </div>
    );
};

export default ServiceDetails;