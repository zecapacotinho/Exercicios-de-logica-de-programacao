function TrianguloRetangulo(altura){
    for(let i = 1; i <= altura; i++){
        let linha = ``
        for(let j = 1; j <= i; j++){
            linha += `*`
        }
        console.log(linha)
    }
}

TrianguloRetangulo(5)