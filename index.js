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

// PRELOADER TEXT
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
const clockDisplay = document.createElement('i')
clockDisplay.innerHTML = '<i class="fa-regular fa-clock"></i>'
let currentDate
const dateDisplay = document.getElementById("today's-date")
// AFTER ENTERING SUCCESSFULL DETAILS

let transactionSummary = document.querySelector('.transaction-summary')
let noTransactionText = document.createElement('p')
noTransactionText.innerText = "No Transaction Made Yet"
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
        dateDisplay.innerText = date.toString().slice(0,-40)
        dateDisplay.appendChild(clockDisplay)

    }, 1000)
    
    setTimeout( ()=>{
        location.reload()
        },360000)
        console.log(transactionSummary.childNodes.length)
        transactionSummary.children.length ? console.log('true') : transactionSummary.appendChild(noTransactionText)
//    console.log(transactionSummary)
}
// loggedOnSuccess()

// MAKING TRANSFERS
const transaction = document.getElementById('transfer')
transaction.addEventListener('submit', (e)=> {
    e.preventDefault()
    let li = document.createElement('li')
    let account = document.getElementById('account')
    let amount = document.getElementById('amount')
    console.log(date)
    let transactionTimeStamp = dateDisplay.innerText.slice(0,10) + dateDisplay.innerText.slice(15,)
    console.log(transactionTimeStamp)
    let accountValueElement = document.createElement('span')
    accountValueElement.innerText = `${account.value}`
    let amountValueElement = document.createElement('span')
    amountValueElement.setAttribute('class','amount')
    amountValueElement.innerText = '-$' + `${amount.value}`
    amountValueElement.style.backgroundColor = '#c52927'
    amountValueElement.style.color = 'white'
    li.innerText = transactionTimeStamp
    li.appendChild(accountValueElement)
    li.appendChild(amountValueElement)
    if (transactionSummary.childNodes.length >= 1) {
        transactionSummary.prepend(li)
        transactionSummary.removeChild(noTransactionText)
    }
    console.log(transactionSummary.childNodes.length)
    // transactionSummary.prepend(li)
    console.log(transactionSummary.length)
    account.value = ""
    amount.value = ""

    
})

const loan = document.querySelector('.loan')
loan.addEventListener('submit', (e)=> {
    e.preventDefault()
    let li = document.createElement('li')
    let amount = document.getElementById('loan')
    let transactionTimeStamp = dateDisplay.innerText.slice(0,10) + dateDisplay.innerText.slice(15,)
    let amountValueElement = document.createElement('span')
    amountValueElement.setAttribute('class','amount loan')
    amountValueElement.innerText = '+$' + `${amount.value}`
    amountValueElement.style.backgroundColor = '#5cbd55'
    amountValueElement.style.color = 'white'
    li.innerText = transactionTimeStamp
    li.appendChild(amountValueElement)
    if (transactionSummary.childNodes.length >= 1) {
        transactionSummary.prepend(li)
        transactionSummary.removeChild(noTransactionText)
    }
    amount.value = ""
    
})
