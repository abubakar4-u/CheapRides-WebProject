import asyncHandler from '../middleware/asyncHandler.js';
import customer from '../models/User.js';


const getCustomer = asyncHandler(async (req,res)=> {
    const customers = await customer.find({type: 'C'});
    res.json(customers);
});

const getCustomerById = asyncHandler(async (req,res)=> {
    console.log("customer route called");
    const customers = await customer.findById(req.params.id);
    if (customers) {
        return res.json(customers);
    }
    res.status(404).json({message: 'not found'});
});

export {getCustomer,getCustomerById};
