import promise from 'mysql2/promise'

export default function db() {
    const config = {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    }
    return promise.createPool(config)
}


export const query = async (q) => {
    return Promise.resolve(
        await db().getConnection()
            .then(conn => {
                const res = conn.query(q)

                conn.release()
                return res
            })
            .then(([rows]) => rows)
            .catch(err => {
                throw err
            })
    )
}