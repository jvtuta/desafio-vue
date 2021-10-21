import db from "../../config/database.js";

export default async  function exampleModels() {
    return await db().query('select * from users');
}