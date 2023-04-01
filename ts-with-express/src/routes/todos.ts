import { RequestHandler, Router } from "express";
import {handlePost,handleGet,handleDel,handleUpdate} from "./TodoMidellewares/midellewares"
const router=Router()

router.post("/",handlePost)
router.get("/",handleGet)
router.put("/:id",handleUpdate)
router.delete("/:id",handleDel)

export default router