// alert('hello world')
const body = document.querySelector('body')
const container = document.querySelector('.container')
const login = document.querySelector('.login')
const user = document.getElementById('user')
const availableBalance = document.getElementById('cal-balance').innerText = '$15,000'
window.addEventListener('load', ()=> {
    // alert('hello there')
    let screenSize = window.innerWidth
    console.log(screenSize)
    container.style.display = 'none '
    
    login.style.display = 'block'
})

// LOGIN VALIDATION
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
            login.style.display = 'none'
            preLoader(true)
            if (username.value == 'cas') {
                user.innerText = 'Cas'
            } else {
                user.innerText = 'Danny'
            }
        } else {
            alert('user not found, enter valid detaiils')
        }

        // alert('lo?gged in succesfully')
        
        
    }

})
const preLoaderText = document.createElement('h1')
const preLoader = (loading)=>{

    preLoaderText.innerText = "Loading Your Banking Experience....."
    setTimeout(()=>{
        loggedOnSuccess()
    }, 5000)

        
        body.appendChild(preLoaderText)
        body.style.display = "flex"
        body.style.alignItems = "center"

       



}

// AFTER ENTERING SUCCESSFULL DETAILS
const loggedOnSuccess = () => {
    loading = false
    container.style.display = 'block'
    login.style.display = 'none'
    body.removeChild(preLoaderText)
    body.style.display = "block"

    let date
    setInterval(()=>{
        date = new Date()
        const dateDsplay = document.getElementById("today's-date").innerText = date.toUTCString().slice(0,-7)

    }, 1000)
    
   
}
// loggedOnSuccess()