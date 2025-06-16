const alunos = {
    aluno1: {nome: 'João', notas: [10,10,10,10]},
    aluno2: {nome: 'Maria', notas: [5,7,4,5]},
    aluno3: {nome: 'Fernanda', notas: [7,6,7,7]}
}

function media(){
    let contador = 0
    for(let i = 0; i < alunos.aluno2.notas.length; i++){
        contador += alunos.aluno2.notas[i]
    }
    const resultado = contador / alunos.aluno2.notas.length
    console.log(`a média de ${alunos.aluno2.nome} foi de ${resultado}`)
}
media()