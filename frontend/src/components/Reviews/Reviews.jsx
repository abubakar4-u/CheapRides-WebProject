import React from 'react';
import './Review.css';
import { TiHeartFullOutline, TiHeartHalfOutline } from "react-icons/ti";

import Rev1Image from '../../Assests/rev1.jpg';
import Rev2Image from '../../Assests/rev2.jpg';
import Rev3Image from '../../Assests/rev3.jpg';

function Reviews() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return (
    <section class="reviews" id="reviews" responsive={responsive}>
        <div class="heading">
            <span>Reviews</span>
            <h1>What Our Customer Experiences</h1>
        </div>
        
        <div class="review-container">
            <div class="box">
                <div class="rev-img">
                    <img src={Rev2Image} alt= "rev1"/>
                </div>
                <h2>Patreik Bateman</h2>
                <div class="stars">
                    <TiHeartFullOutline/>
                    <TiHeartFullOutline/>
                    <TiHeartFullOutline/>
                    <TiHeartFullOutline/>
                    <TiHeartFullOutline/>
                </div>
                <p>It was a good ride. Car condition was also really good.</p>
            </div>
        

            <div class="box">
                <div class="rev-img">
                    <img src={Rev1Image} alt= "rev1"/>
                </div>
                <h2>Sylvester Colon</h2>
                <div class="stars">
                    <TiHeartFullOutline/>
                    <TiHeartFullOutline/>
                    <TiHeartFullOutline/>
                    <TiHeartHalfOutline/>
                </div>
                <p>It was a good ride. Car condition was also really good.</p>
            </div>
        

            <div class="box">
                <div class="rev-img">
                    <img src={Rev3Image} alt= "rev1"/>
                </div>
                <h2>Maya Khan</h2>
                <div class="stars">
                    <TiHeartFullOutline/>
                    <TiHeartFullOutline/>
                    <TiHeartFullOutline/>
                    <TiHeartHalfOutline/>
                </div>
                <p>It was a good ride. Car condition was also really good.</p>
            </div>
        </div>
    </section>
  );
}

export default Reviews