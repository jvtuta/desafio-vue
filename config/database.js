// import { promise as mysql } from 'mysql2/promise'
import promise from 'mysql2'
const mysql = promise

export default function db () {
    return {
        async conn () {            
            try {
                console.log('Starting database...')
                const conn = await mysql.createConnection({
                    host: process.env.DB_HOST,
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    database: process.env.DB_NAME
                })
                console.log('Database started!')
                return conn
            } catch (err) {
                throw err
            }
        },
    }
}


