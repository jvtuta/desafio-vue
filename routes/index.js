import { Router } from "express";
import { users } from "../app/Controllers/userController.js";


const router = Router()

const index =  router.get('/', users)

export default index

