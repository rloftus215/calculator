const buttonContainer = document.querySelector('#button-container');
const buttons = buttonContainer.querySelectorAll('.button');
const output = document.querySelector('#output');
const clearButton = document.querySelector('.clear-button');

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
