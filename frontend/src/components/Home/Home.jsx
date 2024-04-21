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
                    Meet your ride
                </span>
                <h1 className="homeTitle">
                    Economy - Exotic Rides
                </h1>
            </div>

            

            <Carousel responsive={responsive}>
                <div className="homeImage">
                    <img className='product--image' src={CarImage} alt="car"/>
                    <p>Sedans - B/C Segment</p>
                </div>
                <div className="homeImage">
                    <img className='product--image' src={AudiImage} alt="audi"/>
                    <p>Exotics</p>
                </div>
                <div className="homeImage">
                    <img className='product--image' src={BikeImage} alt="bike"/>
                    <p>Bike</p>
                </div>
                <div className="homeImage">
                    <img className='product--image' src={BusImage} alt="bike"/>
                    <p>Coasters</p>
                </div>
                <div className="homeImage">
                    <img className='product--image' src={TruckImage} alt="bike"/>
                    <p>Truck</p>
                </div>
            </Carousel>;

            <div class="form-container">
                <form actions="">
                    <div className="input-box">
                        <span>Location</span>
                        <input type="search" name="" id="" placeholder="Search Places"/>
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
            </div>
        </div>
    </div>
  )
}

export default Home