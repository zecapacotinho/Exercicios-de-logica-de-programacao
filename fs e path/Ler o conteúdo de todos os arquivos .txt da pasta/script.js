import fs from 'fs'
import path from 'path'

async function lerTXT(pasta){
    try{
        const ler = await fs.promises.readFile(pasta, 'utf8')
        console.log(ler)
        
    }
    catch(err){
        console.log(err)
    }
}
lerTXT('C:\\Users\\Carlos\\Documents\\Redações')