function add (a,b) {return a + b}

function subtract (a, b) { return a - b}

function multiply (a, b) { return a * b}

function divide (a, b) {return a / b}


let firstNum=""
let op = ""

let secNum = ""

function operate (a, op, b) {
if (op === "+") return add(a,b)
if (op ==="-") return subtract(a,b)
if (op === "*") return multiply(a,b)
if (op ==="/") return divide(a,b)
}


const display = document.querySelector(".display")

let displayStr = display.textContent

const one = document.getElementById('one')
one.addEventListener('click', () => {
    display.textContent = "1"
})

const two = document.getElementById('two')
two.addEventListener('click', () => {
    display.textContent = "2"
})

const three = document.getElementById('three')
three.addEventListener('click', () => {
    display.textContent = "3"
})

const four = document.getElementById('four')
four.addEventListener('click', () => {
    display.textContent = "4"
})

const five = document.getElementById('five')
five.addEventListener('click', () => {
    display.textContent = "5"
})

const six = document.getElementById('six')
six.addEventListener('click', () => {
    display.textContent = "6"
})

const seven = document.getElementById('seven')
seven.addEventListener('click', () => {
    display.textContent = "7"
})

const eight = document.getElementById('eight')
eight.addEventListener('click', () => {
    display.textContent = "8"
})

const nine = document.getElementById('nine')
nine.addEventListener('click', () => {
    display.textContent = "9"
})

const clear = document.getElementById('clear')
clear.addEventListener('click', ()=> {
    display.textContent='';
    firstNum='';
    secNum=''
})


function operateEvent () {
    secNum = display.textContent.slice();
    display.textContent = operate(+firstNum, op, +secNum)  
}

const operation = document.getElementById('operation')
operation.addEventListener('click', operateEvent)

const plus = document.getElementById('plus')
plus.addEventListener('click', ()=> {
if (!(firstNum==='')) {operateEvent()}
else {firstNum= display.textContent.slice();
op= "+"
}
})

const minus = document.getElementById('minus')
minus.addEventListener('click', () => {
    if (!(firstNum==='')) {operateEvent()}
    else {firstNum= display.textContent.slice();
    op= "-"
    display.textContent= '' }
})