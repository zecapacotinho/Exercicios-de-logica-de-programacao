function Conversor(){
    let res = document.querySelector('#res')
    let num = document.querySelector('#num').value.toUpperCase()

    if(!num.trim()){
        res.innerHTML = '<span style="color: red;">Por favor, digite um número!</span>'
    }
    else{
        res.innerHTML = '' 
        num = num.toUpperCase()
        let total = 0
        let previous = 0
        let list = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000}

        for(let i = num.length - 1; i >= 0; i--){
            let letter = num[i]
            let value = list[letter]

            if(!value){
                res.innerHTML = `<span style="color: red;">${letter} não é um valor válido</span>`
                return
            }

            if(value < previous){
                total -= value
            }
            else{
                total += value
            }
            previous = value
        }
        res.innerHTML += `<strong>Resultado:</strong> ${total}`
    }
}