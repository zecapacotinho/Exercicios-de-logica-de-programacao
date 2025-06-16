function segundoMaiorValor(valores){
    let maiorValor = Infinity
    let segundoMaior = -Infinity

    for(let num of valores){
        if(num > maiorValor){
            segundoMaior = maiorValor
            maiorValor = num
        }
        else if(num > segundoMaior && num < maiorValor){
            segundoMaior = num
        }
    }
    return segundoMaior
}
console.log(segundoMaiorValor([10,20,30,40]))