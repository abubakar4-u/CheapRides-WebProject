import React, { useState } from "react";
import './Login.css';
import { BsEye, BsEnvelopeFill, BsFillEmojiSmileFill, BsFillPersonFill, BsPhone, BsPinMapFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function Login() {

  const [action, setAction] = useState("Login");
  return (
    <div className='login-container'>
        <div class='login-header1'>
            <div class='login-text'>{action}</div>
            <div className='login-underline'></div>
        </div>
        <div className='login-inputs'>
            {action==="Login" ? (
              <>
                <div className="login-input">
                  <BsFillPersonFill/>
                  <input type="text" placeholder='Username' />
                </div>
                <div className="login-input">
                  <BsEye/>
                  <input type="password" placeholder='Password'/>
                </div>
                <div className='login-input'>
                  <AiOutlinePlus/>
                  <select>
                    <option value="" disabled selected>Select Type</option>
                    <option value="C">Customer</option>
                    <option value="A">Admin</option>
                    <option value="R">Rider</option>
                  </select>
                </div>
              </>
            ): (
              <>
                <div className='login-input'>
                  <BsFillEmojiSmileFill/>
                  <input type="text" placeholder='Name'/>
                </div>
                <div className='login-input'>
                  <BsFillPersonFill/>
                  <input type="text" placeholder='Username'/>
                </div>
                <div className='login-input'>
                  <BsEnvelopeFill/>
                  <input type="email" placeholder='Email'/>
                </div>
                <div className='login-input'>
                  <BsEye/>
                  <input type="password" placeholder='Password'/>
                </div>
                <div className='login-input'>
                  <BsPinMapFill/>
                  <input type="text" placeholder='Address'/>
                </div>
                <div className='login-input'>
                  <BsPhone/>
                  <input type="text" placeholder="Contact"/>
                </div>
                <div className='login-input'>
                  <AiOutlinePlus/>
                  <select>
                    <option value="" disabled selected>Select Type</option>
                    <option value="C">Customer</option>
                    <option value="A">Admin</option>
                    <option value="R">Rider</option>
                  </select>
                </div>
              </>
            )}
        </div>
        {action === "Sign Up" ? (
          <div className="login-forgot-password">
              Forgot Password? <span>Click Here!</span>
          </div>
        ): null}
        
        <div className="login-submit-container">
            <div className={action==="Login"?"login-submit login-gray":"login-submit"} onClick={()=>{setAction("Sign Up")}}>
                Sign Up
            </div>
            <div className={action==="Sign Up"?"login-submit login-gray":"login-submit"} onClick={()=>{setAction("Login")}}>
                Login
            </div>
        </div>
    </div>
  )
}

export default Login