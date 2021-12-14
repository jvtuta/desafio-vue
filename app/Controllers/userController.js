import UserModel from '../Models/User.js'

export default function users() {    
    return {
        async auth(req, res, next) {

            const { user_name, password } = req.body

            const [ user ] = await UserModel().find({ 
                columns: `"*"`, 
                comparadores: ['user_name', `"${user_name}"`] 
            }).get()
            
            
            if (user === undefined ) {
                return res.json({ auth: false })
            } else if(user.password == password ) { 
                return res.json({ auth: true })    
            } else {
                
                return res.json({ auth: false })
            }
                
            
            
        },
        async register(req, res, next) {  
            const { save } = UserModel()
            const { user_name, password } = req.body

            try {
                await save({ user_name, password })    
            } catch ( err ) {
                console.error(err)
                res.send('Erro ao registrar usuário')
            }
            
        }
    }
}
