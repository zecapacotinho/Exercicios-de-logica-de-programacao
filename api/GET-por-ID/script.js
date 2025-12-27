import axios from 'axios'

async function buscarID(id){
    try{
        const buscar = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        const data = buscar.data
        const infoId = {
            title: data.title,
            body: data.body
        }
        console.log(infoId)
    }
    catch(err){
        console.log('Houve um erro... ', err)
    }
}
buscarID(3)