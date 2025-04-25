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
               let novoCodigo = (codigo - 97 + 2) % 26 
               res.innerHTML += `${String.fromCharCode(novoCodigo + 96)}`
               res.innerHTML += ''
            }
            else if(codigo >= 65 && codigo <= 90){
                let novoCodigo = (codigo - 65 + 2) % 26
                res.innerHTML += `${String.fromCharCode(novoCodigo + 64)}`
                res.innerHTML += '' 
            }
            else{
                res.innerHTML = letra
            }
            
        }
    }
}