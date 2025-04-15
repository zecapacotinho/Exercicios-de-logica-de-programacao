function ContadorPalavra(texto){
    let palavras = texto.trim().split(' ').filter(p => p !== '')
    return `A frase "${texto}", tem no total ${palavras.length} palavras.`
}
console.log(ContadorPalavra('eu gosto de sorvete'))