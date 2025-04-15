function ContadorVogal(texto){
    let vogais = ['a', 'e', 'i', 'o', 'u']
    let contador = 0

    for(let letra of texto.toLowerCase()){
        if(vogais.includes(letra)){
            contador++
        }
    }

    return (contador === 0)
        ? 'Não tem vogal, cabaço!'
        : `Total de vogais: ${contador}`
}
console.log(ContadorVogal('arroz'))