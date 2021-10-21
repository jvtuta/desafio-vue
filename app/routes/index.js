import { Router } from "express";
import exampleController from '../Controllers/exampleController.js'

const router = Router()

const index =  router.get('/', exampleController)

export default index

