function ClickButton(){
    let num = window.document.getElementById('num').value
    let res = window.document.getElementById('res')

    if(!num.trim()){
        window.alert('Por favor, coloque um valor na caixa abaixo!')
    }
    else{
        let n = num.split('').reverse().join('')
        if(n === num){
            res.innerHTML = `${n} é palídromo!`
        }
        else{
            res.innerHTML = `${n} não é palídromo!`
        }
    }
}