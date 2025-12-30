const participantes = [
    'joão',
    'maria',
    'fernanda',
    'josé',
    'jorge'
]

function sorteados(){
    if(participantes.length === 0){
        console.log('Não possui nenhum participante...')
        return;
    }

    const vencedor = Math.floor(Math.random() * participantes.length)
    return `${participantes[vencedor]} foi o(a) vencedor(a) do sorteio de 100 reais`
}

console.log(sorteados())