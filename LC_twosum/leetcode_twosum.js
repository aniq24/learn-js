let numberInput = document.getElementById('numberInput');
let trgtInput = document.getElementById('trgtInput');
let numberBtn = document.getElementById('inputBtn');
let trgtBtn = document.getElementById('trgtBtn');
let arrayResult = document.getElementById('arrayList');
let targetResult = document.getElementById('target');
let resetArray = document.getElementById('resetArray');
let findPbutton = document.getElementById('findPairs');
let findResult = document.getElementById('sumF');


const array = [];
let targetValue = 0;


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
    targetValue = parseInt(trgtInput.value);
    targetResult.innerHTML = "Target: " + targetValue ;
    }
}

function trgtBtnClicked(){

    targetValue = parseInt(trgtInput.value);
    targetResult.innerHTML = "Target: " + targetValue;
 
 }

function resetArr(){

    array.length = 0;
    targetValue = 0;
    arrayResult.innerHTML = "Array: ";
    targetResult.innerHTML = "Target: ";
    findResult.innerHTML = "Pairs: ";
    
}

function findPairs(){

    let matchFound = false;

    for(let i = 0; i < array.length; i++){
        for(let j = 0;j < array.length; j++){
            
            
            if (array[i] + array[j] == targetValue && i != j){

                findResult.innerHTML = `Pairs: ${array[i]} and ${array[j]}`;
                matchFound = true;
                break;

            }
           if(matchFound){

            break;
           }
        }
        if(!matchFound){

            findResult.innerHTML = "Pairs: No match found!";

        }

    }

}






numberBtn.addEventListener('click', inputBtnClicked);
numberInput.addEventListener('keyup', inputEntered);
trgtInput.addEventListener('keyup', trgtEntered);
trgtBtn.addEventListener('click', trgtBtnClicked);
resetArray.addEventListener('click', resetArr);
findPbutton.addEventListener('click', findPairs);
