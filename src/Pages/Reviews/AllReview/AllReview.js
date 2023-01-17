import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import './AllReview.css';
import Review from './Review/Review';

const AllReview = ({service}) => {
    const {_id,name}=service;
    const [reviews,setReviews]=useState([]);
    console.log(reviews)

    useEffect(()=>{
        fetch(`https://jannet-dekker-server.vercel.app/review/${_id}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[_id])

    return (
        <div>
            <h1 className='reviews_heading'>Top Reviews for {name}</h1>
            <Row xs={1} md={1} className="g-4 reviews">
            {reviews.length>0 ?
                reviews.map(review=><Review
                key={review._id}
                review={review}
                ></Review>):
                <h2 className='text-center'>Review does not fount</h2>
            }
            </Row>
        </div>
    );
};

export default AllReview;