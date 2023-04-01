import { RequestHandler } from "express"
import { Todo } from "../../models/todos"
const todos:Todo[]=[]

//post request
const handlePost:RequestHandler = (req,res,next)=>{
// type casting in two ways
const text = (req.body as {text:string}).text
const id:string= req.body.id
const newTodo= new Todo(id,text)
todos.push(newTodo)
  res.send({message:"created todo",todo:newTodo})
  next()
}
//get request
const handleGet:RequestHandler=(req,res,next)=>{
  res.send({message:"all todos",todos})
next()
}
// delete request 
const handleDel:RequestHandler<{id:string}> = (req,res,next)=>{
  const id= req.params.id
 const data= todos.filter((items)=>{
    return items.id!==id
  })
  res.send({message:"deleted todo",data})
next()
}
//update req
const handleUpdate:RequestHandler<{id:string}> = (req,res,next)=>{
  const idParams= req.params.id
  const id:string=req.body.id
  const text:string=req.body.text
 const data= todos.filter((items)=>{
    return items.id===idParams?items.text=text:""
  })
  res.send({message:"updated todo",data})
next()
}


export {handlePost,handleGet,handleDel,handleUpdate}