import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <Row className='m-0'>
                <Col lg={7} className='mb-3'>
                    <h4>18101 Lorain Avenues</h4>
                    <h4>Cleveland, OH 44111</h4>
                    <p>440.333.8600</p>
                    <p className='fw-bold'>jannetdekkar@gmail.com</p>
                    <div className="">
                        
                    </div>
                </Col>
                <Col lg={5}>
                    <h4>Openings tijden</h4>
                    <p>Maandag & Vrijdag 8u- 17uZaterdag, Zondag en feestdagen gesloten. Buiten kantooruren, bel: Central Doctors: 0202357823(ma-vr 18 tot 20u za/zo 10 tot 20u, of Huisartsenpost 24/7: Tel: 0880030600</p>
                </Col>
            </Row>
            <p className='text-center mt-4'><small> Copyright jannetdekkar© 2022 Register.com</small></p>
        </div>
    );
};

export default Footer;