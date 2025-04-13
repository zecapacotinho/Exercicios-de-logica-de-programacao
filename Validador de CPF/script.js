function ValidadorCPF(){
    let num = window.document.querySelector('#num').value
    let res = window.document.querySelector('#res')

    if(!num.trim()){
        res.innerHTML = 'Por favor, coloque um valor!'
    }
    else if(/^\d,{11}$/.ValidadorCPF(num)){
        res.innerHTML = 'Valor invalido '
    }
}