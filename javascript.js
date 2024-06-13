const buttonContainer = document.querySelector('#button-container');
const buttons = buttonContainer.querySelectorAll('.button');
const output = document.querySelector('#output');
const clearButton = document.querySelector('.clear-button');
const equalButton = document.querySelector('.equ-button');
const plusButton = document.querySelector('.plus-button');
const subButton = document.querySelector('.minus-button');
const multiplyButton = document.querySelector('.multiply-button');
const divideButton = document.querySelector('.divide-button');

plusButton.addEventListener('click', () => {operator = '+'});
subButton.addEventListener('click', () => {operator = '-'});
multiplyButton.addEventListener('click', () => {operator = 'x'});
divideButton.addEventListener('click', () => {operator = '/'});

let displayValue = '';
let operator;

buttons.forEach((button) => {button.addEventListener('click', () => {
    displayValue += `${button.textContent}`;
    output.textContent = `${displayValue}`;
    })
});
 
function clearOutput() {
    output.innerText = '';
    displayValue = '';
 };
 
 
 clearButton.addEventListener('click', clearOutput)

 