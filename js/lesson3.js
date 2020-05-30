// Creating variables for buttons elements
var plusButtonEl = document.getElementById('button-plus');
var minusButtonEl = document.getElementById('button-minus');
var multiplyButtonEl = document.getElementById('button-multiply');
var divideButtonEl = document.getElementById('button-divide');
var cleanButtonEl = document.getElementById('button-clean')


//Creating functions for listeners
function onButtonCleanClick() {
    var num1El = document.getElementById('num1');
    num1El.value = '';
    var num2El = document.getElementById('num2');
    num2El.value = '';
    console.log('onButtonCleanClick');


}

function onButtonPlusClick() {
    var num1El = document.getElementById('num1');
    var num1 = Number(num1El.value);
    var num2El = document.getElementById('num2');
    var num2 = Number(num2El.value);

    ans = num1 + num2;
    console.log('onButtonPlusClick');
    window.alert(Number(ans));

}

function onButtonMinusClick() {
    var num1El = document.getElementById('num1');
    var num1 = Number(num1El.value);
    var num2El = document.getElementById('num2');
    var num2 = Number(num2El.value);

    console.log('onButtonMinusClick');
    window.alert(num1 - num2);


}

function onButtonMultiplyClick() {
    var num1El = document.getElementById('num1');
    var num1 = Number(num1El.value);
    var num2El = document.getElementById('num2');
    var num2 = Number(num2El.value);

    console.log('onButtonMultiplyClick');
    window.alert(num1 * num2);

}

function onButtonDivideClick() {
    var num1El = document.getElementById('num1');
    var num1 = Number(num1El.value);
    var num2El = document.getElementById('num2');
    var num2 = Number(num2El.value);

    console.log('onButtonDivideClick');
    window.alert(num1 / num2);


}

//Adding eventListeners to buttons
plusButtonEl.addEventListener('click', onButtonPlusClick);
minusButtonEl.addEventListener('click', onButtonMinusClick);
multiplyButtonEl.addEventListener('click', onButtonMultiplyClick);
divideButtonEl.addEventListener('click', onButtonDivideClick);
cleanButtonEl.addEventListener('click', onButtonCleanClick);