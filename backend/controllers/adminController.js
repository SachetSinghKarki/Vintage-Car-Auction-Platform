// const userModel = require('../models/userModel');

// //get all users
// // const getUser = async (req,res) => {
// //     try {
// //        const users = await userModel.find()
// //        res.status(200).json({users})
// //     } catch (err) {
// //       res.status(500).json({message: "Internal Server Error"})
// //       console.log(err)
// //     }
// // }
// // Example in Express.js
// const getUser = async (req, res) => {
//   try {
//     const users = await userModel.find(); // Fetch all users from the database
//     res.status(200).json({ users });
//   } catch (err) {
//     res.status(500).json({ message: "Internal Server Error" });
//     console.log(err);
//   }
// };


// //delete a user by id
// const deleteUser = async (req,res) => {
//     try {
//         const userId = req.params.id
//           const checkAdmin = await userModel.findById(userId)

//           if (checkAdmin.role === 'admin') {
//             return res.status(409).json({message: "You can't delete an admin user"})
//           }
//        const user = await userModel.findByIdAndDelete(userId)

//        if(!user) {
//        return res.status(404).json({message: "User not found"})
//        }
//        res.status(200).json({message: "User deleted successfully"})
//     } 
//     catch (err) {
//       res.status(500).json({message: "Internal Server Error"})
//       console.log(err)
//     }
// }

// module.exports = {
//     getUser,
//     deleteUser
// }
const User = require('../models/userModel');

// Get all users
const getUser = async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users from the database
    res.status(200).json({ users });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(err);
  }
};

// Delete a user by ID
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the user is an admin
    if (user.role === 'admin') {
      return res.status(409).json({ message: "You can't delete an admin user" });
    }

    // Delete the user
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error(err);
  }
};

module.exports = {
  getUser,
  deleteUser
};
