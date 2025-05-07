const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register
exports.register = async (req, res) => {
    const { username, password } = req.body;
  
    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: 'Username taken' });
  
    // Hash the password
    const passwordHash = await bcrypt.hash(password, 10);
  
    // Create the new user in the database
    const user = await User.create({ username, passwordHash });
  
    // Generate JWT token (valid for 1 hour)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  
    // Send response with token
    res.status(201).json({ message: 'User registered', token });
  };
  

// Login
exports.login = async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await user.isPasswordValid(password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};
