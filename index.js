function add(a, b) {
    return (a + b).toFixed(2);
};

function subtract(a, b) {
    return (a - b).toFixed(2);
};

function multiply(a, b) {
    return (a * b).toFixed(2);
};

function divide(a, b) {
    if (b == 0) return "Ey you can't do that";
    return (a / b).toFixed(2);
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

    return operate(parseFloat(operationChars[0]), operationChars[1], parseFloat(operationChars[2]));
}

function getResultAndDisplay(number) {
    let result = getResult()
    if (result == "Ey you can't do that") {
        screen.innerHTML = "Ey you can't do that";
        return
    }
    if (isNaN(result)) result = 'syntax error';
    erase()
    screen.innerHTML = result;
    chars.push(result);
    return;
}


function getInput() {
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const number = stringCoverter(button.innerHTML);
            if (button.innerHTML == "AC") return erase();
            if (button.innerHTML == "=") return getResultAndDisplay() 
    
            showButtonClicked(e);
             
            if (number == ".") {
                chars.push(number);
                return
            } else if (isNaN(number)) {
                if (operationChars.length === 2) return getResultAndDisplay();
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