import React from 'react'
import './footer.css'
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";

function footer() {
  return (
    <div class="none">
        <section class="newsletter">
            <h2>Subscribe to NewsLetter</h2>

            <div class="box">
                <input type="text" placeholder="Enter Your Email"/>
                
                <button className="btn">Subscribe</button>
            </div>
        </section>
        <div class="copyright">
            <p>&#169; Abubakar-Hateem all rights reserved</p>
            <div class="social">
                <FaFacebook/>
                <FaGithub/>
                <FaGoogle/>
            </div>
        </div>
    </div>
  )
}

export default footer