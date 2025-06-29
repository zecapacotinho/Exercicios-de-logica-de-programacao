function Triangulo(altura){
    for(let i = 1; i <= altura; i++){
        let espaço = ''
        for(let j = 1; j <= altura; i++){
            espaço += ' '
        }
        console.log(espaço)
    }
}

Triangulo(5)