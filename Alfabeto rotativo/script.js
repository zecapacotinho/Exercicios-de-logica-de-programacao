function ClickButton(){
    let res = window.document.querySelector('#res')
    let num = window.document.querySelector('#num').value

    if(!num.trim()){
        res.innerHTML = '<span style="color: red;">Por favor, coloque um valor a cima!</span>'
    }
    else{
        res.innerHTML = ''
        let letra = num
        for(let i = 0; i < letra.length;  i++){
            let valor = letra[i]
            let codigo = valor.charCodeAt(0)

            if(codigo >= 97 && codigo <= 122){
               let numero = (codigo - 97 + 2) % 26 
               res.innerHTML += `${String.fromCharCode(numero + 96)}`
               res.innerHTML += ''
            }
            else{
                res.innerHTML = letra
            }
            
        }
    }
}