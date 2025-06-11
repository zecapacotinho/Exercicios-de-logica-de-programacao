function segundoMaiorValor(arr){
    let maiorValor = -Infinity
    let segundoMaiorValor = -Infinity

    for(let num of arr){
        if(num > maiorValor){
            segundoMaiorValor = maiorValor
            maiorValor = num
        }
        else if(num > segundoMaiorValor && num < maiorValor){
            segundoMaiorValor = num
        }
    }
    return segundoMaiorValor
}
console.log(segundoMaiorValor([1,2,3,4,5]))