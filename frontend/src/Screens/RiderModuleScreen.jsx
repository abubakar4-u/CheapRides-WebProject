import React from 'react';
import {Row, Col} from 'react-bootstrap';
import rides from '../rides';
import RiderModule from '../components/RiderModule/RiderModule';

const RiderModuleScreen = () => {
  return (
    <>
        <h1>Latest Rides</h1>
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