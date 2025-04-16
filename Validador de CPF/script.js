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
    const res = window.document.querySelector('#res')
    
    if(!num.value.trim()){
        window.alert('Por favor, insira um CPF para que o programa seja execultado.')
    }
    else{
        let valor = num.value.replace(/\D/g, '')
        let soma = 0
        for(let i = 0; i <= 9; i++){
            soma += Number(valor[i]) * (10 - i)
        }
        res.innerHTML = soma
        
    }
}