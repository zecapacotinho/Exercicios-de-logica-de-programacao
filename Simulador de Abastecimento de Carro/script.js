function Abastecimento(){
    const valor = document.querySelector('#num')
    const resultado = document.querySelector('#res')
    const gasolina = 5.80
    
    const litros = document.querySelector('#litros')
    litros.addEventListener('click', () => {
        const litros = valor.value / gasolina
        resultado.innerHTML = litros
    })

    const reais = document.querySelector('#reais')
    reais.addEventListener('click', () => {
        const valores = valor.value * gasolina
        resultado.innerHTML = valores
    })
}
Abastecimento() 

