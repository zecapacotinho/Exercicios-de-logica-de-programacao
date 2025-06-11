function calculandoArry(){
    const arr = [5,10,15]
    let contador = 0
    for(let i = 0; i < arr.length; i++){
        contador += arr[i]
    }
    const resultado  = contador/ arr.length
    console.log(resultado)
}
calculandoArry()