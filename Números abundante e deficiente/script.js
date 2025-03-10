function ClickButton(){
    let num = window.document.getElementById('num').value
    let res = window.document.getElementById('res')

    if(!num.trim()){
        window.alert('Por favor, coloque um valor na caixa abaixo!')
    }
    else{
        let n = Number(num)
        let soma = 0

        for(let i = 1; i < n ; i++){
            if(n % i === 0){
                soma += i
            }
        }

        if(soma > n){
            res.innerHTML = `O número ${n} é abudantes`
        }
        else{
            res.innerHTML = `O número ${n} não é abudante`
        }
    }
}