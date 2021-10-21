// import { promise } from 'mysql2'
import promise from 'mysql2/promise'


export default function db() {
    const config = {
        
    }
    return {
        pool () {
            return promise.createPool(config)            
        }
    }
}