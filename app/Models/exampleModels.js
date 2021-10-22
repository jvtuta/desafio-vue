import { query } from "../../config/database.js";

export default function exampleModels() {
    return query('select * from users')
}