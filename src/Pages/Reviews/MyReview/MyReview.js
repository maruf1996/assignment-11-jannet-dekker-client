import React, { useContext, useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { AuthContext } from '../../../contexts/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import MyReviewDetails from '../MyReview/MyReviewDetails/MyReviewDetails';
import './MyReview.css';

const MyReview = () => {
    const {user}=useContext(AuthContext);
    const [reviews,setReviews]=useState([]);
    // console.log(user)
    useTitle('My Review');

    useEffect(()=>{
        fetch(`https://jannet-dekker-server.vercel.app/myReview?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[user?.email])

    const handleReviewDelete=id=>{
        const proceed = window.confirm('Are you sure, you want to Delete this Review');
        if (proceed) {
            fetch(`https://jannet-dekker-server.vercel.app/reviews/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Your Review deleted successfully');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }
    
    return (
        <div>
            <h1 className='reviews_heading'>Your All Review</h1>
            <Row xs={1} md={1} className="g-4 reviews">
            {reviews.length>0 ?
                reviews.map(review=><MyReviewDetails
                key={review._id}
                review={review}
                handleReviewDelete={handleReviewDelete}
                ></MyReviewDetails>):
                <h2 className='text-center'>Review does not fount</h2>
            }
            </Row>
        </div>
    );
};

export default MyReview;