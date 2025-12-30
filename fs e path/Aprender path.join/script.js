import path from 'path'
import fs from 'fs'

async function usandoPath(pasta){
    try{
        const ler = await fs.promises.readdir(pasta)
        ler.forEach(arquivo => {
            const caminho = path.join(pasta, arquivo)
            console.log(caminho)
        })
    }
    catch(err){
        console.log('Houve um erro...', err)
    }
    
}
usandoPath('C:\\Jogos\\CS Revo\\CS 1.6\\cstrike\\cl_dlls')