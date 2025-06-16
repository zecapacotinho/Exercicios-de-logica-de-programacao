function NumerosInvisiveis(lista){
    let numero = lista.length + 1
    let conjunto = new Set()

    for(let i = 0; i < numero; i++){
        conjunto.add(i)
    }

    for(let num of lista){
        conjunto.delete(num)
    }
    return Array.from(conjunto)
}
let valores = [1,3]
console.log(NumerosInvisiveis(valores))