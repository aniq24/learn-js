let numberInput = document.getElementById('numberInput');
let trgtInput = document.getElementById('trgtInput');
let numberBtn = document.getElementById('inputBtn');
let trgtBtn = document.getElementById('trgtBtn');
let arrayResult = document.getElementById('arrayList');
let targetResult = document.getElementById('target');
let resetArray = document.getElementById('resetArray');


const array = [];


function inputBtnClicked(){


    array.push(parseInt(numberInput.value));
    arrayResult.innerHTML = "Array: " + array.join(', ');

}

function inputEntered(event){

    if (event.key == 'Enter')
    {
    array.push(parseInt(numberInput.value));
    arrayResult.innerHTML = "Array: " + array.join(', ');
    }

}


function trgtEntered(event){

    if (event.key == 'Enter'){
    targetResult.innerHTML = "Target: " + parseInt(trgtInput.value);
    }
}

function trgtBtnClicked(){

    targetResult.innerHTML = "Target: " + parseInt(trgtInput.value);
 
 }

function resetArr(){

    array.length = 0;
    arrayResult.innerHTML = "Array: ";
    targetResult.innerHTML = "Target: ";
    
}

numberBtn.addEventListener('click', inputBtnClicked);
numberInput.addEventListener('keyup', inputEntered);
trgtInput.addEventListener('keyup', trgtEntered);
trgtBtn.addEventListener('click', trgtBtnClicked);
resetArray.addEventListener('click', resetArr);
