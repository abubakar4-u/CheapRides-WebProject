import React from 'react';
import { useState } from 'react';
import {Link} from "react-router-dom";
import { BsCarFrontFill, BsBook, BsLightbulbFill, BsCapslock, BsArrowRepeat} from "react-icons/bs";
import {BsFileEarmarkImage } from "react-icons/bs";
import { FaDeploydog, FaDollarSign } from "react-icons/fa";
import './RiderAddCar.css';
import axios from 'axios';

//Add Car Changes
const RiderAddCar = () => {

    const [formData, setFormData] = useState({
        name: '',
        image: null,
        description:'',
        availability: '',
        brand: '',
        category: '',
        price: '',
        regNum: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'image') {
            setFormData({ ...formData, image: e.target.files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        Object.keys(formData).forEach(key => {
            if(key === 'image') {
                formDataToSend.append('image', formData[key]); // Make sure the backend expects 'image'
            } else {
                formDataToSend.append(key, formData[key]);
            }
            console.log(formDataToSend); // Check if data is appended correctly
        });
        
        try {
            const response = await axios.post('/api/rides', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Car added successfully');
            console.log(response.data);
        } catch (error) {
            console.log(formDataToSend); // Check if data is appended correctly
            console.error('Error adding car:', error);
            alert('Failed to add car');
        }
    };

  return (
    <div className='login-container'>
        <form onSubmit={handleSubmit}>
    
            <div className='login-header1'>
                <div className='login-text'>Add Car</div>
                <div className='login-underline'></div>
            </div>
            <div className='login-inputs'>            
                <div className='login-input'>
                    <BsCarFrontFill/>
                    <input type="text" name="name" placeholder="Name" onChange={handleInputChange}/>
                </div>
                <div className='login-input'>
                    <BsBook/>
                    <input type="text" name="description" placeholder="Description" onChange={handleInputChange}/>
                </div>
                <div className='login-input'>
                    <BsLightbulbFill/>
                    <input type="text" name="brand" placeholder="Brand" onChange={handleInputChange}/>
                </div>
                <div className='login-input'>
                    <BsCapslock/>
                    <input type="text" name="category" placeholder="Category" onChange={handleInputChange}/>
                </div>
                <div className='login-input'>
                    <BsArrowRepeat/>
                    <input type="text" name="availability" placeholder="Available" readOnly/>
                </div>
                <div className='login-input'>
                    <FaDeploydog/>
                    <input type="text" name="regNum" placeholder="Registration Number" onChange={handleInputChange}/>
                </div>
                <div className='login-input'>
                    <FaDollarSign/>
                    <input type="number" name="price" placeholder="Price" onChange={handleInputChange}/>
                </div>

                <div className='login-input'>
                    <BsFileEarmarkImage />
                    <input type="file" name="image" accept="image/*" onChange={handleInputChange} />
                </div>

                <div className='login-submit-container'>
                    <button className="login-submit">Submit</button>
                    <Link to="/riderscreen" style={{ textDecoration: 'none' }}><button className='login-submit'> Back </button></Link>{' '}
                </div>
            </div>
        </form>
        
    </div>    
  )
}

export default RiderAddCar;