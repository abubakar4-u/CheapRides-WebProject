import asyncHandler from '../middleware/asyncHandler.js';
import rides from '../models/Car.js';

//@desc fetch all rides
//@route GET/api/rides
//@access public
const getRides = asyncHandler(async (req,res) => {
   
    const ride = await rides.find({});
    res.json(ride);
});


//@desc fetch a rides
//@route GET/api/rides/:id
//@access public
const getRidesById = asyncHandler(async (req,res) => {
   
    const ride = await rides.findById(req.params.id);
    if (ride) {
        return res.json(ride);
    }
    else
    {
        res.status(404);
        throw new Error('Resource not Found');
    }
});

//@desc Update a ride
//@route PUT /api/rides/:id
//@access Public
const updateRideById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const ride = await rides.findById(id);

    if (!ride) {
        res.status(404);
        throw new Error('Ride not found');
    }

    const updatedRide = await rides.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true
    });

    if (!updatedRide) {
        res.status(400);
        throw new Error('Unable to update the ride');
    }

    res.json(updatedRide);
});

//@desc Add a new car
//@route POST /api/rides
//@access Public
//const image = bike1; // Assuming 'image' is the name of the file field
//image: image.path, // Store the path of the image

const addRide = asyncHandler(async (req, res) => {
    const { name, description, brand, category, regNum, price } = req.body;
    //const image = bike1; // Assuming 'image' is the name of the file field
    const newRide = new rides({
        name,
        description,
        availability: true, // Assuming all new cars are available by default
        brand,
        category,
        price,
        regNum,
    });

    const savedRide = await newRide.save();
    res.status(201).json(savedRide);
});


export { getRides, getRidesById, updateRideById, addRide };

