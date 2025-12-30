function cifraCezar(valor){
    if(isNaN(valor)){
        const charNumber = valor.toLowerCase().split('')
        const numberValue = charNumber.map(letras => letras.charCodeAt(0) - 96 + 2)
        return numberValue.map(n => String.fromCharCode(n + 96)).join('')
    }

    return /[^a-zA-Z]/.test(valor) 
}
console.log(cifraCezar('eu gosto de ração de cachorro'))
