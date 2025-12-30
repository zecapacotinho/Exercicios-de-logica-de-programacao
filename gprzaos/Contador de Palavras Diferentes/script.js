function contadorPalavras(frase){
    const split = frase.toLowerCase().split(' ')
    const conjuntos = new Set(split)
    return conjuntos.size
}
console.log(contadorPalavras('Amo amo góticas rabudas'))