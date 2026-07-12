import { Router } from "express";
import { authorize } from "./middleware.js";
import { todoModel } from "../db.js";


export const deleteTodo = Router()

deleteTodo.post("/deleteTodo",authorize,async (req,res)=>{
    const userId=req.userId
    const todoId=req.body.todoId
    try {
        const response = await todoModel.deleteOne({
            _id:todoId,
            userId:userId
        })
        if (response.deletedCount === 1) {
            return res.status(200).json({message:"deleted successfully"})
        }

        return res.status(404).json({message:"todo not found"})
    } catch (error) {
        res.status(400).json({message:"an error occured could not delete todo"})
    }
})