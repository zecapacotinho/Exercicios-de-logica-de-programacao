import axios from 'axios'

async function DataManipulation(){
    try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/')
        const data = response.data
        const filterUserId = data.filter(user => user.userId === 1)
        const result = filterUserId.map(item => ({
            id: item.id,
            title: item.title,
            body: item.body
        }))
        console.log(result)
    }
    catch(err){
        console.log('Houve um erro na execução do código', err)
    }
}
DataManipulation()