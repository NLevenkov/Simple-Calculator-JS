// Creating variables for buttons elements
var temp;

var state;
var plusState = 'plus';
var minusState = 'minus';
var divideState = 'divide';
var multiplyState = 'multiply';


var plusButtonEl = document.getElementById('button-plus');
var minusButtonEl = document.getElementById('button-minus');
var multiplyButtonEl = document.getElementById('button-multiply');
var divideButtonEl = document.getElementById('button-divide');
var cleanButtonEl = document.getElementById('button-clean');
var answerButtonEl = document.getElementById('button-answer');

//Digits
var oneButtonEl = document.getElementById('digit-1');
var twoButtonEl = document.getElementById('digit-2');
var threeButtonEl = document.getElementById('digit-3');
var fourButtonEl = document.getElementById('digit-4');
var fiveButtonEl = document.getElementById('digit-5');
var sixButtonEl = document.getElementById('digit-6');
var sevenButtonEl = document.getElementById('digit-7');
var eightButtonEl = document.getElementById('digit-8');
var nineButtonEl = document.getElementById('digit-9');
var zeroButtonEl = document.getElementById('digit-0');


//Creating functions for listeners

//Functions for digits
function onDigitButtonClick(id, digit) {
    var num1El = document.getElementById('num1');
    num1.value += digit;
    // console.log(num1.value);

}

function onOneButtonCLick() {
    onDigitButtonClick('digit-1', 1);
}

function onTwoButtonCLick() {
    onDigitButtonClick('digit-2', 2);
}

function onThreeButtonCLick() {
    onDigitButtonClick('digit-3', 3);
}

function onFourButtonCLick() {
    onDigitButtonClick('digit-4', 4);
}

function onFiveButtonCLick() {
    onDigitButtonClick('digit-5', 5);
}

function onSixButtonCLick() {
    onDigitButtonClick('digit-6', 6);
}

function onSevenButtonCLick() {
    onDigitButtonClick('digit-7', 7);
}

function onEightButtonCLick() {
    onDigitButtonClick('digit-8', 8);
}

function onNineButtonCLick() {
    onDigitButtonClick('digit-9', 9);
}

function onZeroButtonCLick() {
    onDigitButtonClick('digit-0', 0);
}

//Functions for operation buttons
function onAnswerButtonClick() {
    console.log('answerClick');
    var num1El = document.getElementById('num1');
    var temp2 = Number(num1El.value);


    switch (state) {
        case plusState:
            {
                num1El.value = (temp + temp2);
                break;
            }
        case minusState:
            {
                num1El.value = temp - temp2;
                break;
            }
        case multiplyState:
            {
                num1El.value = temp * temp2;
                break;
            }
        case divideState:
            {
                num1El.value = temp / temp2;
                break;
            }
    }
}

function onButtonCleanClick() {
    var num1El = document.getElementById('num1');
    num1El.value = '';
    // var num2El = document.getElementById('num2');
    // num2El.value = '';
    console.log('onButtonCleanClick');


}

function onButtonPlusClick() {
    var num1El = document.getElementById('num1');
    temp = Number(num1El.value);
    num1El.value = '';
    state = plusState;
    console.log('onButtonPlusClick');

}

function onButtonMinusClick() {
    var num1El = document.getElementById('num1');
    temp = Number(num1El.value);
    num1El.value = '';
    state = minusState;
    console.log('onButtonMinusClick');

}

function onButtonMultiplyClick() {
    var num1El = document.getElementById('num1');
    temp = Number(num1El.value);
    num1El.value = '';
    state = multiplyState;
    console.log('onButtonMultiplyClick');
}

function onButtonDivideClick() {
    var num1El = document.getElementById('num1');
    temp = Number(num1El.value);
    num1El.value = '';
    state = divideState;

    console.log('onButtonDivideClick');
}

//Adding eventListeners to operation buttons
plusButtonEl.addEventListener('click', onButtonPlusClick);
minusButtonEl.addEventListener('click', onButtonMinusClick);
multiplyButtonEl.addEventListener('click', onButtonMultiplyClick);
divideButtonEl.addEventListener('click', onButtonDivideClick);
cleanButtonEl.addEventListener('click', onButtonCleanClick);

//Digit buttons
oneButtonEl.addEventListener('click', onOneButtonCLick);
twoButtonEl.addEventListener('click', onTwoButtonCLick);
threeButtonEl.addEventListener('click', onThreeButtonCLick);
fourButtonEl.addEventListener('click', onFourButtonCLick);
fiveButtonEl.addEventListener('click', onFiveButtonCLick);
sixButtonEl.addEventListener('click', onSixButtonCLick);
sevenButtonEl.addEventListener('click', onSevenButtonCLick);
eightButtonEl.addEventListener('click', onEightButtonCLick);
nineButtonEl.addEventListener('click', onNineButtonCLick);
zeroButtonEl.addEventListener('click', onZeroButtonCLick);
answerButtonEl.addEventListener('click', onAnswerButtonClick);