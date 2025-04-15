function ContadorCosoante(texto){
    let consoate = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q','r','s', 't', 'v', 'w', 'x', 'y', 'z']
    let leitor = 0

    for(let contador of texto.toLowerCase()){
        if(consoate.includes(contador)){
            leitor++
        }
    }

    return (leitor === 0)
        ? 'Não contém nenhuma consoante...'
        : `No total tem ${leitor} consoantes.`
}
console.log(ContadorCosoante('raba'))