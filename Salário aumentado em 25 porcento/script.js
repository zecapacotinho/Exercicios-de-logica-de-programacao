function AumentoSalarial(){
    let num = window.document.getElementById(`num`).value
    let res = window.document.getElementById(`res`)

    if(!num.trim()){
        window.alert(`Por favor, coloque um valor na caixa abaixo!`)
    } else{
        let SalarioAtual = Number(num)
        let aumento =  SalarioAtual * 0.25
        let SalarioNovo = SalarioAtual + aumento

        res.innerHTML = `O Salário atual é de ${SalarioAtual}, mas com o aumento de 25%. Haverá um aumento, onde os salários ficaram em ${SalarioNovo}`
    }
}




