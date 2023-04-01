import express, { NextFunction, Request, Response } from "express"
import dotenv from 'dotenv';
dotenv.config();
import todoRoutes from "./routes/todos"
const app=express()
app.use(express.json())

app.use("/todos",todoRoutes)

app.use((err:Error,req:Request,res:Response,next:NextFunction)=>{
  res.status(404).json({error:err.message})
})
const PORT = process.env.PORT
app.listen(PORT,()=>{
  console.log(`sever is at port ${PORT}`)
})
