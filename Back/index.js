import 'dotenv/config'
import express from "express"
import mongoose from 'mongoose';
import cors from "cors"
import { signUpRouter } from './Routers/signUp.js';
import { loginRouter } from './Routers/login.js';
import { homeRouter } from './Routers/home.js';
import { addTodo, allTodos } from './Routers/addTodo.js';
import { deleteTodo } from './Routers/delteTodo.js';




const app = express()
app.use(express.json())
app.use(cors())

const mangu = async ()=>{
  try {
    console.log(process.env.MONGO_URL)
    await mongoose.connect(process.env.MONGO_URL)
    console.log("connected successfully")
    const port = process.env.PORT || 3000;
    app.listen(port,()=>{
        console.log(`server is running on ${port}`)
    })
  }
  catch (error) {console.log(error) 
  }
  
}

mangu()

app.get("/", (req, res) => {
    res.send("Server is running");
});



app.use("/",signUpRouter)
app.use("/",loginRouter)
app.use("/",homeRouter)
app.use("/",addTodo)
app.use("/",allTodos)
app.use("/",deleteTodo)