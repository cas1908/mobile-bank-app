// alert('hello world')
const container = document.querySelector('.container')
const login = document.querySelector('.login')
window.addEventListener('load', ()=> {
    // alert('hello there')
    let screenSize = window.innerWidth
    console.log(screenSize)
    container.style.display = 'none '
    
    login.style.display = 'block'
})


const submitBtn = document.querySelector('.login form')

submitBtn.addEventListener('submit', (e, username,password)=> {
    
    e.preventDefault()
    console.log(e)
    username = document.getElementById('username')
    password = document.getElementById('password')
    console.log(username.value)
    console.log(password.value) 
    if ( (username.value && password.value) === '') {
        if (username.value == "") {
            username.style.border = "2px solid red"
        } else username.style.border = "2px solid green"
        if (password.value == ""){
            password.style.border = "2px solid red"
        } else password.style.border = "2px solid green"

        // alert('enter details to continue')
    } else {
        username.value = username.value.toLowerCase()
        console.log(username.value)
        if ((username.value == 'cas' && password.value == '1908') || (username.value == 'danny' && password.value == '2009')) {
            loggedOnSuccess()
        } else {
            alert('user not found, enter valid detaiils')
        }

        // alert('lo?gged in succesfully')
        
        
    }

})

const loggedOnSuccess = () => {
    container.style.display = 'block'
    login.style.display = 'none'

}