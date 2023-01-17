import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './AdditionalLocations.css';

const AdditionalLocations = () => {
    return (
        <div className='location_container'>
            <div className="location">
            <h2 className='text-justify fw-bold mb-4'>Additional Locations</h2>
            <Row>
                <Col lg={6} className="mb-5">
                    <h4>Cardiovascular Medicine</h4>
                    <h4 className='mb-2'>Fairview Hospital</h4>
                    <h5>18101 Lorain Avenue</h5>
                    <h5>Cleveland, OH 44111</h5>
                    <div className="d-flex justify-content-between w-50 mt-4">
                        <h5>Appointment:</h5>
                        <h6>440.333.8600</h6>
                    </div>
                    <div className="d-flex justify-content-between w-50">
                        <h5>Desk:</h5>
                        <h6>440.333.8600</h6>
                    </div>
                    <div className="d-flex justify-content-between w-50">
                        <h5>Fax:</h5>
                        <h6>440.333.5015</h6>
                    </div>
                </Col>
                <Col lg={6} className="mb-5">
                    <h4>Cardiovascular Medicine</h4>
                    <h4 className='mb-2'>Lutheran Hospital</h4>
                    <h5>1730 W. 25th Street</h5>
                    <h5>Cleveland, OH 44113</h5>
                    <div className="d-flex justify-content-between w-50 mt-4">
                        <h5>Appointment:</h5>
                        <h6>440.333.8600</h6>
                    </div>
                    <div className="d-flex justify-content-between w-50">
                        <h5>Desk:</h5>
                        <h6>440.333.8600</h6>
                    </div>
                    <div className="d-flex justify-content-between w-50">
                        <h5>Fax:</h5>
                        <h6>440.333.5015</h6>
                    </div>
                </Col>
            </Row>
            </div>
        </div>
    );
};

export default AdditionalLocations;