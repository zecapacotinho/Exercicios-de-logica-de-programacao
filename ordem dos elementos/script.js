function ondemDosElementos(arr){
    let resultado = []
    for(let i = arr.length - 1; i >= 0; i--){
        resultado.push(arr[i])
    }
    return resultado
}
console.log(ondemDosElementos([1,2,3,4,5]))
