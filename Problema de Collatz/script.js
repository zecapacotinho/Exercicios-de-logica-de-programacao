function ClickButton(){
    let res = window.document.getElementById('res')
    let num = window.document.getElementById('num').value
    

    if(!num.trim()){
        window.alert('Por favor, coloque um valor na caixa abaixo!')
    }
    else{
        let n = Number(num)
        let sequencia = `${n}`

        while(n !== 1){
            if(n % 2 === 0){
                n = n / 2
            }
            else{
                n = n * 3 + 1
            }
            res.innerHTML += ` → ${n}`
        }
        res.innerHTML += `<br>Sequência Collatz: ${sequencia}`
    }
}

