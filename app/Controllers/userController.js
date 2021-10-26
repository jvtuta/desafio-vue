import user from "../Models/user.js";

export async function users(req, res, next) {    
    res.send(await user().all().get())
}
