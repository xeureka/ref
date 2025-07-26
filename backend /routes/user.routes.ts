import express from 'express'
// import { hashPassword,validatePassword } from '../utils/hash'
// import Users from '../models/user.model'
// import { generateToken } from '../services/tokenGenerator'
// import { registerUserSchema,loginUserSchema } from '../schemas/user.schema'
// import { validateData } from '../middleware/validate'
import { seeAllUsers } from '../controller/user.controller'

const router = express.Router()

router.get('/', seeAllUsers)

// router.post('/register',validateData(registerUserSchema), async (req,res) => {
//     try {

//         const existingUser = await Users.findOne({email: req.body.email}); 

//         if (existingUser){
//             res.status(404).json({message: "User Already Registered !"})
//             return;
//         }

//         let securePassword = await hashPassword(req.body.password);

//         let newUser = new Users({
//             name: req.body.name,
//             email: req.body.email,
//             password: securePassword
//         })

//         const savedNewUser = await newUser.save()

//         const token = generateToken(newUser.email, newUser.role)
//         res.header('authoziation',token)
//         res.status(201).json({message: 'User Registered Successfully !!'})

//     } catch (error) {
//         console.log('Error Registering the user!')
//         res.status(400).json({message: error})
//     }
// })

// router.post('/login',validateData(loginUserSchema), async (req,res) => {
//     try {
//         const isUserExist = await Users.findOne({email: req.body.email});
//         if (!isUserExist){
//             res.status(404).json({message: 'User Does not exist please register !'})
//             return;
//         }

//         const { password } = req.body;
//         const validPassword = validatePassword(password,isUserExist.password);

//         if (!validPassword){
//             res.status(401).json({message: "Email or Password Incorrect !!"})
//             return;
//         }

//         const token = generateToken(isUserExist.email, isUserExist.role)
//         res.header('authorization',token)
//         res.status(201).json('Login Successful !!')

//     } catch (error) {
//         res.status(400).json({message: 'Error loggin the user!'});
//         console.log(error)
//         return;
//     }
// })

// // path to logout the user
// router.post('/logout', async (req,res) => {
//     try {
//         res.clearCookie('Authorization').json({
//             message: "Logged Out Successfully !!"
//         }).status(200)
//     } catch (error) {
//         console.log('Error Logging Out the User !!')
//     }
// })

export default router

