import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/User.js';
import customer from '../models/User.js';
import generateToken from '../utilis/generateToken.js';
//get
const getUserProfile = asyncHandler(async (req,res)=> {
    const user = await User.findById(req.user._id);
    if(user){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            address: user.address,
            contact: user.contact,
            type: user.type, 
        });
    }else{
        res.status(404);
        throw new Error('User not Found');
    }
});

const getUserById= asyncHandler(async (req,res)=> {
    console.log("user by id");
    const customers = await customer.findById(req.params.id);
    if (customers) {
        return res.json(customers);
    }
    res.status(404).json({message: 'not found'});
});

//post req
const authUser = asyncHandler(async (req,res)=> {
    const {email, password} = req.body;
    const user = await User.findOne({ email });
    if(user && (await user.matchPassword(password))){
        generateToken(res, user._id);
        res.json({
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            address: user.address,
            contact: user.contact,
            type: user.type,
        })
    }else{
        res.status(401);
        throw new Error('Invalid email or password');
    }
    
});


const registerUser= asyncHandler(async (req,res)=> {
    const { name, email, password, username, address, contact, type} = req.body;

    const userExist = await User.findOne({email});
    if(userExist){
        res.status(400);
        throw new Error('User Exist Alredy!'); 
    }

    const user = await User.create({
        name,
        username,
        email,
        password,
        address,
        contact,
        type
    });

    if(user){
        generateToken(res, user._id);
        res.status(201).json({
            _id:user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            address: user.address,
            contact: user.contact,
            type: user.type,
        });
    } else{
        res.status(400);
        throw new Error('Invalid user data');
    }
});

//logout, cookie clear
const logoutUser = asyncHandler(async (req,res)=> {
    res.cookie('jwt','', {
        httpOnly: true,
        expires: new Date(0),
    });
    res.status(200).json({message: 'Logged Out Succesfully'});
});

//put req
const updateUserProfile = asyncHandler(async (req,res)=> {
    const user = await User.findById(req.user._id);
    if(user){
        user.name = req.body.name || user.name;
        user.username= req.body.username || user.username;
        user.email= req.body.email || user.email;
        user.address= req.body.address || user.address;
        user.contact= req.body.contact || user.contact;
        user.type= req.body.type || user.type;
        if(req.body.password){
            user.password = req.body.password;
        }

        const updatedUser = await user.save();
        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            username: updatedUser.username,
            email: updatedUser.email,
            address: updatedUser.address,
            contact: updatedUser.contact,
            type: updatedUser.type,
        });
    }else{
        res.status(400);
        throw new Error('Cannot ');   
    }

}); 

//get user for admin
const getUsers = asyncHandler(async (req,res)=> {
    res.send('get user for admin');
}); 

//delete user admin
const deleteUser = asyncHandler(async (req,res)=> {
    res.send('delete user');
}); 

//for admin
const updateUserById= asyncHandler(async (req,res)=> {
    res.log("user by id");
    
});

export {getUserProfile,getUserById,authUser, registerUser, logoutUser,updateUserProfile,
    getUsers,deleteUser,updateUserById
};
