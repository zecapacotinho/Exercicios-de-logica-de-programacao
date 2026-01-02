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
        console.log('Houve um erro ao acessar à API...', err.response?.status)
    }
}
 
 async function InformacoesTotal(){
    const data = await getAPIS()
    if(!data) return;
    console.log('---------------------------------------------------------------')
    console.log('                   RELATÓRIO GERAL')
    console.log('---------------------------------------------------------------')
    console.log(`Total de usuários: ${data.user.length}`)
    console.log(`Total de posts: ${data.posts.length}`)
    console.log(`Total de comentários: ${data.comments.length}`)
    console.log('---------------------------------------------------------------')
}
InformacoesTotal()

async function relatorioUser(){
    const data = await getAPIS()
    if(!data) return;
    console.log('               RELATÓRIO POR USUÁRIO')
    console.log('---------------------------------------------------------------')
    const informacoesUser = data.user.map(item => ({
        name: item.name,
        posts: data.posts.filter(post => post.userId === item.id).length,
        comments: data.comments.filter(comment =>
            data.posts.some(
                post => post.userId === item.id && post.id === comment.postId
            )
        ).length
    }))
    console.log(informacoesUser)
    console.log('---------------------------------------------------------------')
}
relatorioUser()

async function topUsers(){
    const data = await getAPIS()
    if(!data) return;
    console.log('               TOP 3 USUÁRIOS MAIS ATIVOS')
    console.log('---------------------------------------------------------------')
    const mapUsers = data.user.map(item => ({
        name: item.name,
        posts: data.posts.filter(posts => posts.userId === item.id).length,
        comments: data.comments.filter(comment =>
            data.posts.some(
                post => post.userId === item.id && post.id === comment.postId
            )
        ).length
    }))
    const rankingUsers = mapUsers.reduce((acc, user) => {
        acc.push(user)
        acc.sort((a, b) => (b.posts + b.comments) - (a.posts + a.comments))
        return acc.slice(0,3)
    }, [])
    console.log(rankingUsers)
    console.log('---------------------------------------------------------------')
}
topUsers()