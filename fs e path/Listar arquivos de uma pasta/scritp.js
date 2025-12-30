import fs from 'fs'
import path from 'path'

async function verficandoArquivos(pasta){
    try{
        const ler = await fs.promises.readdir(pasta) 
        ler.forEach(arquivo => {
            const caminho = path.join(pasta, arquivo)
            console.log(caminho)
        });
    }
    catch(err){
        console.log('there was an error...', err)
    }
}
verficandoArquivos('C:\\Jogos\\CS Revo\\CS 1.6\\cstrike\\cl_dlls')