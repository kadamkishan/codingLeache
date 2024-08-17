

const express= require('express');
const User = require('../models/user');
const router = express.Router();
const {handleGetAllUsers, getUserById, updateUserById, deleteUserById, handleCreateNewUser} = require('../controllers/user')

router.get("/", handleGetAllUsers)

router.route("/:id")
    .get(getUserById)
    .patch(updateUserById)
    .delete(deleteUserById);

router.post("/createUsers",handleCreateNewUser)



// router.get("/", async (req,res)=>{
//     const allDbUsers = await User.find({});
//     const Html= `
//         <ul>
//         ${allDbUsers.map((user)=>`<li>${user.firstName} - ${user.email}</li>`).join("")
//         }
//         </ul>
//     `;
//     res.send(Html);
// })


module.exports = router;