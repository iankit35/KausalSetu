import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const workerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true, select: false },

  role: { type: String, enum: ['worker'], default: 'worker', immutable: true },

  address: String,
  serviceCategories: [String],
  rating: Number,
  jobsCompleted: Number,
  yearJoined: Number,
  walletBalance: { type: Number, default: 0 },
  verified: { type: Boolean, default: false },

  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true },
  },
});

workerSchema.index({ location: '2dsphere' });

workerSchema.pre('save', async function () {
  if (!this.isModified('password')) return;
  this.password = await bcrypt.hash(this.password, 10);
});

workerSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export const Worker = mongoose.model('Worker', workerSchema);