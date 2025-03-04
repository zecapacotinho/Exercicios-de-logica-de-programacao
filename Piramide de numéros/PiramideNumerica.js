function PiramideNumerica(altura){
    for(let i = 1; i <= altura; i++){
        let linha = ``
        for(let j = 1; j <= i; j++){
            linha += i
        }
        console.log(linha)
    }
}

PiramideNumerica(5)

