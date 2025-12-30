function Validador(char){
    let pilha = []
    let pares = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    for(let i of char){
        if(i === '(' || i === '[' || i === '{'){
            pilha.push(i)
        }
        else if(i === ')' || i === ']' || i === '}'){
            if(pilha.length === 0 || pilha[pilha.length - 1] !== pares[i]){
                return false
            }
            pilha.pop()
        }
        
    }
    return pilha.length === 0
}
console.log(Validador('{[(){}}'))