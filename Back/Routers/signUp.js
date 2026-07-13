
import { Router } from "express";
import { userModel } from '../db.js';
import {z} from "zod"
import bcrypt from "bcrypt"

export const signUpRouter = Router()

const correctform = z.object({
  email:z.string().email(),
  password:z.string().min(8)
})


signUpRouter.post("/signup",async (req,res)=>{
    console.log("welcome to signup")
  
  const parsedatawithsuccess=correctform.safeParse(req.body)
  if (!parsedatawithsuccess.success){
    console.log("incorrect format")
    const validationError = parsedatawithsuccess.error.flatten().fieldErrors
    return res.status(400).json({
      message:"incorrect format",
      errors:validationError
    })
  }
  const email=req.body.email
  const password=req.body.password
  const encyptedPass = await bcrypt.hash(password,5)

  // try {
  //     const doesUserExist =await userModel.exists({email:email})
  //     if (doesUserExist) {
  //     return res.status(409).json({ message: 'User already exists'});
  //   }
  // } catch (error) {
  //   return res.status(400).json({message:"can not check if you are existng user or not "})
  // }

  try {
      await userModel.create({
        email:email,
        password:encyptedPass
      })
      console.log("successfull")
      return res.json({message:"User Created Successfully"})
  } catch (error) {
    console.log(error)
  // Catch the specific MongoDB duplicate key error!
    if (error.code === 11000) {
        return res.status(409).json({ message: 'User already exists' });
    }
    return res.status(400).json({
      // message:error.message
      message:"an internal error occures while creating user"
    })
  }
})