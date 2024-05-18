//customer ride booking page
//customer confirm ride from this page

import React from 'react'
import {Link} from "react-router-dom";
import { BsArrowDownRightSquare, BsArrowUpLeftSquare, BsCalendar2Minus, BsCalendar2MinusFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";

import { Button } from 'react-bootstrap';
import './CustomerBookRide.css';

const CustomerBookRide = () => {
  return (
        <div className='login-container'>
            <div className='login-header1'>
                <div className='login-text'>Add Location</div>
                <div className='login-underline'></div>
            </div>
            <div className='login-inputs'>            
                <div className='login-input'>
                    <BsArrowDownRightSquare/>
                    <input type="text" placeholder='pickup Location'/>
                </div>

                <div className='login-input'>
                    <BsArrowUpLeftSquare/>
                    <input type="text" placeholder='dropLocation'/>
                </div>

                <div className='login-input'>
                    <BsCalendar2Minus/>
                    <input type="date" placeholder='date'/>
                </div>

                <div className='login-input'>
                    <BsCalendar2Minus/>
                    <input type="date" placeholder='pickupdate'/>
                </div>

                {/* payment placeholder*/}
                <div className='login-input'>
                    <MdAttachMoney />
                    <input type="text" placeholder='payment'/>
                </div>

                <div className='login-submit-container'>
                    <button className="login-submit">Book Ride</button>
                    <Link to="/customer-bookride" style={{ textDecoration: 'none' }}><button className='login-submit'> Back </button></Link>{' '}
                </div>
            </div>
        </div>
  )
}

export default CustomerBookRide