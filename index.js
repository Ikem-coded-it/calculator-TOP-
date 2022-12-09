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

const screen = document.getElementsByClassName('screen');

function showButtonClicked(e) {
    let char = e.target.innerHTML;
    const screen = document.querySelector('.screen');
    screen.innerHTML += char;
}

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        showButtonClicked(e);
    })
});