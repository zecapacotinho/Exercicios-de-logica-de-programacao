let num = window.document.querySelector('#num')

num.addEventListener('keypress', () => {
    let contagem = num.value.length
    console.log(contagem)

    if(contagem === 3 || contagem === 7){
        num.value += '.'
    }
    else if(contagem === 11){
        num.value += '-'
    }
})

function VerificadorCPF(){
    const res = window.document.querySelector('#result')
    
    if(!num.value.trim()){
        window.alert('Por favor, insira um CPF para que o programa seja execultado.')
    }
    else{
        let valor = num.value.replace(/\D/g, '')
        let soma1 = 0
        let soma2 = 0

        for(let i = 0; i < 9; i++){
            soma1 += Number(valor[i]) * (10 - i)
        }
        let valor1 = (soma1 * 10) % 11
        let digito1 = (valor1 === 10 || valor1 === 11)
            ? 0
            : valor1
        
        let valor2 = valor + digito1
        for(let j = 0; j < 10; j++){
            soma2 += Number(valor2[j]) * (11 - j)
        }
        let valor3 = (soma2 * 10) % 11
        let digito2 = (valor3 === 10 || valor3 === 11)
            ? 0
            : valor3
        
        let CPFinal = valor.substring(9, 11)
        res.innerHTML = (digito1 === Number(CPFinal[0]) && digito2 === Number(CPFinal[1]))
            ? '<span style="color: green;">CPF Válido</span>'
            : '<span style="color: red;">CPF Inválido</span>'
    }
}