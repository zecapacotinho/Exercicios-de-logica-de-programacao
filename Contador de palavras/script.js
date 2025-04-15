function ContadorPalavra(texto){
    let palavras = texto.trim().split(' ').filter(p => p !== '')
    return `No total "${texto}" tem ${palavras.length}`
}
console.log(ContadorPalavra('eu gosto de sorvete'))