function CodigoCesar(){
    let num = window.document.querySelector('#num').value
    let res = window.document.querySelector('#result')

    if(!num.trim()){
        window.alert('Por favor, coloque um valor!')
    }
    else{
        res.innerHTML = ''
        let def = num
        for(let i = 0; i < def.length; i++){
            let texto = def[i]
            let valor = texto.charCodeAt(0)

            if(valor >= 97 && valor <= 122){
                let codigo = ((valor - 97 + 3) % 26) + 97
                res.innerHTML += String.fromCharCode(codigo)
            }
            else{
                res.innerHTML = def
            }

        }
    }
}