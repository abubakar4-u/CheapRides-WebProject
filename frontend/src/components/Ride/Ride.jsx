import React from 'react'
import { FaMapMarkerAlt, FaCalendarCheck, FaCarSide } from "react-icons/fa";
import './Ride.css';

function Ride() {
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
    <section class="ride" id="ride" responsive1={responsive}>
        <div class="heading">
            <span>How to Book Ride</span>
            <h1>Rent With 3 Easy Steps</h1>
        </div>
        <div class="ride-container">
            <div class="box">
                <FaMapMarkerAlt class="marker"/>
                <h2>Choose A location</h2>
                <p>First input your location. From all the list of all avialable location in your area.</p>
            </div>
            <div class="box">
                <FaCalendarCheck/>
                <h2>Pick-Up/Drop Date</h2>
                <p>Then enter your Pick-up/Drop Date. Whether you have to return the same date, or not.</p>
            </div>
            <div class="box">
                <FaCarSide/>
                <h2>Select Ride</h2>
                <p>Then, accordingly to purpose select the ride. Whether car, bike, truck, or bus.</p>
            </div>
        </div>
    </section>
  );
}

export default Ride