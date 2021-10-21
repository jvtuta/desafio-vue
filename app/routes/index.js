import { Router } from "express";
const router = Router()


const index =  router.get('/', function ( req, res, next) {
    console.log('teste');

})

export default index

