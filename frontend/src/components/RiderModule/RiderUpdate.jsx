import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import rides from '../../rides'; // Adjust the path as needed
import './RiderUpdate.css';
import {Link} from "react-router-dom";
import { BsCarFrontFill, BsBook, BsLightbulbFill, BsCapslock, BsArrowRepeat} from "react-icons/bs";
import { FaDeploydog, FaDollarSign } from "react-icons/fa";

const RiderUpdate = () => {
    const { id } = useParams(); // Extracting id from URL
    const originalRide = rides.find(r => r._id === id); // Finding the specific ride
    const [ride, setRide] = useState(originalRide); // Setting up state for the ride
    const [isEditing, setIsEditing] = useState(false); // State to track if editing mode is on

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRide(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = () => {
        // Logic to update the ride information
        console.log("Updated Ride:", ride);
        // You can add logic here to send the updated data to your backend
        // For simplicity, just logging the updated ride object for now
    };

    return (
    <div className='login-container'>
        <div className='login-header1'>
            <div className='login-text'>Update</div>
            <div className='login-underline'></div>
        </div>
        {ride && (
        <div className='login-inputs'>
            <div className="login-input">
                <BsCarFrontFill/>
                <input type="text" name="name" value={ride.name} onChange={handleInputChange} disabled={!isEditing}/>
            </div>
            <div className="login-input">
                <BsBook/>
                <input type="text" name="description" value={ride.description} onChange={handleInputChange} disabled={!isEditing}/>
            </div>
            <div className="login-input">
                <BsLightbulbFill/>
                <input type="text" name="brand" value={ride.brand} onChange={handleInputChange} disabled={!isEditing}/>               
            </div>
            <div className="login-input">
                <BsCapslock/>
                <input type="text" name="category" value={ride.category} onChange={handleInputChange} disabled={!isEditing}/>
            </div>
            <div className="login-input">
                <FaDeploydog/>
                <input type="text" name="RegNum" value={ride.RegNum} onChange={handleInputChange} disabled={!isEditing}/>
            </div>
            <div className="login-input">
                <FaDollarSign/>
                <input type="text" name="price" value={ride.price} onChange={handleInputChange} disabled={!isEditing}/>
            </div>
            
        </div>
        )}

        <div className='login-submit-container'>
            <button className='login-submit' onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Save Changes' : 'Edit'}
            </button>
            <Link to="/riderscreen" style={{ textDecoration: 'none' }}><button className='login-submit'> Back </button></Link>{' '}
        </div>
    </div>
  );
}

export default RiderUpdate;
