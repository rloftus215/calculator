const buttonContainer = document.querySelector('#button-container');
const buttons = buttonContainer.querySelectorAll('.button');
const output = document.querySelector('#output');
const clearButton = document.querySelector('.clear-button');

let displayValue = '';

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