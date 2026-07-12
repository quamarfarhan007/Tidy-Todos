import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;

const userSchema = new Schema({
    email:{type:String,unique:true},
    password:String
})

const todoSchema = new Schema({
    title:{type:String},
    description:{type:String},
    userId:ObjectId
})

export const todoModel = mongoose.model("todos",todoSchema)
export const userModel = mongoose.model ("looser",userSchema)