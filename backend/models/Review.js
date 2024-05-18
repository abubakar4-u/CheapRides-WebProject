import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  review_id: {
    type: String,
    required: true,
  },
  car_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Car', // Reference to Cars collection
    required: true,
  },
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to Users collection
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Review = mongoose.model('Review', reviewSchema);
export default Review;
