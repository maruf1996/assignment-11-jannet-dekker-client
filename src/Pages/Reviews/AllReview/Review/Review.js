import React from 'react';
import { Col } from 'react-bootstrap';
import './Review.css';

const Review = ({review}) => {
    const {comment,reviewer,photoURL}=review;
    return (
        <Col>
        <div className='review'>
            <img src={photoURL} alt="" />
            <h4 className=''>{reviewer}</h4>
        </div>
            <p className='mt-4'>{comment}</p>
        </Col>
    );
};

export default Review;