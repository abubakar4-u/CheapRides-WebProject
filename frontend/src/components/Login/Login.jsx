import React, { useState } from "react";
import './Login.css';
import { BsEye, BsEnvelopeFill, BsFillEmojiSmileFill } from "react-icons/bs";

function Login() {

  const [action, setAction] = useState("Login");
  return (
    <div className='login-container'>
        <div class='login-header1'>
            <div class='login-text'>{action}</div>
            <div className='login-underline'></div>
        </div>
        <div className='login-inputs'>
            {action==="Login"?<div></div>:<div className='login-input'>
              <BsFillEmojiSmileFill/>  
              <input type="login-text" placeholder='Name'/>
            </div>}
            
            <div className='login-input'>
              <BsEnvelopeFill/>  
              <input type="login-email" placeholder='Email'/>
              
            </div>
            <div className='login-input'>
              <BsEye/>  
              <input type="login-password" placeholder='Password'/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="login-forgot-password">
            Forgot Password? <span>Click Here!</span>
        </div>}
        
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