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
let num1;
let numArr;
let total = 0;

buttons.forEach((button) => {button.addEventListener('click', () => {
    displayValue += `${button.textContent}`;
    output.textContent = `${displayValue}`;
    })
});
 
function clearOutput() {
    output.innerText = '';
    displayValue = '';
    total = 0;
 };
 
 
 clearButton.addEventListener('click', clearOutput)

 equalButton.addEventListener('click', () => {
  
    if (operator == '+') {
        numArr = displayValue.split('+');
        console.log(numArr);
        num1 = numArr[0];
        total += +num1;
        numArr.splice(1).map((item) => {total += +item});
    } else if (operator == '-') {
        numArr = displayValue.split('-');
        console.log(numArr);
        num1 = numArr[0];
        total += +num1;
        numArr.splice(1).map((item) => {total -= +item});
    } else if (operator == 'x') {
        numArr = displayValue.split('x');
        console.log(numArr);
        num1 = numArr[0];
        total += +num1;
        numArr.splice(1).map((item) => {total *= +item});
    } else if (operator == '/') {
        numArr = displayValue.split('/');
        console.log(numArr);
        num1 = numArr[0];
        total += +num1;
        numArr.splice(1).map((item) => {total /= +item});
    };
  
    output.textContent = total;
    displayValue = total;
    total = 0;
});
 