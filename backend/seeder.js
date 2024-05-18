import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Customer from './data/customer.js';
import CarData from './data/Cars.js';
import Rides from './data/rides.js';
import User from './models/User.js';

import Booking from './models/Booking.js';
import Car from './models/Car.js';
import Transaction from './models/Transaction.js';
import Review from './models/Review.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();


const importData = async () =>{
    try {
        await Booking.deleteMany();
        await User.deleteMany();
        await Car.deleteMany();
        await Transaction.deleteMany();
        await Review.deleteMany();

        const createdUsers = await User.insertMany(Customer);
        const createdCars = await Car.insertMany(CarData);
        console.log("Inserting dummy booking...");
        const carId = createdCars[0]._id;

        try {
            // Find a user who is a rider with type "R"
            const riderUser = await User.findOne({ type: "R" }); // Adjust this query based on your user schema
            if (riderUser) {
                console.log("Rider found:", riderUser);
                const dummyBookingData = {
                    customer: riderUser._id, // Assume 'customer' refers to the rider in the booking schema
                    car: carId, // Replace '1000' with an actual car ID from your createdCars or a valid ID in your database
                    startDate: new Date(), // Set the start date as today for example
                    endDate: new Date(new Date().setDate(new Date().getDate() + 1)), // End date is tomorrow for example
                    pickupLocation: '204-B, Wapda City, Faisalabad',
                    dropoffLocation: 'FAST-NUCES, looneywala',
                    fare: 1000, // Example fare
                    status: 'confirmed', // Example status
                };
    
                const booking = await Booking.create(dummyBookingData);
                console.log('Dummy booking inserted successfully:', booking);
            } else {
                console.log('No rider user found to create a booking for.');
            }
        } catch (error) {
            console.error('Error inserting dummy booking:', error);
        }

        console.log('Data Imported!');
        process.exit();
    } catch (error)
    {
        console.log(`${error}`);
        process.exit(1);  
    }
};


const destroyData = async () => {

    try {
        await Booking.deleteMany();
        await User.deleteMany();
        await Car.deleteMany();
        await Transaction.deleteMany();
        await Review.deleteMany();
        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.log(`${error}`);
        process.exit(1);  
    }
};



if (process.argv[2] === '-d'){
    destroyData();
}
else{
    importData();
}
