const submit = document.querySelector('form')
const password = document.querySelectorAll('input[type="password"]')

submit.addEventListener('submit', (e) =>{
    if(password[1].value === password[0].value) return
    e.preventDefault()
    password.forEach(box => {
        box.classList.add('error')
    })
})

password.forEach(box => {
    box.addEventListener('input', (e) => {
        e.target.classList.remove('error')
    })
})
    
