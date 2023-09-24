import mathFunction from './mathFunction.js';

let addBtn = document.getElementById("addBtn");
let minusBtn = document.getElementById("minusBtn")
let displayResult = document.getElementById("result");

const value1 = 5;
const value2 = 2;


addBtn.addEventListener('click', () => {

    const result = mathFunction.add(value1, value2);
    displayResult.innerHTML = `Result: ${result}`;


});

minusBtn.addEventListener('click', () => {

    const result = mathFunction.minus(value1, value2);
    displayResult.innerHTML = `Result: ${result}`;


});