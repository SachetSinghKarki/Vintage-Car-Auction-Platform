const jwt = require('jsonwebtoken');
const userModel= require('../models/userModel');

const isAdmin = async(req,res,next)=> {
    try {
      const token = req.cookies.token
        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.userId)
        if(!user) {
            return res.status(401).json({ message: 'User not found' });
        } 

        if(user.role!== 'admin') {
            return res.status(403).json({ message: 'You are not an admin' });
        }
       req.user = user 
        next()
    }

    catch (error) {
       console.log(error)
    }
}

module.exports = {
    isAdmin
};