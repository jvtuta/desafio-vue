import exampleModels from "../Models/exampleModels.js";
export default function exampleController(req, res, next) {
    exampleModels().then(r=>{
        res.send(r)
    })
}