function ContadorIndividual(texto){
    let contador = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
    }

    for(let letra of texto.toLowerCase()){
        if(letra in contador){
            contador[letra]++
        }
    }
    
    let resultado = ''
    for(let vogal in contador){
        resultado += `${vogal}: ${contador[vogal]}\n`
    }

    return resultado
}
console.log(ContadorIndividual('raba'))
