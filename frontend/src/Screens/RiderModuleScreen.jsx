import React from 'react';
import {Row, Col} from 'react-bootstrap';
import rides from '../rides';
import RiderModule from '../components/RiderModule/RiderModule';
import { Link } from 'react-router-dom';
import './RiderModuleScreen.css';

const RiderModuleScreen = () => {
  return (
    <>
        <div style={{ display: 'flex', alignItems: 'center' }}> {/* Added a wrapper div */}
            <h1 style={{ marginLeft: '20px' }}>Latest Rides</h1>
            <Link to="/ride-addcar" style={{ textDecoration: 'none', marginTop:'40px' }}><button className='login-submit'> Add Ride </button></Link>
        </div>
        <Row>
            {rides.map((ride) => (
                <Col key={ride._id} sm={12} md={6} lg={4} xl={3}>
                    <RiderModule rides={ride}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default RiderModuleScreen