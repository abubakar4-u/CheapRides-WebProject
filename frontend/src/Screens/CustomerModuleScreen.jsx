//use api to show available rides to customer
import React from 'react';
import { useEffect, useState } from 'react';
import {Row, Col} from 'react-bootstrap';
import CustomerModule from '../components/CustomerModule/CustomerModule';
import { Link } from 'react-router-dom';
import './CustomerModuleScreen.css';
//import Customer from '../customer'; // Ensure the correct import path for Customer data
import axios from 'axios';

const CustomerModuleScreen = () => {

  const [CustomerId,setCustomer] = useState([]);
  useEffect(() => {
    console.log('customer module screen called customer api');
    //customer-bookride
    const fetchCustomer = async () => {
      //fetching  all the available ride from local host 5000
      const { data } = await axios.get('/api/customer');
      //calling setRide to store all data in it that we fetched
      setCustomer(data);
    };

    fetchCustomer();
  },[]);

  //the data is stored in rides
  //defining dependency array
  const [rides, setRide] = useState([]);
  
  
  useEffect(() => {
    //customer-bookride
    const fetchCustomerBookride = async () => {
      //fetching  all the available ride from local host 5000
      const { data } = await axios.get('/api/rides');
      //calling setRide to store all data in it that we fetched
      setRide(data);
    };

    fetchCustomerBookride();
  },[]);

  return (
    <>
        {/* customer id  fetching, who book ride */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <h1 style={{ marginLeft: '20px' }}>Available Rides</h1>
            <Link to={`/customer-info/${CustomerId}`} style={{ textDecoration: 'none', marginTop:'40px' }}>
              <button className='login-submit'>Edit Personal Information</button>
            </Link>
        </div>
        <Row>
            {/*rides send data to ride variable and display */}
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
