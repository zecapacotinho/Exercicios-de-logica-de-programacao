function repetição(palavra){
    const letras = palavra.split('')
    const letrasValores = new Set()
    let resultado = ''

    for(let letra of letras){
        if(letra === ' '){
            resultado += ' '
        }
        else if(letrasValores.has(letra)){
            resultado += '*'
        }
        else{
            resultado += letra
            letrasValores.add(letra)
        }
    }
    return resultado
}
console.log(repetição('eu gosto de gatos'))