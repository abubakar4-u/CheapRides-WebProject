import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  availability: {
    type: Boolean,
    default: true,
  },
  brand: {
    type: String,
    required:true,
  },
  category: {
    type:String,
    required: true,
  },
  price: {
    type: Number,
    required:true,
  },
  regNum: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    
  }
});

const Car = mongoose.model('Car', carSchema);
export default Car;