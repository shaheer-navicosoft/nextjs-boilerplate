import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
    lowercase: true,
    trim: true
  },
   
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minLength: [3, 'Username must be at least 3 characters long']
  },
  status: {
    type: String,
    default: 'ACTIVE',
  },
  role: {
    type: String,
    required: true,
    enum: ['user', 'admin', 'moderator'],
    default: 'user'
  },
  verified: {
    type: Boolean,
    default: false,
  },
  otp: {
    code: String,
    expiresAt: Date,
  },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User; 