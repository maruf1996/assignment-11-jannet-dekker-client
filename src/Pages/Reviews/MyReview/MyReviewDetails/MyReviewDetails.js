import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MyReviewDetails.css';

const MyReviewDetails = ({review,handleReviewDelete}) => {
    const {_id,comment,reviewer,photoURL}=review;

    return (
        <Col>
        <div className='myReview'>
            <div className="d-flex">
                <img src={photoURL} alt="" />
                <h4 className=''>{reviewer}</h4>
            </div>
        </div>
            <p className='mt-4'>{comment}</p>
            <div className="float-end mb-5">
            <Link to={`/updateReview/${_id}`} className='btn btn-info text-light'>Update</Link>
            <button onClick={()=>handleReviewDelete(_id)} className='btn btn-danger mx-2'>Delete</button>
            </div>
        </Col>
    );
};

export default MyReviewDetails;