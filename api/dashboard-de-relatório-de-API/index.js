import axios from 'axios'

async function getAPIS(){
    try{
        const [{data: infUser}, {data: infPosts}, {data: infComent}] = await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/comments')
        ]) 

        return {
            user: infUser,
            posts: infPosts,
            comments: infComent
        }
    }
    catch(err){
        console.log('Houve um erro ao acessar a API...', err.response?.status)
    }
}
 
 async function InformacoesTotal(){
    const data = await getAPIS()
    if(!data) return;
    console.log(`Total de usuários: ${data.user.length}`)
    console.log(`Total de posts: ${data.posts.length}`)
    console.log(`Total de comentários: ${data.comments.length}`)
}
//InformacoesTotal()

async function relatorioUser(){
    const data = await getAPIS()
    if(!data) return;
    const informacoesUser = data.user.map(item => ({
        name: item.name,
        posts: data.posts.filter(post => post.userId === item.id).length,
        comments: data.comments.filter(comments => comments.postId === item.id).length
    }))
    console.log(informacoesUser)
}
//relatorioUser()

async function topUsers(){
    const data = await getAPIS()
    if(!data) return;
    
}
topUsers()