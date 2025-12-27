import axios from 'axios'

async function buscarUsuarios(){
    try{
        const buscar = await axios.get('https://jsonplaceholder.typicode.com/users')
        const data = buscar.data
        const info = data.map(item => ({
            name: item.name,
            email: item.email
        }))
        console.log(info.slice(0,3))
    }
    catch(err){
        console.log('Houve um erro... ', err)
    }
}
buscarUsuarios()