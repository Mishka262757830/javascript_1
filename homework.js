"use strict";
//First task
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2

d = b++;
alert(d); //ответ: 1

c = 2 + ++a;
alert(c); //ответ: 5

d = 2 + b++;
alert(d); //ответ: 4
alert(a); //3
alert(b); //3
//Second task
//Ответ 5. Так как сначала выполняется действие в скобках. Если бы не было задано значение переменной a, то она бы приняла значение 2 (*= умножение и присваивание)
let a = 2;
let x = 1 + (a *= 2);
//Third task
let a = Number(prompt('Enter first number:'));
let b = Number(prompt('Enter second number:'));
if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else if (a > 0 && b < 0 || a < 0 && b > 0) {
    alert(a + b);
} else {
    alert('Error!');
}
//Fourth task
let m = Number(prompt('Enter first number:'));
let n = Number(prompt('Enter second number:'));
function summ (m, n) {
    return m + n;
}
let res = summ(m, n);
alert(res);

function dif(m, n) {
    return m - n;
}
res = dif(m, n);
alert(res);

function multi(m, n) {
    return m * n;
}
res = multi(m, n);
alert(res);

function div(m, n) {
    return m / n;
}
res = div(m, n);
alert(res);
//Fifth task
//Не до конца понял,что сделал
function mathOperation(m, n, operation) {
    switch (operation) {
        case "+":
            return summ(m, n);
        case  "-":
            return dif(m, n);
        case "*":
            return multi(m, n);
        case "/":
            return div(m, n);
    }
}