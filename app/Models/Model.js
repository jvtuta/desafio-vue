import query from "../../providers/query.js"



export default function Model() {
    let table 
    let relationship
    let res

    return {
        

        __set_table (set_table) {
            return table = set_table
        },

        __set_relationship (set_relationship)  {
            return relationship = set_relationship
        },

        get() {
            return res
        },

        all () {
            if(!table) throw 'table not defined'

            res = query('select * from ' + table)
            return this
        },
    
        save (values) {
            if(!table) throw 'table not defined'

            const val = [...Object.values(values)].map((value)=>{
                if(typeof value === 'string') return "'"+value+"'"
                return value
            })                        
            res = query('insert into '+table+`(${[...Object.keys(values)]}) values(${[...val]})`)
            return this
        },

        update (values, id) {
            if(!table) throw 'table not defined'

            if( id === undefined ) return 'id do registro não especificado, operação abortada!';

            const columns = Object.keys(values).map((key)=>{                            
                return key+'='+"'"+values[key]+"'";     
            })           
            // query('update '+table+string)
            try {
                query('update '+table+' set '+columns.join()+'where id='+id+';') 
                
                res = 'registro de id='+id+' atualizado com sucesso!'  
                return this
            } catch ( err ) {
                throw err
            }
            
        }
    }
}