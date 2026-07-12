import { Router } from "express";
import { userModel } from '../db.js';
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"


export const loginRouter = Router()

loginRouter.post("/login", async function(req,res){
    const email=req.body.email
    const password = req.body.password

    const responce = await userModel.findOne({
        email:email
    })
    if (!responce){
        return res.status(403).json({message:"user not found"})
    }
    console.log(responce)
    const passwordMatch = await bcrypt.compare(password,responce.password)
    if (passwordMatch){
        const token = jwt.sign({
            id:responce._id.toString()
        },process.env.jwtsecret_user)
    
    return res.json({
        token:token
        })
    }
    else{
        res.status(400).json({message:"email or password id incorrect"})
    }
})