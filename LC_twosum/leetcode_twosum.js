let numberInput = document.getElementById('numberInput');
let trgtInput = document.getElementById('trgtInput');
let numberBtn = document.getElementById('inputBtn');
let trgtBtn = document.getElementById('trgtBtn');
let arrayResult = document.getElementById('arrayList');
let targetResult = document.getElementById('target');

const array = [];


function inputBtnClicked(){


    array.push(parseInt(numberInput.value));
    arrayResult.innerHTML = "Array: " + array.join(', ');

}

function trgtBtnClicked(){

   targetResult.innerHTML = "Target: " + parseInt(trgtInput.value);

}

numberBtn.addEventListener('click', inputBtnClicked);
trgtBtn.addEventListener('click', trgtBtnClicked);
