function inverso(palavra){
    const reverso = palavra.split('')
    for(let i = 0; i < reverso.length / 2; i++){
        let temp = reverso[i]
        reverso[i] = reverso[reverso.length - 1 - i]
        reverso[reverso.length - 1 - i] = temp
    }
    return reverso.join('')
}
console.log(inverso('roma'))