//Função para parte superior do Diamante Númerico
function DimanteNumerico(altura){
    for(let i = 1; i <= altura; i++){
        let linha = ``

        for(let espaço = 1; espaço <=  altura - i; espaço++){
            linha += ` `
        }

        for(let j = 1; j <= 2 * i - 1; j++){
            linha += i
        }
        console.log(linha)
    } 
}

//Área inferior do Diamante Númerico
function PiramideInvertida(espessura){
    for(let i = 4; i >= 1; i--){
        let espaço = ``

        for(let dimensao = 1; dimensao <= espessura - i; dimensao++){
            espaço += ` `
        }

        for(let c = 1; c <= 2 * i - 1; c++){
            espaço += i
        }
        console.log(espaço)
    }
}

//Execução das funções
DimanteNumerico(5)
PiramideInvertida(5)