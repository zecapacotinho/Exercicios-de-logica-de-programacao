function FizzBuzz() {
    let res = window.document.getElementById('resul')
    let num = window.document.getElementById('num').value
    if (!num.trim()) {
        window.alert('Por favor, coloque um valor!')
    }
    else {
        let n = Number(num)
        if (n % 3 === 0 && n % 5 === 0) {
            res.innerHTML = 'FizzBuzz'
        }
        else if (n % 3 === 0) {
            res.innerHTML = 'Fizz'
        }
        else if (n % 5 === 0) {
            res.innerHTML = 'Buzz'
        }
        else {
            res.innerHTML = `${n} não multiplo de 3 ou 5`

        }
    }
}
