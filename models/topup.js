import mongoose from 'mongoose';

const topupSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  amount: {
    type: Number,
    required: [true, 'Topup amount is required'],
    min: [0, 'Amount cannot be negative']
  },
  coin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Coin',
    required: true
  },
  status: {
    type: String,
    default: 'Awaiting approval'
  }
 
}, {
  timestamps: true // Automatically manage createdAt and updatedAt
});

const Topup = mongoose.models.Topup || mongoose.model('Topup', topupSchema);

export default Topup;