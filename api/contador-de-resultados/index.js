import axios from 'axios'
async function contadorResultados(){
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
        const data = response.data
        const total = data.length
        console.log(`Total de comentários: ${total}`)
    }
    catch(err){
        console.log('Houve um erro na execução do código...', err)
    }
}
contadorResultados()
