function BubbleSort(bbs){
    let n = bbs.length
    for(let i = 0; i < n - 1; i++){
        for(let j = 0; j < n - 1 - i; j++){
            if(bbs[j] > bbs[j + 1]){
                [bbs[j], bbs[j + 1]] = [bbs[j + 1], bbs[j]];
            }
        }
    }
    return bbs
}

const lista = [21, 2, 1, 0, 7, 4, 3]
const valores = BubbleSort(lista)
console.log(valores)
