const body = document.querySelector('body')
const container = document.querySelector('.container')
const login = document.querySelector('.login')
const user = document.getElementById('user')
let currentBalance = 15000
let availableBalance = document.getElementById('cal-balance')
availableBalance.innerText = '$' + currentBalance
let screenSize = window.innerWidth
window.addEventListener('load', ()=> {

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
    username = document.getElementById('username')
    password = document.getElementById('password')
    if ( (username.value && password.value) === '') {
        if (username.value == "") {
            username.style.border = "2px solid red"
        } else username.style.border = "2px solid green"
        if (password.value == ""){
            password.style.border = "2px solid red"
        } else password.style.border = "2px solid green"
    } else {
        username.value = username.value.toLowerCase()
        if ((username.value == 'cash' && password.value == '1908') || (username.value == 'danny' && password.value == '2009')) {
            login.style.display = 'none'
            preLoader(true)
            if (username.value == 'cash') {
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
    preLoaderText.style.width = "90%"
    preLoaderText.innerText = "Loading Your Banking Experience....."
    setTimeout(()=>{
        loggedOnSuccess()
    }, 5000)
        body.appendChild(preLoaderText)
        body.style.display = "flex"
        body.style.alignItems = "center"
        body.style.justifyContent = "center"
        setInterval(()=>{
            date = new Date()
            hour = date.getHours()
            min = date.getMinutes()
            currentDate = date.getDate()
            dateDisplay.innerText = date.toString().slice(0,-40)
            dateDisplay.appendChild(clockDisplay)
        }, 1000)
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
noTransactionText.innerText = "No Transaction Made Yet \n Make transactions to see last 5 transactions"

const loggedOnSuccess = () => {
    if (screenSize >= 640) {
        transactionSummary.style.height = '500px'
    } else transactionSummary.style.height = '200px'
    loading = false
    container.style.display = 'block'
    login.style.display = 'none'
    body.removeChild(preLoaderText)
    body.style.display = "block"
    setTimeout( ()=>{
        location.reload()
        },360000)
        transactionSummary.children.length ? console.log('true') : transactionSummary.appendChild(noTransactionText)
}

// MAKING TRANSFERS
const transaction = document.getElementById('transfer')
transaction.addEventListener('submit', (e)=> {
    e.preventDefault()
    let li = document.createElement('li')
    let account = document.getElementById('account')
    let amount = document.getElementById('amount')
    let transactionTimeStamp = dateDisplay.innerText.slice(0,10) + dateDisplay.innerText.slice(15,)
    let accountValueElement = document.createElement('span')
    accountValueElement.innerText = `${account.value}`
    let amountValueElement = document.createElement('span')
    amountValueElement.setAttribute('class','amount')
    amountValueElement.innerText = `-$${amount.value}`
    amountValueElement.style.backgroundColor = '#c52927'
    amountValueElement.style.color = 'white'
    calculateAvailableBalance(amount.value,"")
    li.innerText = transactionTimeStamp
    li.appendChild(accountValueElement)
    li.appendChild(amountValueElement)
    if (transactionSummary.childNodes.length >= 1) {
        transactionSummary.style.justifyContent = "flex-start"
        transactionSummary.prepend(li)
        noTransactionText.style.display = "none"
    } 
     if (transactionSummary.childNodes.length >=6 && screenSize < 640) {
            transactionSummary.lastChild.remove()
        } else if (transactionSummary.childNodes.length >= 11) transactionSummary.lastChild.remove()
    account.value = ""
    amount.value = "" 
})

// RECEIVING LOANS
const loan = document.querySelector('.loan')
loan.addEventListener('submit', (e)=> {
    e.preventDefault()
    let loanVendor = document.createElement('span')
    loanVendor.innerText = "CashMe"
    let li = document.createElement('li')
    let amount = document.getElementById('loan')
    let transactionTimeStamp = dateDisplay.innerText.slice(0,10) + dateDisplay.innerText.slice(15,)
    let amountValueElement = document.createElement('span')
    amountValueElement.setAttribute('class','amount loan')
    amountValueElement.innerText = '+$' + `${amount.value}`
    amountValueElement.style.backgroundColor = '#5cbd55'
    amountValueElement.style.color = 'white'
    calculateAvailableBalance("",amount.value)
    li.innerText = transactionTimeStamp
    li.appendChild(loanVendor)
    li.appendChild(amountValueElement)
    if (transactionSummary.childNodes.length >= 1) {
        transactionSummary.style.justifyContent = "flex-start"
        transactionSummary.prepend(li)
        noTransactionText.style.display = "none"
    } 
    if (transactionSummary.childNodes.length >= 6 && screenSize < 640) {
        transactionSummary.lastChild.remove()
    } else if (transactionSummary.childNodes.length >= 11) transactionSummary.lastChild.remove()
    amount.value = ""
})

// CALCULATE BALANCE
const calculateAvailableBalance = (value,value2)=> {
    creditDebitTotal(value,value2)
    if (value) {
        currentBalance = currentBalance - value
        availableBalance.innerText = '$' + currentBalance
    }
    if (value2){
        currentBalance = currentBalance + Number(value2)
        availableBalance.innerText = '$' + currentBalance
    }
}

//  CREDIT-DEBIT TOTAL
let calculateCredit = 0
let calculateDebit = 0
const creditDebitSummary = document.getElementById('credit-debit-summary')
const creditSpan = document.getElementById('credit')
const debitSpan = document.getElementById('debit')
 const creditDebitTotal = (debit,credit)=> {
   calculateCredit = calculateCredit + Number(credit)
   calculateDebit = calculateDebit + Number(debit)
   creditSpan.innerText = `$${calculateCredit}`
   debitSpan.innerText = `$${calculateDebit}`
 
 }    