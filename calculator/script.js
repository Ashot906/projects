const display = document.querySelector('input');

function addToDisplay(v){
    display.value = display.value + v;
}

function clearDisplay(){
    display.value = '';
}

function calculateResult(){
    display.value = eval(display.value);
}