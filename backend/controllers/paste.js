// const user= require('../models/userModel');
// const bcrypt = require('bcrypt');


// const register = async (req,res)=> {
//     try {
//         const {email,password,fullName,profilePictureURL} = req.body
         
//         const existUser = await user.findOne({ email})
//         if(existUser) {
//             return res.status(400).json({msg: 'User already exists'})
//         }
            
//         const hashpassword = await bcrypt.hashSync(password,10)
//         const newUser = new user({
//             email,
//             password: hashpassword, 
//             fullName,
//             profilePictureURL
//         })
//         await newUser.save()

//         res.status(200).json({msg:"User is registered successfully",newUser})

//     } catch (err) {
//         res.status(500).json({msg:"Error"})
//         console.log(err)
//     }
// }

// const login = async (req,res)=> {
//     try {
//         const {email,password} = req.body

//         const User = await user.findOne({email})
//         if(!User) {
//             return res.status(400).json({msg: 'User not found'})
//         }
            
//         const ispasswordValid= await bcrypt.compare(password,user.password)
//         if(!ispasswordValid) {
//             return res.status(400).json({msg: 'Invalid password'})
//         }
//         res.status(200).json({msg:"User is logged in successfully",user})
//     } 
//    catch (err) {
//     res.status(500).json({msg:"Error"})
//     console.log(err)
// }
// }

// module.exports = {
//     register,
//     login
// } 