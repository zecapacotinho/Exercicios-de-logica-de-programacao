function Criptor(text){
    text = text.toLowerCase()
    let letras = []
    for(let valor of text){
        if(valor >= 'a' && valor <= 'z'){
            let posição = valor.charCodeAt(0) - 96
            letras.push(posição)
        }
        else{
            letras.push(valor)
        }
    }
    return letras.join(' | ')
}
console.log(Criptor('mamaco'))