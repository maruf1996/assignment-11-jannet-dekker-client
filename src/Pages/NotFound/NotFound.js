import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const NotFound = () => {
    useTitle('NotFound');
    return (
        <div style={{margin:'6rem 0'}} className='text-center'>
            <h1 className='text-danger mb-4'>Oops!</h1>
            <h5>Something went wrong</h5>
            <div className="mt-5">
            <Link className='text-decoration-none' to='/'>Go to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;