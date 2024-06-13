const buttonContainer = document.querySelector('#button-container');
const buttons = buttonContainer.querySelectorAll('.button');
const output = document.querySelector('#output');

let displayValue = '';

buttons.forEach((button) => {button.addEventListener('click', () => {
    displayValue += `${button.textContent}`;
    output.textContent = `${displayValue}`;
    })
});
 