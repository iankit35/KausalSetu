import jwt from 'jsonwebtoken';
import { Worker } from '../models/workerModel.js';
import { User } from '../models/userModel.js';
import { Admin } from '../models/adminModel.js';

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '7d' });
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    
    let account = await Admin.findOne({ email }).select('+password');
    let role = 'admin';

    if (!account) {
      account = await Worker.findOne({ email }).select('+password');
      role = 'worker';
    }

    if (!account) {
      account = await User.findOne({ email }).select('+password');
      role = 'user';
    }

    if (!account) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const isMatch = await account.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = generateToken(account._id, role);

    res.json({
      token,
      profile: {
        id: account._id,
        name: account.name,
        email: account.email,
        role,
      },
    });
  } catch (err) {
    console.error('Login error:', err.message);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};


// controllers/authController.js

export const registerUser = async (req, res) => {
  try {
    const { name, email, phone, password, address, longitude, latitude } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({ error: 'Name, email, phone and password are required' });
    }

    const existing = await User.findOne({ $or: [{ email }, { phone }] });
    if (existing) {
      return res.status(400).json({ error: 'An account with this email or phone already exists' });
    }

    const user = await User.create({
      name,
      email,
      phone,
      password,
      address,
      location:
        longitude && latitude
          ? { type: 'Point', coordinates: [longitude, latitude] }
          : undefined,
    });

    const token = generateToken(user._id, 'user');

    res.status(201).json({
      token,
      profile: { id: user._id, name: user.name, email: user.email, role: 'user' },
    });
  } catch (err) {
    console.error('User registration error:', err.message);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};

export const registerWorker = async (req, res) => {
  try {
    const {
      name, email, phone, password, address,
      serviceCategories, longitude, latitude,
    } = req.body;

    if (!name || !email || !phone || !password) {
      return res.status(400).json({ error: 'Name, email, phone and password are required' });
    }

    if (!longitude || !latitude) {
      return res.status(400).json({ error: 'Location is required to register as a professional' });
    }

    const existing = await Worker.findOne({ $or: [{ email }, { phone }] });
    if (existing) {
      return res.status(400).json({ error: 'An account with this email or phone already exists' });
    }

    const worker = await Worker.create({
      name,
      email,
      phone,
      password,
      address,
      serviceCategories: serviceCategories || [],
      yearJoined: new Date().getFullYear(),
      location: { type: 'Point', coordinates: [longitude, latitude] },
    });

    const token = generateToken(worker._id, 'worker');

    res.status(201).json({
      token,
      profile: { id: worker._id, name: worker.name, email: worker.email, role: 'worker' },
    });
  } catch (err) {
    console.error('Worker registration error:', err.message);
    res.status(500).json({ error: 'Something went wrong. Please try again.' });
  }
};


// controllers/authController.js
export const getMe = async (req, res) => {
  try {
    const { id, role } = req.user; // set by the `protect` middleware from the JWT

    const Model = { worker: Worker, user: User, admin: Admin }[role];
    if (!Model) return res.status(400).json({ error: 'Invalid role' });

    const account = await Model.findById(id);
    if (!account) return res.status(404).json({ error: 'Account not found' });

    res.json({ profile: { ...account.toObject(), role } });
  } catch (err) {
    console.error('Get profile error:', err.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
};