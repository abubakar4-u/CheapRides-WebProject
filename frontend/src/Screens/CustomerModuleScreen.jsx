import React from 'react';
import {Row, Col} from 'react-bootstrap';
import rides from '../rides';
import CustomerModule from '../components/CustomerModule/CustomerModule';
import { Link } from 'react-router-dom';
import './CustomerModuleScreen.css';
import Customer from '../customer'; // Ensure the correct import path for Customer data

const CustomerModuleScreen = () => {
  const someCustomerId = Customer[0]._id; // Assuming you want to edit the first customer

  return (
    <>
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 style={{ marginLeft: '20px' }}>Available Rides</h1>
            <Link to={`/customer-info/${someCustomerId}`} style={{ textDecoration: 'none', marginTop:'40px' }}>
              <button className='login-submit'>Edit Personal Information</button>
            </Link>
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

export default CustomerModuleScreen;
