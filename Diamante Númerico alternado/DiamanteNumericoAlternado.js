//Parte superior do diamante
let numero
function AreaSuperior(altura){
    for(let i = 1; i <= altura; i++){
        let linha = ``

        for(let espaço = 1; espaço <= altura - i; espaço++){
            linha += ` `
        }
        
        for(let j = 1; j <= 2 * i - 1; j++){
            if(i % 2 === 1){
                numero = 1
            } else{
                numero = 2
            }
            linha += numero
        }
        console.log(linha)
    }
}

//Parte inferior do diamante
function AreaInferior(altura){
    for(let i = 4; i >= 1; i--){
        let linha = ``
        for(let espaço = 1; espaço <= altura - i; espaço++){
            linha += ` `
        }
        for(let j = 1; j <= 2 * i - 1; j++){
            if(i % 2 === 1){
                numero = 1
            } else{
                numero = 2
            }
            linha += numero
        }
        console.log(linha)
    }
}

AreaSuperior(5)
AreaInferior(5)