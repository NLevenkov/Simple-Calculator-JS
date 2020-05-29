// Creating variables for buttons elements
var plusButtonEl = document.getElementById('button-plus');
var minusButtonEl = document.getElementById('button-minus');
var multiplyButtonEl = document.getElementById('button-multiply');
var divideButtonEl = document.getElementById('button-divide');


//Creating functions for listeners
function onButtonPlusClick() {
    var num1El = document.getElementById('num1');
    var num1 = Number(num1El.value);
    var num2El = document.getElementById('num2');
    var num2 = Number(num2El.value);

    ans = num1 + num2;
    console.log('onButtonPlusClick');
    console.log(Number(ans));

}

function onButtonMinusClick() {
    var num1El = document.getElementById('num1');
    var num1 = Number(num1El.value);
    var num2El = document.getElementById('num2');
    var num2 = Number(num2El.value);

    console.log('onButtonMinusClick');
    console.log(num1 - num2);


}

function onButtonMultiplyClick() {
    var num1El = document.getElementById('num1');
    var num1 = Number(num1El.value);
    var num2El = document.getElementById('num2');
    var num2 = Number(num2El.value);

    console.log('onButtonMultiplyClick');
    console.log(num1 * num2);

}

function onButtonDivideClick() {
    var num1El = document.getElementById('num1');
    var num1 = Number(num1El.value);
    var num2El = document.getElementById('num2');
    var num2 = Number(num2El.value);

    console.log('onButtonDivideClick');
    console.log(num1 / num2);


}

//Adding eventListeners to buttons
plusButtonEl.addEventListener('click', onButtonPlusClick);
minusButtonEl.addEventListener('click', onButtonMinusClick);
multiplyButtonEl.addEventListener('click', onButtonMultiplyClick);
divideButtonEl.addEventListener('click', onButtonDivideClick);