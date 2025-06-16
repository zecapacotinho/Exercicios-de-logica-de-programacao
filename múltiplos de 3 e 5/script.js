function valoresMultiplos(arr){
    let resultado = []
    for(let array of arr){
        if(array % 3 === 0 || array % 5 === 0){
            resultado.push(array)
        }
    }
    return resultado
}
console.log(valoresMultiplos([1,2,3,4,5,6,7,8,9,10]))