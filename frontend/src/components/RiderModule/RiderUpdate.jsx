import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
//import rides from '../../rides'; // Adjust the path as needed
import './RiderUpdate.css';
import {Link} from "react-router-dom";
import { BsCarFrontFill, BsBook, BsLightbulbFill, BsCapslock, BsArrowRepeat} from "react-icons/bs";
import { FaDeploydog, FaDollarSign } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

const RiderUpdate = () => {

    const { id } = useParams(); // Extracting id from URL
    const [ride, setRide] = useState(null); // Initialize ride as null
    const [isEditing, setIsEditing] = useState(false); // State to track if editing mode is on

    // Fetch car data from the server
    useEffect(() => {
        const fetchRide = async () => {
            try {
                const response = await axios.get(`/api/rides/${id}`);
                setRide(response.data); // Set fetched data to state
            } catch (error) {
                console.error('Failed to fetch ride data:', error);
            }
        };

        fetchRide();
    }, [id]); // Dependency array with ID to refetch if ID changes

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRide(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Add axios PUT request here to update data in backend
    const handleUpdate = async () => {
        console.log("Updated Ride:", ride);
        try {
            const response = await axios.put(`/api/rides/${id}`, ride);
            console.log("Response after update:", response.data);
            alert('Ride updated successfully');
        } catch (error) {
            console.error('Error updating ride:', error);
            alert('Failed to update ride');
        }
    };

    if (!ride) {
        return <div>No Ride found</div>; // Show loading state while data is being fetched
    }

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
                <input type="text" name="RegNum" value={ride.regNum} onChange={handleInputChange} disabled={!isEditing}/>
            </div>
            <div className="login-input">
                <FaDollarSign/>
                <input type="text" name="price" value={ride.price} onChange={handleInputChange} disabled={!isEditing}/>
            </div>
            <div className='login-input'>
                  <AiOutlinePlus/>
                  <select name="availability" value={ride.availability} onChange={handleInputChange} disabled={!isEditing}>
                    <option value='true'>Yes</option>
                    <option value='false'>No</option>
                  </select>
            </div>
        </div>
        )}

        <div className='login-submit-container'>
            <button className='login-submit' onClick={isEditing ? handleUpdate : () => setIsEditing(true)}>
                {isEditing ? 'Save Changes' : 'Edit'}
            </button>
            <Link to="/riderscreen" style={{ textDecoration: 'none' }}><button className='login-submit'> Back </button></Link>{' '}
        </div>
    </div>
  );
}

export default RiderUpdate;
