function Triangulo(altura){
    for(let i = 1; i <= altura + 1; i++){
        let espaço = ' '
        for(let j = 1; j <= i; j++){
            espaço += '*'
        }
        console.log(espaço)
    }
}

Triangulo(5)