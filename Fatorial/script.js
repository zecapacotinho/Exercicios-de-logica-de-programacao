function ClickButton(){
    let res = window.document.querySelector('#res')
    let num = window.document.querySelector('#num').value

    if(!num.trim()){
        window.alert('Por favor, coloque um valor!')
    }
    else{
        let n = Number(num)
        let f = 1
        for(let i = 1; i <= n; i++){
            f *= i 
        }
        res.innerHTML = `O fatorial de ${num} é ${f}.`
    }
}