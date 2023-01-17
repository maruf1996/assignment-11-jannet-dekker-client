import React from 'react';
import { Col, Row } from 'react-bootstrap';
import jannet from '../../img/jannet.jpg';
import './JannetAbout.css';

const JannetAbout = () => {
    return (
        <div className='about'>
            <Row className='m-0'>
                <Col lg={3} className="">
                    <img className='about_img' src={jannet} alt="" />
                </Col>
                <Col lg={4} className="fs-5 about_text">
                    <h1 className='text-info fw-bold'>Jannet Dekker</h1>
                    <p><span>DEPARTMENT</span> Cardiovascular Medicine</p>
                    <p><span>PRIMARY LOCATION</span> West Valley Medical Building</p>
                    <p><span>TYPE OF DOCTOR</span>  Adults Only</p>
                    <p><span>LANGUAGES</span>  English</p>
                    <p><span>SURGEON </span> No</p>
                </Col>
                <Col lg={5} className="fs-5 about_btn">
                    <h2 className=''>Call 440.333.8600</h2>
                   <button className='btn btn-primary btn-lg'>Request an Appointment</button>
                </Col>
            </Row>
        </div>
    );
};

export default JannetAbout;