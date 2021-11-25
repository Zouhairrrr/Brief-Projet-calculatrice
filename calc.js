// const displayValue = 0;

// let c = document.getElementById("clear");
// let b = document.getElementById("screen");
// let x = document.querySelectorAll("button").forEach(y => {
//     y.addEventListener('click', () => {

//         let s = y.value
//         parseInt(s)
//         console.log(s)
//     });
// })


// function Clear() {
//     c.addEventListener('click', function () {
//         b.remove.value
//     })
// }


// function Add(sum) {
//     return sum = + sum;
// }
// function Minus(sus) {
//     return sus -= b.value;
// }
// function Multi(mul) {
//     return mul *= b.value
// }
// function Division(div) {

//     if (b.value === 0) {
//         return 'Error'
//     } else {
//         return div /= div
//     }
// }

function Calculator() {

    let opr = ['+', '-', '/', '*'];
    let screenValue = 0;



    function Calcul(num, operator) {
        num = num.concat(['$opr'], num);
        if (operator === '+') {
            return screenValue = +num
        } else if (operator === '-') {
            return screenValue = -num
        } else if (operator === '*') {
            return screenValue *= num;
        } else if (operator === '/') {
            if (num === 0) {
                return 'error syntaxe'
            } else {
                return screenValue /= num;
            }
        }
    }






}
