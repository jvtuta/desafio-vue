import { Router } from "express";
import { users } from "../app/Controllers/userController.js";
import  urlController from "../app/Controllers/urlController.js"
import homePageController from '../app/Controllers/HomeController.js'


//adicionar rotas a serem providas na aplicação
function routes(app) {
    const router = Router()

    const { get, post } = urlController()

    const index = router.get('/', homePageController)
    const indexUrl = router.get('/api/v1/url', get)
    const postUrl = router.post('/api/v1/url', post)
    const auth = router.post('/api/v1/auth', users)
    

    
    app.use('/', index)
    app.use('/url', postUrl)
    app.use('/url', indexUrl)
    app.use('/api/v1/auth', auth)

}

export default routes

