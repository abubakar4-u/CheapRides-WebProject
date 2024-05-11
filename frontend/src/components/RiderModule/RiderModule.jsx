import { Card } from "react-bootstrap";
import './RiderModule.css';
import Button from 'react-bootstrap/Button';

const Ride = ({ rides }) => {
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
                    <div className="button-container">
                        <Button variant="outline-primary">Update</Button>
                        <Button variant="outline-danger">Delete</Button>
                        <Button variant="outline-warning">History</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Ride;