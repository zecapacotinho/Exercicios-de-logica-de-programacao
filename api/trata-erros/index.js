import axios from 'axios'

async function tratarErros(){
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/postsss')
    }
    catch(err){
        console.log('Erro ao acessar a API')
    }
}
tratarErros()