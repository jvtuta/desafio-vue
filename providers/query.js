import db from "../config/database.js"

const query = async (q) => {
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



export default query