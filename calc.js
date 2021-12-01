const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const numbersEl = document.querySelectorAll(".number");
const operationEl = document.querySelectorAll(".operation");
const equalEl = document.querySelector(".equal");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersEl.forEach((number) => {
    number.addEventListener("click", (e) => {
        if (e.target.innerText === "." && !haveDot) {
            haveDot = true;
        } else if (e.target.innerText === "." && haveDot) {
            return;
        }
        dis2Num += e.target.innerText;
        display2El.innerText = dis2Num;
        // console.log();
    });
});

operationEl.forEach((operation) => {
    operation.addEventListener("click", (e) => {
        if (!dis2Num) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1Num && dis2Num && lastOperation) {
            mathOperation();
        } else {
            result = parseFloat(dis2Num);
        }
        clearVar(operationName);
        lastOperation = operationName;
        console.log(result);
    });
});
function clearVar(name = "") {
    dis1Num += dis2Num + " " + name + " ";
    display1El.innerText = dis1Num;
    display2El.innerText = "";
    dis2Num = "";
    tempResultEl.innerText = result;
}

function mathOperation() {
    if (lastOperation === "x") {
        result = parseFloat(result) * parseFloat(dis2Num);
    } else if (lastOperation === "+") {
        result = parseFloat(result) + parseFloat(dis2Num);
    } else if (lastOperation === "-") {
        result = parseFloat(result) - parseFloat(dis2Num);
    } else if (lastOperation === "/") {
        result = parseFloat(result) / parseFloat(dis2Num);
    } else if (lastOperation === "%") {
        result = parseFloat(result) % parseFloat(dis2Num);
    }
}
// operation();

equalEl.addEventListener("click", () => {
    if (!dis2Num || !dis1Num) return;
    haveDot = false;
    mathOperation();
    clearVar();
    display2El.innerText = result;
    tempResultEl.innerText = "";
    dis2Num = result;
    dis1Num = "";
});

clearAllEl.addEventListener("click", () => {
    dis1Num = "";
    dis2Num = "";
    display1El.innerText = "";
    display2El.innerText = "";
    result = "";
    tempResultEl.innerText = "";
});

clearLastEl.addEventListener("click", () => {
    display2El.innerText = "";
    dis2Num = "";
});


function clickEqual() {
    equalEl.click();
}




















// let value = "0";
// function forclear() {
//     document.getElementById("output").innerHTML = "0";
// }
// function removeZero() {
//     let value = document.getElementById("output").innerHTML;
//     if (value == "0") {
//         value = ""
//         document.getElementById("output").innerHTML = value;
//     }
// }
// function perc() {
//     let value = document.getElementById("output").innerHTML;
//     value = value / 100;
//     document.getElementById("output").innerHTML = value;
// }
// function fordisplay(value) {
//     removeZero()
//     document.getElementById("output").innerHTML += value;
// }











// function solve() {
//     var equation = document.getElementById("output").innerHTML;
//     var solved = eval(equation);
//     document.getElementById('output').innerHTML = solved;
// }

// function Egale() {
//     document.getElementById("output").innerHTML = value;
//     if ( value) {
//     }
// }



// let displayValue = "";
// // let ver = document.getElementById('vergule')
// // let c = document.getElementById("clear");
// let b = document.getElementById("output");
// let button = document.querySelectorAll("button").forEach(y => {
//     y.addEventListener('click', () => {
//         let a = y.innerText
//         if (a === '0' || a >= 0) {
//             displayValue = a ? displayValue.concat(a) : a
//             console.log(displayValue)
//             b.value = displayValue
//         }
//     });
// })
// ver.addEventListener('click', () => {

// })

// function Clear() {
//     c.addEventListener('click', function () {
//         return b.value = 0, displayValue = "";
//     })
// }


// function Calcul(num, operator) {
//     num = num.concat(['$opr'], num);
//     if (operator === '+') {
//         return screenValue = +num
//     } else if (operator === '-') {
//         return screenValue = -num
//     } else if (operator === '*') {
//         return screenValue *= num;
//     } else if (operator === '/') {
//         if (num === 0) {
//             return 'error syntaxe'
//         } else {
//             return screenValue /= num;
//         }
//     }
// }

// // ver.addEventListener('click', removeEventListener);


// // function handlChange(val) {


// //     let val = displayValue
// //     val.addEventListener('change', function () {
// //         if (val === ! '0' || val >= 0) {
// //             console.log(val);
// //             val.concat(oper, val)

// //             if (oper === "+") {
// //                 return val = +val;
// //             } else if (oper === "-") {

// //             }
// //         }
// //     })
// // }
// // Split()