function valueConter(){
    let pageVisits = localStorage.getItem('pageVisits')
    if(pageVisits === null){
        pageVisits = 1
    }
    else{
        pageVisits = parseInt(pageVisits) + 1
    }
    localStorage.setItem('pageVisits', pageVisits)
    document.querySelector('#contador').textContent = pageVisits
}
document.addEventListener('DOMContentLoaded', valueConter)
const deleteResult = document.querySelector('#delete')
deleteResult.addEventListener('click', () => {
    localStorage.removeItem('pageVisits')
    document.querySelector('#contador').textContent = 0
})