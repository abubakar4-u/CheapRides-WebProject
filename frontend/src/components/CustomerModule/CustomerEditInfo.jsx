import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Customers from '../../customer'; // Adjust the path as needed
import './CustomerEditInfo.css';
import {Link} from "react-router-dom";
import { BsEye, BsPhone, BsPinMapFill, BsPersonDashFill, BsBookFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

const CustomerEditInfo = () => {
    const { id } = useParams(); // Extracting id from URL
    const originalCust= Customers.find(c => c._id === id); // Finding the specific ride
    const [cust, setCust] = useState(originalCust); // Setting up state for the ride
    const [isEditing, setIsEditing] = useState(false); // State to track if editing mode is on

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCust(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdate = () => {
        // Logic to update the ride information
        console.log("Updated Ride:", cust);
        // You can add logic here to send the updated data to your backend
        // For simplicity, just logging the updated ride object for now
    };
  
    return (
        <div className='login-container'>
        <div className='login-header1'>
            <div className='login-text'>Update</div>
            <div className='login-underline'></div>
        </div>
        {cust && (
        <div className='login-inputs'>
            <div className="login-input">
                <BsPersonDashFill/>
                <input type="text" name="name" value={cust.name} onChange={handleInputChange} disabled={!isEditing}/>
            </div>
            <div className="login-input">
                <BsBookFill/>
                <input type="text" name="username" value={cust.username} onChange={handleInputChange} disabled={!isEditing}/>
            </div>
            <div className="login-input">
                <BsEye/>
                <input type="text" name="password" value={cust.password} onChange={handleInputChange} disabled={!isEditing}/>               
            </div>
            <div className="login-input">
                <BsPinMapFill/>
                <input type="text" name="address" value={cust.address} onChange={handleInputChange} disabled={!isEditing}/>
            </div>
            <div className="login-input">
                <BsPhone/>
                <input type="text" name="contact" value={cust.contact} onChange={handleInputChange} disabled={!isEditing}/>
            </div>
            <div className="login-input">
                <AiOutlinePlus/>
                <input type="text" name="type" value={cust.type} onChange={handleInputChange} disabled={!isEditing}/>
            </div>
            
        </div>
        )}

        <div className='login-submit-container'>
            <button className='login-submit' onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? 'Save Changes' : 'Edit'}
            </button>
            <Link to="/customer-bookride" style={{ textDecoration: 'none' }}><button className='login-submit'> Back </button></Link>{' '}
        </div>
    </div>    
    )
}

export default CustomerEditInfo