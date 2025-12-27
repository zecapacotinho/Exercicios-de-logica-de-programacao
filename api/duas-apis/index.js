import axios from 'axios'

async function duasApis(){
    try{
        const [{data: infUser}, {data: infPost}] = await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/posts')
        ])
        console.log(`Total de usuários: ${infUser.length}`)
        console.log(`Total de Post: ${infPost.length}`)
    }
    catch(err){
        console.log('Houve um erro na execução do código', err)
    }
}
duasApis()