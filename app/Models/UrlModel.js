import Model from "./Model.js"


export default function Url() {
    const model = Model()
    model.__set_table('urls')

    return {
        __proto__: model
    }
}