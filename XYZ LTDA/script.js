function PercentualReajuste(){
    let res = window.document.getElementById(`res`)
    let num = window.document.getElementById(`num`).value
    let per = window.document.getElementById(`per`).value

    if(!num.trim()){ 
        window.alert(`Por favor, Coloque um valor na caixa abaixo!`)
    } else{
        let SalarioAtual = Number(num)
        let SalarioNovo = SalarioAtual +((SalarioAtual * Number(per))/100)
        res.innerHTML = `O Salário atual é de R$${SalarioAtual}. Com um percentual de ${per}%, o Salário ficará em torno de R$${SalarioNovo}.`
    }
}