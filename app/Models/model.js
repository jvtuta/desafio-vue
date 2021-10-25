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
            
            
            return 'insert into '+table+`(${[...Object.keys(values)]}) values(${[...val]})`
        }

    }


}