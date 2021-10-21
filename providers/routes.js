import index from '../app/routes/index.js'

//adicionar rotas a serem providas na aplicação
const routes = (app) => {
    return {
        start() {
            try {
                console.log('Starting routes...')
                app.use('/', index)
                app.listen(3000)
                console.log('Routes started!')
            } catch(err) {
                throw err
            }
        }
    }
}

export default routes