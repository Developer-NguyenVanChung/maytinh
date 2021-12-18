let numberOne = document.getElementById('numberOne');
let numberTwo = document.getElementById('numberTwo');
let btnPlus = document.querySelector(".operator .btn1");
let btnMinus = document.querySelector(".operator .btn2");
let btnTimes = document.querySelector(".operator .btn3");
let btnDide = document.querySelector(".operator .btn4");
let btnsqrt = document.querySelector(".operator .btn5");
let resultDisplay = document.querySelector(".result .display");
let resultDisplay2 = document.querySelector(".result .display2");

btnPlus.onclick = function () {
    var value1 = parseFloat(numberOne.value);
    var value2 = parseFloat(numberTwo.value);
    // this.classList.toggle("style")
    var newValue = value1 + value2;
    resultDisplay.innerHTML = newValue;
}

// Trừ
btnMinus.onclick = function () {
    // this.classList.toggle("style")
    var value1 = parseFloat(numberOne.value);
    var value2 = parseFloat(numberTwo.value);
    var newValue = value1 - value2;
    resultDisplay.innerHTML = newValue;
}

// Nhân 
btnTimes.onclick = function () {
    // this.classList.toggle("style")
    var value1 = parseFloat(numberOne.value);
    var value2 = parseFloat(numberTwo.value);
    var newValue = value1 * value2;
    resultDisplay.innerHTML = newValue;
}

// Chia
btnDide.onclick = function () {
    // this.classList.toggle("style")
    var value1 = parseFloat(numberOne.value);
    var value2 = parseFloat(numberTwo.value);
    var newValue = value1 / value2;
    resultDisplay.innerHTML = newValue;
}

// Căn bậc 2
btnsqrt.onclick = function () {
    // this.classList.toggle("style")
    var value1 = parseFloat(numberOne.value);
    var value2 = parseFloat(numberTwo.value);
    var newValue = Math.sqrt(value1);
    var newValue2 = Math.sqrt(value2);
    resultDisplay.innerHTML = newValue;
    resultDisplay2.innerHTML = newValue2;
}

// Phuong trinh bac 2

let inputA = document.getElementById("inputA");
let inputB = document.getElementById("inputB");
let inputC = document.getElementById("inputC");
let btn2 = document.getElementById("btn2");
let new2 = document.getElementById("new2");
let new3 = document.getElementById("new3");


btn2.onclick = function () {
    var a = parseFloat(inputA.value)
    var b = parseFloat(inputB.value)
    var c = parseFloat(inputC.value)

    function de(a, b, c) {

        delta = b * b - 4 * a * c;
        if (delta > 0) {
            let x1 = (-b- Math.sqrt(delta)/2*a);
            let x2 = (-b + Math.sqrt(delta)/2*a);
            new2.innerHTML =x1;
            new3.innerHTML = x2;
        } else if (delta == 0) {
            let x =-b/a*2;
            new2.innerHTML =x;
        } else  {
            new2.innerHTML ="<i>Phương trình vô nghiệm !</i>"
        }
    }
    de(a,b,c);
}

