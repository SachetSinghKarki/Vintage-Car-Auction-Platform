const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

//register
const register = async (req, res) => {
    try {
        const { email, password, fullName, profilePictureURL } = req.body;

        const existUser = await User.findOne({ email });
        if (existUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const hashPassword = await bcrypt.hashSync(password, 10);
        const newUser = new User({
            email,
            password: hashPassword,
            fullName,
            profilePictureURL
        });
        await newUser.save();

        res.status(200).json({ msg: "User is registered successfully", newUser });
    } catch (err) {
        res.status(500).json({ msg: "Error" });
        console.log(err);
    }
};

//Login 
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ msg: 'Invalid password' });
        }
        
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
        res.cookie('token',token,{
            httpOnly: true,
            secure: false,
            maxAge: 3600000
        })

        res.status(200).json({ msg: "User is logged in successfully", user,token });
    } catch (err) {
        res.status(500).json({ msg: "Error" });
        console.log(err);
    }
};

//logout

const logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ msg: "User is logged out successfully" });
    } catch (err) {
        res.status(500).json({ msg: "Error" });
        console.log(err);
    }
    
};

module.exports = {
    register,
    login,
    logout
};
