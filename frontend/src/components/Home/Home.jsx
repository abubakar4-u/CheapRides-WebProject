import React from 'react'
import './home.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


// Imported Image
import CarImage from '../../Assests/civic.png';
import AudiImage from '../../Assests/audi1.png';
import BikeImage from '../../Assests/bike1.png';
import BusImage from '../../Assests/BusOrig.png';
import TruckImage from '../../Assests/redtruck.png';


import Ride from '../Ride/Ride';
import Reviews from '../Reviews/Reviews';

function Home() {
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
    <div className='home'>
        <div className="sectionContainer">
            <div class="hometext">
                <span className="homeSpan">
                    Meet our Services
                </span>
                <h1 className="homeTitle">
                    Economy - Exotic Rides
                </h1>
            </div>

            
        
            <Carousel responsive={responsive}>
                <div className="homeImage">
                    <img className='product--image' src={CarImage} alt="car"/>
                    <p>Sedans - B/C Segment</p>
                    <p>
                        <button>Book Sedan</button>
                    </p>
                </div>
                <div className="homeImage">
                    <img className='product--image' src={AudiImage} alt="audi"/>
                    <p>Exotics</p>
                    <p>
                        <button>Book Exotic</button>
                    </p>
                </div>
                <div className="homeImage">
                    <img className='product--image' src={BikeImage} alt="bike"/>
                    <p>Bike</p>
                    <p>
                        <button>Book Bike</button>
                    </p>
                </div>
                <div className="homeImage">
                    <img className='product--image' src={BusImage} alt="bike"/>
                    <p>Coasters</p>
                    <p>
                        <button>Book Coaster</button>
                    </p>
                </div>
                <div className="homeImage">
                    <img className='product--image' src={TruckImage} alt="bike"/>
                    <p>Truck</p>
                    <p>
                        <button>Book Truck</button>
                    </p>
                </div>
            </Carousel>;

            <h3 class="L1">Enter Location</h3>
            <div class="form-container" responsive1={responsive}>
                <form actions="">
                    <div className="input-box">
                        <span>PickupLocation</span>
                        <input type="search" name="" id="" placeholder="Pickup Location"/>
                    </div>
                    <div className='input-box'>
                        <span>DropLocation</span>
                        <input type="search" name="" id="" placeholder="Drop Location"/>
                    </div>
                    <div className="input-box">
                        <span>Pick-Up Date</span>
                        <input type="date" name="" id="" />
                    </div>
                    <div className="input-box">
                        <span>Return Date</span>
                        <input type="date" name="" id="" />
                    </div>
                    <input type="submit" name="" id="" class="fbtn"/>
                </form>
            </div>;
        </div>

        <Ride />
        <Reviews />
    </div>
  )
}

export default Home;