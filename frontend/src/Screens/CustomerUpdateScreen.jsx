// CustomerUpdateScreen.jsx
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CustomerEditInfo from '../components/CustomerModule/CustomerEditInfo';
import './CustomerUpdateScreen.css';
import customers from '../customer';
const CustomerUpdateScreen = () => {
  return (
    <>
      <Row>
        {customers.map((cus) => (
          <Col key={cus._id} sm={12} md={6} lg={4} xl={3}>
            <CustomerEditInfo customer={cus} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CustomerUpdateScreen;