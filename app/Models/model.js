import { query } from "../../config/database.js";

export default function Model(modelName,relationship=null) {

    const table = modelName+'s'
    return {
        all: () => {
            return query('select * from ' + table)
        },
    
        save: (values) => {
            const val = [...Object.values(values)].map((value)=>{
                if(typeof value === 'string') return "'"+value+"'"
                return value
            })                        
            query('insert into '+table+`(${[...Object.keys(values)]}) values(${[...val]})`)
        },

        update: (values, id) => {
            if( id === undefined ) return 'id do registro não especificado, operação abortada!';
            const columns = Object.keys(values).map((key)=>{                            
                return key+'='+"'"+values[key]+"'";     
            })           
            // query('update '+table+string)
            try {
                query('update '+table+' set '+columns.join()+'where id='+id+';') 
                return 'registro de id='+id+' atualizado com sucesso!'  
            } catch ( err ) {
                throw err
            }
            
        }
    }
}