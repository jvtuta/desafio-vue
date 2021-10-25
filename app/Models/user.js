import Model from "./model.js"



export default function user() {
    
    console.log(Model(user.name).save({name:'teste1',idade:2}))

}


user()