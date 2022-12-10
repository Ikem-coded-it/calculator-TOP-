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
        add(a, b);
    } else if (operator == '-') {
        subtract(a, b);
    } else if (operator == '*') {
        multiply(a, b);
    } else if (operator == '/') {
        divide(a, b);
    } else {
        console.log('Invalid operator.');
    }
};

const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('.screen');

function showButtonClicked(e) {
    screen.innerHTML += e.target.innerHTML;
}

function erase() {
    screen.innerHTML = "";
}

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (button.innerHTML == "AC") return erase()
        showButtonClicked(e);
    })
});

