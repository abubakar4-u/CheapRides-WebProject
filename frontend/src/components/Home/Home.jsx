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
                    <h2>Sedans - C Segment</h2>
                    <p className="price">Starting from Rs.900</p>
                    <p>.........</p>
                    <p>
                        <button>Sedans</button>
                    </p>
                </div>
                <div className="homeImage">
                    <img className='product--image' src={AudiImage} alt="audi"/>
                    <h2>Exotics</h2>
                    <p className="price">Starting from Rs.40,000</p>
                    <p>.........</p>
                    <p>
                        <button>Exotics</button>
                    </p>
                </div>
                <div className="homeImage">
                    <img className='product--image' src={BikeImage} alt="bike"/>
                    <h2>Bike</h2>
                    <p className="price">Starting from Rs.400</p>
                    <p>.........</p>
                    <p>
                        <button>Bike</button>
                    </p>
                </div>
                <div className="homeImage">
                    <img className='product--image' src={BusImage} alt="bike"/>
                    <h2>Coasters</h2>
                    <p className="price">Starting from Rs.10,000</p>
                    <p>.........</p>
                    <p>
                        <button>Coasters</button>
                    </p>
                </div>
                <div className="homeImage">
                    <img className='product--image' src={TruckImage} alt="bike"/>
                    <h2>Truck</h2>
                    <p className="price">Starting from Rs.100,000</p>
                    <p>.........</p>
                    <p>
                        <button>Trucks</button>
                    </p>
                </div>
            </Carousel>;
        </div>
    </div>
  )
}

export default Home