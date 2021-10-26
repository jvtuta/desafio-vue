import query from "../../providers/query.js"



export default function Model() {
    let table
    let relationship
    
    return {


        __set_table (set_table) {
            return table = set_table
        },

        __set_relationship (set_relationship)  {
            return relationship = set_relationship
        },

        all: () => {
            if(!table) throw 'table not defined' 
            return query('select * from ' + table)
        },
    
        save: (values) => {
            if(!table) throw 'table not defined'
            const val = [...Object.values(values)].map((value)=>{
                if(typeof value === 'string') return "'"+value+"'"
                return value
            })                        
            query('insert into '+table+`(${[...Object.keys(values)]}) values(${[...val]})`)
        },

        update: (values, id) => {
            if(!table) throw 'table not defined'
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