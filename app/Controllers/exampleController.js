import exampleModels from "../Models/exampleModels.js";
export default function exampleController(req, res, next) {
    console.log(exampleModels())
    res.send('A examle of controller');
}