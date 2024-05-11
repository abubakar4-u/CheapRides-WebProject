import React from 'react'
import { Card } from "react-bootstrap";
import './CustomerModule.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const CustomerModule = ({ rides }) => {
    return (
        <div className='rideimg'>
            <Card className="my-3 p-2 rounded h-100 custom-card-width">
                
                <a href={`/rides/${rides._id}`}>
                    <Card.Img className='product-image' src={rides.image} />
                </a>

                <Card.Body>
                    <a href={`/rides/${rides._id}`}>
                        <Card.Title as="div">
                            {/* Center the title */}
                            <strong>{rides.name}</strong>
                        </Card.Title>
                    </a>
                    {/* Buttons displayed below the ride name */}
                    <p>
                        <Link to="/customer-booked"><Button className='Sbtn'>Book Sedan</Button></Link>
                    </p>
                </Card.Body>
            </Card> 
        </div>
    );
}

export default CustomerModule