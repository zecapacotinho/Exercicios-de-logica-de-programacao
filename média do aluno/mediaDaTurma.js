const turma = {
    aluno1: {nome: 'Roberto', notas: [10,8,7,8]},
    aluno2: {nome: 'Maria', notas: [5,7,6,6]},
    aluno3: {nome: 'Ana', notas: [2,4,4,5]},
    aluno4: {nome: 'João', notas: [10,10,10,10]}
}

function mediaDaTurma(){
    let mediaGeralDaTurma = 0

    let maiorMedia = 0
    let alunoMaiorMedia 
    
    let menorMedia = Infinity
    let alunoMenorMedia

    for(let chave in turma){
        const aluno = turma[chave]
        const notas = aluno.notas 
        let soma = 0

        for(let i = 0; i < notas.length; i++){
            soma += notas[i]
        }
        const resultado = soma / notas.length
        if(resultado > maiorMedia){
            maiorMedia = resultado
            alunoMaiorMedia = aluno.nome
        }
        
        if(resultado < maiorMedia){
            menorMedia = resultado
            alunoMenorMedia = aluno.nome
        }
        console.log(`${aluno.nome} ${resultado}`)
        console.log('_____________________')

        mediaGeralDaTurma += resultado
    }
    const quantidadeDeAlunos = Object.keys(turma).length
    mediaGeralDaTurma = mediaGeralDaTurma / quantidadeDeAlunos
    console.log(`${alunoMaiorMedia} tem a maior média: ${maiorMedia}`)
    console.log(`${alunoMenorMedia} tem a menor média: ${menorMedia}`)
    console.log(`A média geral da turma é de ${mediaGeralDaTurma}`)
}
mediaDaTurma()