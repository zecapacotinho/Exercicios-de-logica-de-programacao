function NumeroFeliz(){
    let res = window.document.querySelector('#res')
    let num = window.document.querySelector('#num').value

    if(!num.trim()){
        window.alert('Coloca alguma coisa aí, cabaço!')
    }    
    else{
        let repetido = new Set()
        let n = Number(num)
        res.innerHTML = ''

        while(n !== 1 && !repetido.has(n)){
            repetido.add(n)

            let soma = 0
            let valores = n.toString().split('').map(Number)

            valores.forEach(digito => {
                soma += digito ** 2
            })
            n = soma
        }
        res.innerHTML = (n === 1)
        ? `<span style="color: green;">${num} é um número feliz! 😃</span>`
        : `<span style="color: red;">${num} é um número infeliz! 😔</span>`
    }
}