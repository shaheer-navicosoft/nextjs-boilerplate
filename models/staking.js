import mongoose from "mongoose";

const stakingDetailsSchema = new mongoose.Schema({
  duration: { type: Number, required: true }, // in days
  apy: { type: String, required: true },
  lockedAmount: { type: Number, required: true },
  autoStakingEnabled: { type: Boolean, default: false },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: { type: String, enum: ['active', 'completed', 'cancelled'], default: 'active' }
});

const stakingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  coin: { type: mongoose.Schema.Types.ObjectId, ref: 'Coin', required: true },
  stakingDetails: stakingDetailsSchema
}, { timestamps: true });

const Staking = mongoose.models.Staking || mongoose.model('Staking', stakingSchema);

export default Staking;