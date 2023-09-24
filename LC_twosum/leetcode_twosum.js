let numberInput =  document.getElementById('numberInput');
let trgtInput = document.getElementById('trgtInput');
let numberBtn = document.getElementById('inputBtn');
let trgtBtn = document.getElementById('trgtBtn');
let arrayResult = document.getElementById('arrayList');

const array = [];

function inputBtnClicked(){

        array.push(numberInput);
        arrayResult.innerHTML = array;
}

trgtBtn.addEventListener('click', inputBtnClicked(){



)