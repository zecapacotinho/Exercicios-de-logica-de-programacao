import fs from 'fs'
import path from 'path'

async function MostrandoTipo(pasta){
    try{
        const ler = await fs.promises.readdir(pasta)
        for(const leitura of ler){
            const caminho = path.join(pasta, leitura)
            const stats = await fs.promises.stat(caminho)

            if(stats.isFile()) console.log(`[ARQUIVO] ${caminho}`)
            else if(stats.isDirectory()) console.log(`[PASTA] ${caminho}`)
            else console.log(`[OUTRO] ${caminho}`)
            
        }
    }
    catch(err){
        console.log('Houve um erro...', err)
    }
}
MostrandoTipo('C:\\Jogos\\CS Revo\\CS 1.6')