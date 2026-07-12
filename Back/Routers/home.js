import { Router } from "express";
import { authorize } from "./middleware.js";

export const homeRouter = Router()

homeRouter.get("/home",authorize,async (req,res)=>{
    const userId=req.userId

})