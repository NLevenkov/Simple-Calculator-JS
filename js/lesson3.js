//Temporary value in console---------------------------------------
var temp;

//States for operations--------------------------------------------
var state;
var states = ['plus', 'minus', 'divide', 'multiply'];
var digitsButtonsID = ['digit-0', 'digit-1', 'digit-2', 'digit-3', 'digit-4', 'digit-5', 'digit-6', 'digit-7', 'digit-8', 'digit-9']
var operationButtonsID = ['button-plus', 'button-minus', 'button-multiply', 'button-divide', 'button-clean', 'button-answer']

//----------------------Functions for digits-----------------------
function onDigitButtonClick() {
    var digit = event.currentTarget;
    var consoleEl = document.getElementById('console');
    consoleEl.value += digit.innerHTML;
}

//Functions for operation buttons----------------------------------
function makeOperation(operation) {
    switch (operation) {
        case "plus":
            {
                getConsoleElement();
                state = states[0];
                console.log('onButtonPlusClick');
                break;
            }
        case "minus":
            {
                getConsoleElement();
                state = states[1];
                console.log('onButtonMinusClick');
                break;

            }
        case "multiply":
            {
                getConsoleElement();
                state = states[3];
                console.log('onButtonMultiplyClick');
                break;

            }
        case "divide":
            {
                getConsoleElement();
                state = states[2];
                console.log('onButtonDivideClick');
                break;
            }
        case "clean":
            {
                var consoleEl = document.getElementById('console');
                consoleEl.value = '';
                console.log('onButtonCleanClick');
                break;

            }
        case "answer":
            {

            }

    }



}

function onOperationButtonClick() {
    var operator = event.currentTarget;
    var operation = operator.id;

    switch (operation) {
        case operationButtonsID[0]:
            {
                makeOperation("plus");
                break;
            }
        case operationButtonsID[1]:
            {
                makeOperation("minus");
                break;

            }
        case operationButtonsID[2]:
            {
                makeOperation("multiply");
                break;
            }
        case operationButtonsID[3]:
            {
                makeOperation("divide");
                break;
            }
        case operationButtonsID[4]:
            {
                makeOperation("clean");
                break;
            }
        case operationButtonsID[5]:
            {
                onAnswerButtonClick();
                break;
            }

    }
}

function onAnswerButtonClick() {
    console.log('answerClick');
    var consoleEl = document.getElementById('console');
    var temp2 = Number(consoleEl.value);


    switch (state) {
        case states[0]:
            {
                consoleEl.value = (temp + temp2);
                break;
            }
        case states[1]:
            {
                consoleEl.value = temp - temp2;
                break;
            }
        case states[3]:
            {
                consoleEl.value = temp * temp2;
                break;
            }
        case states[2]:
            {
                consoleEl.value = temp / temp2;
                break;
            }
    }
}

function getConsoleElement() {
    var consoleEl = document.getElementById('console');
    temp = Number(consoleEl.value);
    consoleEl.value = '';
}
//----------------------------------------------------------------------

// Adding eventListeners to operation buttons---------------------------
for (var i = 0; i < operationButtonsID.length; i++) {
    var element = document.getElementById(operationButtonsID[i]);
    element.addEventListener('click', onOperationButtonClick);
}

// Adding eventListeners to digits buttons------------------------------
for (var i = 0; i < digitsButtonsID.length; i++) {
    var digit = document.getElementById(digitsButtonsID[i]);
    digit.addEventListener('click', onDigitButtonClick);
}