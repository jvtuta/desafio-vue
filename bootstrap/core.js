//Incializador de todos os modulos
import db from "../config/database.js";
import routes from "../providers/routes.js";


export default async function core(app) {
    try {
        console.log('Starting application...')
        db()
        routes(app).start()
        console.log('Application started sucessfully! Port:'+process.env.APP_PORT)
        
    } catch (err ) {
        throw err
    }
}
