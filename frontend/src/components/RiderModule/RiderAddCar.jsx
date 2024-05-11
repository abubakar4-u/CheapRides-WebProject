import React from 'react'
import {Link} from "react-router-dom";
import { BsCarFrontFill, BsBook, BsLightbulbFill, BsCapslock, BsArrowRepeat} from "react-icons/bs";
import { FaDeploydog, FaDollarSign } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import './RiderAddCar.css';

const RiderAddCar = () => {
  return (
    <div className='login-container'>
        <div className='login-header1'>
            <div className='login-text'>Add Car</div>
            <div className='login-underline'></div>
        </div>
        <div className='login-inputs'>            
            <div className='login-input'>
                <BsCarFrontFill/>
                <input type="text" placeholder='name'/>
            </div>
            <div className='login-input'>
                <BsBook/>
                <input type="text" placeholder='registration'/>
            </div>
            <div className='login-input'>
                <BsLightbulbFill/>
                <input type="text" placeholder='brand'/>
            </div>
            <div className='login-input'>
                <BsCapslock/>
                <input type="text" placeholder='category'/>
            </div>
            <div className='login-input'>
                <BsArrowRepeat/>
                <input type="text" placeholder='available' readOnly/>
            </div>
            <div className='login-input'>
                <FaDeploydog/>
                <input type="text" placeholder='regnum'/>
            </div>
            <div className='login-input'>
                <FaDollarSign/>
                <input type="text" placeholder='price'/>
            </div>

            <div className='login-submit-container'>
                <button className="login-submit">Submit</button>
                <Link to="/riderscreen" style={{ textDecoration: 'none' }}><button className='login-submit'> Back </button></Link>{' '}
            </div>
        </div>
    </div>    
  )
}

export default RiderAddCar