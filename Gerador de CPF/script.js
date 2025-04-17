function ClickButton(){
    const res = window.document.querySelector('#res')
    let valores = []
    let soma1 = 0
    let soma2 = 0

    for(let i = 0; i < 9; i++){
        valores[i] = Math.floor(Math.random() * 10)
    }

    for(let i = 0; i < 9; i++){
        soma1 += (valores[i]) * (10 - i)
    }
    let valor1 = (soma1 * 10) % 11
    let digito1 = (valor1 === 10 || valor1 === 11)
        ? 0
        : valor1
    valores.push(digito1)

    for(let i = 0; i < 10; i++){
        soma2 += (valores[i]) * (11 - i)
    }
    let valor2 = (soma2 * 10) % 11
    let digito2 = (valor2 === 10 || valor2 == 11)
        ? 0
        : valor2
    valores.push(digito2)

    let cpf = valores.join('')
    let CPFormatado = `${cpf.slice(0,3)}.${cpf.slice(3,6)}.${cpf.slice(6,9)}-${cpf.slice(9)}`
    res.innerHTML += `${CPFormatado}<br>`
}
