function cafeteria(comandos){
    let cafes_servidos = 0
    let contador = 0
    let estado = 'funcionando'

    for(let comando of comandos){
        if(comando === 'inserir'){
            if(estado === 'funcionando'){
                contador += 1
                cafes_servidos += 1
                if(contador === 3){
                    estado = 'travado'
                }
            }
        }
        else if(comando === 'reparar'){
            contador = 0
            estado = 'funcionando'
        }
    }
    return cafes_servidos
}
console.log(cafeteria(['inserir', 'inserir', 'inserir', 'reparar', 'inserir']))