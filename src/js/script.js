const calculateNumbers = (operator) => {
const number1 = document.getElementById ('first-number').value;
const number2 = document.getElementById ('second-number').value;
const display = document.getElementById ('results');

// Validation: If input is empty
if (number1 === '' || number2 === '') {
    display.textContent = 'Error'
            return;
}

// Validation: If values are not numbers
if (isNaN(number1) || isNaN(number2)) {
    display.textContent = 'Invalid input'
            return;
}

const num1 = parseFloat(number1);
const num2 = parseFloat(number2);

if (operator === '+') display.textContent = num1 + num2
if (operator === '-') display.textContent = num1 - num2
if (operator === '×') display.textContent = num1 * num2
if (operator === '÷') {
        if (num2 === 0) {
            display.textContent = "Cannot divide by 0";
        } else {
            display.textContent = num1 / num2;
        }
}}