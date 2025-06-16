const formContainer = document.querySelector('#formContainer')
const contextArea = document.querySelector('#context')
const num = document.querySelector('#num')
function checkName(){
    const userName = localStorage.getItem('userName')
    if(userName){
        formContainer.style.display = 'none'
        contextArea.style.display = 'block'
        const name = document.querySelector('#name')
        name.textContent = userName
    }
    else{
        formContainer.style.display = 'block'
        contextArea.style.display = 'none'
    }
}

formContainer.addEventListener('submit', (e) => {
    e.preventDefault()
    const nameInput = document.querySelector('#num')
    localStorage.setItem('userName', nameInput.value)
    nameInput.value = ''
    checkName()
})

const goBAck = document.querySelector('#voltar')
goBAck.addEventListener('click', () => {
    localStorage.removeItem('userName')
    location.reload()
    checkName()
})

checkName()