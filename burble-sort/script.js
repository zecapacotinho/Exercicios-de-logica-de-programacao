function BorbleSort(arr){
    let lista = arr.length
    for(let i = 0; i < lista; i++){
        let trocas = false
        for(let j = 0; j < lista - i - 1; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                trocas = true
            }
        }
        if(!trocas){
            break
        }
    }
    return arr

}
console.log(BorbleSort([1,4,2,3,5]))