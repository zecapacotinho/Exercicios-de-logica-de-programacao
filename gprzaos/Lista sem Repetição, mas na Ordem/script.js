function listaSemRepeticao(lista){
    const novaLista = new Set(lista)
    return [...novaLista]
}
console.log(listaSemRepeticao([1,2,2,3,3,4,5,5]))