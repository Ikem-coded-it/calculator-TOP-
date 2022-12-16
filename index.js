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
    // check if screen contains error message and clears them before displaying new character clicked
    if (screen.innerHTML == "Ey you can't do that" || screen.innerHTML == 'syntax error') {
        erase();
        chars.push(parseFloat(e.target.innerHTML));
    }

    // if dot is in chars array then display on screen
    if (e.target.innerHTML == ".") {
        return chars.includes(".") ? screen.innerHTML += '.' : screen.innerHTML += ''
    } else {
        screen.innerHTML += e.target.innerHTML;
    }
}    

function erase() {
    // clears up everything
    screen.innerHTML = "";
    chars = [];
    operationChars = [];
}

function stringConverter(string) {
    // converts number from default string form to float and returns back the string if it doesn't contain a number
    const number = parseFloat(string);
    return isNaN(number) ? string : number;
}

function getResult() {
    if (operationChars.length < 3) { 
        // complete operation characters array if incomplete
        let operationChar = chars.join('');
        operationChars.push(operationChar);
        chars = []
    }
    return operate(parseFloat(operationChars[0]), operationChars[1], parseFloat(operationChars[2]));
}

function getResultAndDisplay() {
    let result = getResult()
    if (result == "Ey you can't do that") {
        screen.innerHTML = "Ey you can't do that";
        return
    }
    if (isNaN(result)) result = 'syntax error';
    erase()
    screen.innerHTML = result;
    chars.push(result);
}

function getInput() {
    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const input = stringConverter(button.innerHTML);

            if (input == "AC") return erase();

            if (input == "=") return getResultAndDisplay();

            if (input == ".") {
                if (!chars.includes(".")) {
                    chars.push(input);
                    showButtonClicked(e);
                }
            } else if (isNaN(input)) {
                showButtonClicked(e);
                if (operationChars.length === 2) return getResultAndDisplay();
                let operationChar = chars.join('');
                operationChars.push(operationChar);
                operationChars.push(input);
                chars = [];
                return;
            } else {
                chars.push(input);
                showButtonClicked(e);
            }
        })
    })
};

getInput()