// Optional user controller for protected routes like dashboard
const User = require('../models/userModel');

exports.getUserProfile = async (req, res) => {
    console.log('Decoded User from JWT:', req.user); // Check what’s actually in req.user
    try {
        const user = await User.findById(req.user.id).select('-passwordHash');
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.json({ message: 'User profile fetched successfully', user });
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

         