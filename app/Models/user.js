import Model from "./model.js"



export default function user() {
    
    // Model('user').save({name:'teste1',idade:2})
    //insert into users(name,idade) values('teste1',2)
    const model = Model('user')
    return {
        all() {
            return model.all()
        },
        update(values, id) {
            if(typeof values === 'object') return model.update(values, id)
            return 'tipo de dado inválido'        
        },
        save(values) {
            if(typeof values === 'object') return model.save(values);
            return 'tipo de dado inválido'        
        }
    }

}


