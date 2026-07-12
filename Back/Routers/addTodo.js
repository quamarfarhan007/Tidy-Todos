import { Router } from "express";
import { authorize } from "./middleware.js";
import { todoModel } from "../db.js";
import { endsWith } from "zod";

export const addTodo = Router()

addTodo.post("/addTodo",authorize,async (req,res)=>{
    console.log("i am on addTodo router")
    const userId=req.userId
    const title=req.body.title
    const description=req.body.description

try {
        await todoModel.create({
            title:title,
            description:description,
            userId:userId
        })
        res.status(200).json({message:"todo added successfully"})
    } catch (error) {
        res.status(400).json({message:"todo not added"})
    }
})

export const allTodos = Router()

allTodos.get("/allTodos",authorize,async (req,res)=>{
    console.log("i am on allTodos router")
    try {
        const userId=req.userId
    
        const todos=await todoModel.find({userId})
        console.log(todos)
        res.status(200).json(todos)    
    } catch (error) {
        res.status(400).json({message:"could not fetch your todos"})
    }
})