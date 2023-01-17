import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Service from '../../../Shared/Service/Service';
import './LimitServices.css';

const LimitServices = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('https://jannet-dekker-server.vercel.app/limitServices')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className='service_container'>
        <h1 className='service_heading'>My Services</h1>
        <Row xs={1} md={3} className="g-4 m-0">
        {
              services.map(service=><Service
              key={service._id}
              service={service}
              ></Service>)  
        }       
        </Row> 
        <div className="services_btn">
            <Link to='/services'>See All Service</Link>
        </div>
        </div>
    );
};

export default LimitServices;