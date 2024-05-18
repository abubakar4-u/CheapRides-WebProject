import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  username:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address:{
    type: String,
    required: true,
  },
  contact:{
    type: Number,
    required: true,
  },
  type: {
    type: String,
    enum: ['R', 'C','A'],
    required:true,
  },

});

userSchema.methods.matchPassword = async function (enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password);
};

//pasword hashed before save in database
userSchema.pre('save', async function (next) {
  if(!this.isModified('password')) {
    next();
  }

  const salt = await bcrypt.genSalt(8);
  this.password = await bcrypt.hash(this.password,salt);
});

const User = mongoose.model('User', userSchema);
export default User;

