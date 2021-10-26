import Model from "./Model.js"



export default function user() {
    //attrs

    const model = Model()
    model.__set_table('users')


    return {

        __proto__: model,


    }

}


