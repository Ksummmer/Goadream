"use strict";

// let x = 5;
// alert(x++);
//5

//[] + false - null + true
// console.log(typeof([] + false));   
//false
// console.log([] + false - null);
//NaN
// console.log([] + false - null + true);
//NaN

// let y = 1;
// let x = y = 2;
// alert(x);
//2читает справа налево

// console.log([] + 1 + 2);
//12 строка, т.к. [] превращает в строку

//alert("1"[0]);
//1 выбирает из массива строку с индексом 0, т.е. 1

//2 && 1 && null && 0 && underfined   && запинается на лжи
// console.log(2 && 1 && null && 0 && underfined);
// null

// console.log(!!(1 && 2));
// console.log(1 && 2);
// console.log(!!(1 && 2) === (1 && 2));
// false, !! превращает в булиновое значение

//alert (null || 2 && 3 || 4);
//3

// const a = [1, 2, 3];
// const b = [1, 2, 3];
// console.log(a == b);
//false

//alert(+"Infinity");
//Infinity - number, т.к. + превращает в число

//console.log ("Ёжик" > "яблоко");
// false т.к. по юникоду сравниваются буквы по очереди - я и Ё...

//console.log(0 || "" || 2 || underfined || true || false);
//2 или запинается на правде