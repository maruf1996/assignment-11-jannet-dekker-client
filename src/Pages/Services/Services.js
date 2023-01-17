import React from 'react';
import { Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import Service from '../../Shared/Service/Service';
import './Service.css';

const Services = () => {
    const services=useLoaderData();
    useTitle('All Service');

    return (
        <div className='mb-5 mt-4'>
        <h1 className='service_heading'>My Services</h1>
        <Row xs={1} md={3} className="g-4 m-0">
        {
              services.map(service=><Service
              key={service._id}
              service={service}
              ></Service>)  
        }       
        </Row> 
        </div>
    );
};

export default Services;