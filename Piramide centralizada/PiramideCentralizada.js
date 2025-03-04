function PiramideCentralizada(altura){
    for(let i = 1; i <= altura; i++){
        let linha = ``
        for(let espaco = 1; espaco <= altura - i; espaco++){
            linha += ` `
        }
        for(let j = 1; j <= 2 * i - 1; j++){
            linha += i
        }
        console.log(linha)
    }
} 

PiramideCentralizada(5)
