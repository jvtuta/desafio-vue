import { Router }          from "express";
import users               from "../app/Controllers/userController.js";
import urlController       from "../app/Controllers/urlController.js"
import homePageController  from '../app/Controllers/HomeController.js'


//adicionar rotas a serem providas na aplicação
function routes(app) {
    const router = Router()

    const { get, post } = urlController()
    const { auth, register } = users()

    const index = router.get('/', homePageController)
    const indexUrl = router.get('/api/v1/url', get)
    const postUrl = router.post('/api/v1/url', post)
    const authUser = router.post('/api/v1/auth', auth)
    const registerUser = router.post('/api/v1/register-user', register)
    
    app.use('/', index)
    app.use('/url', postUrl)
    app.use('/url', indexUrl)
    app.use('/api/v1/auth', authUser)
    app.use('/api/v1/register-user', registerUser)

}

export default routes

