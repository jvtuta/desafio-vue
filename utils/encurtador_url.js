export function isArray(teste) {
    return teste.constructor === Array
}

export const urlFactory = (url) => {
    
    function url_estrutura() {
        //estrutura principal = www.google.com /ex
        const url_array = url.split('/')
    
        const principal = url_array.shift()
        
        const path = url_array
        
        const query = path.filter((dir)=>{
            if(dir.includes('?')) {
                return
            }
        })
        return [ principal, path, query ]
        
    }

    
    function convert_url(estrutura) {
        
        let res = ''
        if(isArray(estrutura)) {
            estrutura = estrutura.join('')
        }

        for(let i = 0; i<= 2; i++) {
            res += estrutura.charAt(Math.floor(Math.random() * estrutura.length))
        }

        return res
    }
    const [ principal, path ] = url_estrutura()

    return {
        url,
        url_encurtada: convert_url(principal) +'/'+ convert_url(path)
    }
}