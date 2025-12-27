import axios from 'axios'

async function multiplasAPis(){
    try{
        const [{data: infUser}, {data: infPost}] = await Promise.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/posts')
        ])
        const filterPost = infPost.filter(post => post.userId === id)
        const filterInformationUser = infUser.map(item => ({
            name: item.name,
            post: filterPost
        }))
        console.log(filterInformationUser)
    }
    catch(err){
        console.log('Erro ao acessar a API...', err.response?.status)
    }
}
multiplasAPis()