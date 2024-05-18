import asyncHandler from '../middleware/asyncHandler.js';
import rider from '../models/User.js';

const getRider = asyncHandler(async (req,res)=> {
    console.log("driver route called");
    const drivers = await rider.find({type: 'R'});
    res.json(drivers);
});

const getRiderById = asyncHandler(async (req,res)=> {
    console.log("driver route called");
    const drivers = await rider.findById(req.params.id);
    if (drivers) {
        return res.json(drivers);
    }
    res.status(404).json({message: 'not found'});
});

export{getRider,getRiderById};
