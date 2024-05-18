// CustomerUpdateScreen.jsx
//using axious here now to fetch data from front-end to backend
import React from 'react';
import { useEffect,useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomerEditInfo from '../components/CustomerModule/CustomerEditInfo';
import './CustomerUpdateScreen.css';
import axios from 'axios';

//import customers from '../customer';

//to be changed the customer how has logged in should be displayed
const CustomerUpdateScreen = () => {
  
  console.log('Update customer screen called customer api');
  const [customers, setCustomer] = useState([]);
    
  useEffect(() => {
    //customer-info/1
    const fetchCustomerInfo = async () => {
      //fetching  all the available customer from local host 5000
      const { data } = await axios.get('/api/customer');
      //calling setRide to store all data in it that we fetched
      setCustomer(data);
    };

    fetchCustomerInfo();
  },[]);

  return (
    <>
      <Row>
        {customers.map((cus) => (
          <Col key={cus._id} sm={12} md={6} lg={4} xl={3}>
            <CustomerEditInfo customers={cus} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CustomerUpdateScreen;