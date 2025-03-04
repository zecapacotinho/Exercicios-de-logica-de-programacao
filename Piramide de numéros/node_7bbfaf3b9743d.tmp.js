function PiramideNumerica(altura){
    for(let i = 1; i = altura; i++){
        let linha = ``
        for(j = 1; j <= i; j++){
            linha += `1`
        }
        console.log(linha)
    }
}

PiramideNumerica(5)