function numerosEspelhos(valores){
    const espelho = {
        0:0,
        1:1,
        6:9,
        8:8,
        9:6
    }
    const string = valores.toString()
    let lugar = ''
    
    for(let i = string.length - 1; i >= 0; i--){
        const digito = string[i]
        if(!(digito in espelho)){
            return false
        }
        lugar += espelho[digito]
    }
    return true
}
console.log(numerosEspelhos(69))
console.log(numerosEspelhos(123))
console.log(numerosEspelhos(818))
console.log(numerosEspelhos(969))