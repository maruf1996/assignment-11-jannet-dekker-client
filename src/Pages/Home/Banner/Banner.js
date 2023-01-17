import React from 'react';
import img from '../../../img/heroBanner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <img className='hero_image' src={img} alt="" />
            <div className="hero-text">
                <h1>Welcome</h1>
                <h1>My Website</h1>
                <h1 className='text-danger'>"Jannet Dekker"</h1>
            </div>
        </div>
    );
};

export default Banner;