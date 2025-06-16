const alunos = {
    aluno1: {nome: 'João', notas: [10,10,10,10]},
    aluno2: {nome: 'Maria', notas: [5,7,4,5]},
    aluno3: {nome: 'Fernanda', notas: [7,6,7,7]},
    aluno4: {nome: 'Mario', notas: [4,6,5,6]}
}

function mediaDeTodos(){
    for(let chave in alunos){
        const aluno = alunos[chave]
        const notas = aluno.notas
        let soma = 0

        for(let i = 0; i < notas.length; i++){
            soma += notas[i]
        }
        const resultado = soma / notas.length
        console.log(`${aluno.nome} tem a média de ${resultado}`)
    }
}
mediaDeTodos()