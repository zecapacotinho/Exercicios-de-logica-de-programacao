import axios from 'axios'

async function buscarPosts(){
    try{
        const post = await axios.get('https://jsonplaceholder.typicode.com/posts')
        const data = post.data
        const ids = data.map(item => ({
            id: item.id,
            title: item.title
        }))
        console.log(ids)
    }
    catch(err){
        console.log('Houve um erro...', err)
    }
}
buscarPosts()