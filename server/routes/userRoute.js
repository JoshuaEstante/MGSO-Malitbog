// Import dependencies
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';
import requireAuth from '../middleware/requireAuth.js'; // Ensure this path is correct

const SECRET = 'helloGSOMalitbog'; // Replace with your actual secret key

// Utility function to create a token
const createToken = (_id) => {
  return jwt.sign({ _id }, SECRET, { expiresIn: '3d' });
};

// Create an express router
const router = express.Router();

// Login a user
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    // Create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Signup a user
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.signup(email, password);

    // Create a token
    const token = createToken(user._id);

    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all users (requires authentication)
router.get('/users', requireAuth, async (req, res) => {
  try {
    const users = await User.find().select('-password'); // Exclude passwords from the response
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
