import axios from 'axios'

async function relatorio(){
    try{
        const [{data: infUser}, {data: infPost}, {data: infComent}] = await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/comments')
        ])
        console.log('Relatório da API')
        console.log('-----------------')
        console.log(`Usuários: ${infUser.length}`)
        console.log(`Post: ${infPost.length}`)
        console.log(`Comentários: ${infComent.length}`)
        
    }
    catch(err){
        console.log('Houve um erro ao acessar a API...', err.response?.status)
    }
}
relatorio()