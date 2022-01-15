import React from 'react';
import '../Dashbord/Dashbord.css';
import { Col, Container, Row } from 'react-bootstrap';
import DashBordMenu from './ChildComponent/DashBordMenu';

const Dashbord = () => {
    return (
        <div className=' dashBord'>
            <Row >
                <Col md={3} sm={12} className='mt-4'>
                    <DashBordMenu></DashBordMenu>
                </Col>
                <Col md={9} sm={12} className='content'>
            <div className="headerSpace text-center">
                <p className='text-light'>Show Error or Success massage</p>
            </div>
            <div className="child-content">

            </div>
                </Col>
            </Row>
        </div>
    );
};

export default Dashbord;