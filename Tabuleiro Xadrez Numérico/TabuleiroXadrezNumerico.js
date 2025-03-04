let numero
function TabuleiroXadrezNumerico(tamanho){
    for(let i = 1; i <= tamanho; i++){
       let linha = ``
       for(let j = 1; j <= tamanho; j++){
            if(i, j % 2 === 1){
                numero = 1
            } else{
                numero = 0
            }
            linha += numero
       }
        console.log(linha)
    }
}

TabuleiroXadrezNumerico(5)