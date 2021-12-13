import route from '../routes/index.js'

const routes = (app) => {
    return {
        start() {
            try {
                console.log('Starting routes...')
                route(app)
                app.listen(process.env.APP_PORT || 3000)
                console.log('Routes started!')
            } catch(err) {
                throw err
            }
        }
    }
}

export default routes