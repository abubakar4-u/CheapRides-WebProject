import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  transaction_id: {
    type: String,
    required: true,
  },
  booking_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Booking', // Reference to Bookings collection
    required: true,
  },
  transaction_date: {
    type: Date,
    default: Date.now,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  payment_method: {
    type: String,
    required: true,
  },
});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;
