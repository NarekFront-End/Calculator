const screen = document.querySelector(".calculator-screen")
let operand1 = "";
let operand2 = "";
let math_operand = "";

function handle(val) {
    if (math_operand !== "") {
        screen.value = operand2;
        screen.value += val;
        operand2 += val;
    } else {
        screen.value += val;
        operand1 += val;
    }
}

function action(str) {
    if (operand2) {
        condition();
        screen.value = operand1;
    } else {
        screen.value = "";
    }
    math_operand = str;
}

function condition() {
    switch (math_operand) {
        case "+":
            screen.value = +operand1 + +operand2;
            operand1 = screen.value;
            operand2 = "";
            math_operand = "";
            break;
        case "-":
            screen.value = +operand1 - +operand2;
            operand1 = screen.value;
            operand2 = "";
            math_operand = "";
            break;
        case "*":
            screen.value = +operand1 * +operand2;
            operand1 = screen.value;
            operand2 = "";
            math_operand = "";
            break;
        case "/":
            screen.value = +operand1 / +operand2;
            operand1 = screen.value;
            operand2 = "";
            math_operand = "";
            break;
        default:
            alert("Not Defind");
            break;
    }
}

function floatingPoint() {
    if (!operand2 && operand1 && !(Number.isInteger(operand1))) {
        screen.value += ".";
        operand1 += ".";
    } else if (operand2 && !(Number.isInteger(operand2))) {
        screen.value += ".";
        operand2 += ".";
    }
}

function clearClick() {
    screen.value = "";
    operand1 = "";
    operand2 = "";
    math_operand = "";
}

function negandpos() {
    if (math_operand !== "") {
        operand2 = negateValue(+screen.value);
    } else {
        operand1 = negateValue(+screen.value);
    }

    screen.value = operand1;
}

function negateValue(value) {
    return value > 0 ? "-" + value : value.toString().slice(1);
}