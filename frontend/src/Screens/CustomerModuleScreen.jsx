import React from 'react';
import {Row, Col} from 'react-bootstrap';
import rides from '../rides';
import CustomerModule from '../components/CustomerModule/CustomerModule';
import { Link } from 'react-router-dom';
import './CustomerModuleScreen.css';

const CustomerModuleScreen = () => {
  return (
    <>
        <div style={{ display: 'flex', alignItems: 'center' }}> {/* Added a wrapper div */}
            <h1 style={{ marginLeft: '20px' }}>Latest Rides</h1>
            <Link to="/edit-information" style={{ textDecoration: 'none', marginTop:'40px' }}><button className='login-submit'> Edit Perosnal Information </button></Link>
        </div>
        <Row>
            {rides.map((ride) => (
                <Col key={ride._id} sm={12} md={6} lg={4} xl={3}>
                    <CustomerModule rides={ride}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default CustomerModuleScreen