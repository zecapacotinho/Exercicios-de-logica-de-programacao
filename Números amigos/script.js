function VerificandoValores(num){
    let soma = 0
    for(let i = 1; i < num; i++){
        if(num % i === 0){
            soma += i
        }
    }
    return soma
}

function ClickButton(){
    let val = window.document.getElementById(`val`).value
    let pri = window.document.getElementById(`pri`).value
    let res = window.document.getElementById(`res`)

    if(!val.trim() || !pri.trim()){
        window.alert(`Por favor, coloque um valor na caixa abaixo!`)
    }
    else{
        let v = Number(val)
        let p = Number(pri)

        if(VerificandoValores(p) === v && VerificandoValores(v) === p){
            res.innerHTML = `Os números ${v} e ${p} são amigos!`
        }
        else{
            res.innerHTML = `Os números ${v} e ${p} não são amigos!`
        }
    }
}