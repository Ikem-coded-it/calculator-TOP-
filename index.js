function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function operate(a, operator, b) {
    if (operator == '+') {
        return  add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == 'x') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    } else {
        console.log('Invalid operator.');
    }
};

const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('.screen');

let chars = [];
let operationChars = [];


function showButtonClicked(e) {
    screen.innerHTML += e.target.innerHTML;
}

function erase() {
    screen.innerHTML = "";
    chars = [];
    operationChars = [];
}

function stringCoverter(string) {
    const number = parseInt(string);
    
    if (isNaN(number)) return string;
    return number;
}

function getResult() {
    if (operationChars.length < 3) { // complete operation characters array if incomplete
        let operationChar = chars.join('');
        operationChars.push(operationChar);
        chars = []
    }

    return operate(parseInt(operationChars[0]), operationChars[1], parseInt(operationChars[2]));
}


function getInput() {
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const number = stringCoverter(button.innerHTML);
            if (button.innerHTML == "AC") return erase();
            if (button.innerHTML == "=") {
                const result = getResult()
                erase()
                screen.innerHTML = result;
                return;
            }
    
            showButtonClicked(e);
             
            if (isNaN(number)) {
                let operationChar = chars.join('');
                operationChars.push(operationChar);
                operationChars.push(number);
                chars = [];
                return;
            } 
            chars.push(number);
        })
    });
}

getInput();