"use strict"
//First task
let Tc = Number(prompt("Enter temperature in Tc:"));
let Tf = (9 / 5) * Tc + 32;
alert("Temperature in Tf is: " + Tf + ".");

//Second task
let name = "Василий";
let admin = name;
console.log(admin);

//Third task
//первый два числа складываются,третье это строка. В итоге получается строка "2010"
let result = 10 + 10 + "10";
console.log(result);
//принцип тот же,что и в первом пункте. Числа становятся строкой "101010"
result = 10 + "10" + 10;
console.log(result);
//строка преобразуется в число
result = 10 + 10 + +"10";
console.log(result);
//строка преобразуется в число.  Так как строка пуста и имеет отрицательное значение,то получается минус бесконечность
result = 10 / -"";
console.log(result);
//NaN получается из-за того,что не правильно указано дробное число (наверное)
result = 10 / +"2,5";
console.log(result);