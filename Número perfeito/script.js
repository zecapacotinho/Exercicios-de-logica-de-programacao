function NumeroPerfeito(){
    let pri = window.document.getElementById(`pri`)
    let res = window.document.getElementById(`res`)
    let num = window.document.getElementById(`num`)

    if(!num.value.trim() || !pri.value.trim()){
        window.alert(`Por favor, coloque um valor em cada caixa abaixo!`)
    }
    else{
        let p = Number(pri.value)
        let n = Number(num.value)
        
        let valor = Math.pow(2, p - 1)
        let semp = Math.pow(2, p) - 1
        let perfeito = valor * semp
        
        if(n === perfeito){
            res.innerHTML = `O número ${n} é perfeito!`
        }
        else{
            res.innerHTML = `O número ${n} não é perfeito!`
        }
    }
}
