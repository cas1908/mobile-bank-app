const body = document.querySelector('body')
const container = document.querySelector('.container')
const login = document.querySelector('.login')
const user = document.getElementById('user')
const availableBalance = document.getElementById('cal-balance').innerText = '$15,000'
window.addEventListener('load', ()=> {
    let screenSize = window.innerWidth
    console.log(screenSize)
    if(screenSize >= 960 ) {
        login.style.display = "none" 
    } else {
        login.style.display =  "block"
    }
    container.style.display = 'none '
    
    
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

let date
let hour
let min

let currentDate
const dateDisplay = document.getElementById("today's-date")
// AFTER ENTERING SUCCESSFULL DETAILS
const loggedOnSuccess = () => {
    loading = false
    container.style.display = 'block'
    login.style.display = 'none'
    body.removeChild(preLoaderText)
    body.style.display = "block"

    
    setInterval(()=>{
        date = new Date()
        hour = date.getHours()
        min = date.getMinutes()
        currentDate = date.getDate()
        console.log(date)
        dateDisplay.innerText = date.toString().slice(0,-40)

    }, 1000)
    
   
}
// loggedOnSuccess()
let transactionSummary = document.querySelector('.transaction-summary')
let transaction = document.getElementById('transfer')
transaction.addEventListener('submit', (e)=> {
    e.preventDefault()
    let li = document.createElement('li')
    let account = document.getElementById('account')
    let amount = document.getElementById('amount')
    console.log(date)
    let transactionTimeStamp = dateDisplay.innerText.slice(0,10) + dateDisplay.innerText.slice(15,)
    console.log(transactionTimeStamp)
    li.innerText = transactionTimeStamp + " " + " " + account.value + " " + "-" + "$" + amount.value
    console.log(li)
    transactionSummary.prepend(li)
    account.value = ""
    amount.value = ""
})
