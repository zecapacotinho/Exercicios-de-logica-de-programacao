function elementoDuplicados(arr){
    let novoArray = []
    for(let num of arr){
        if(!novoArray.includes(num)){
            novoArray.push(num)
        }
    }
    return novoArray
}
console.log(elementoDuplicados([1,1,2,2,3,3,4,4,5,5]))