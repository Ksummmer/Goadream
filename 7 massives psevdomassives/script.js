"use strict";

// const arr = [1, 2, 3, 6, 8];

// arr.pop();

// console.log(arr);

// const arr = [1, 2, 3, 6, 8];

// arr.push(10);

// console.log(arr);

// const arr = [1, 2, 3, 6, 8];

// console.log(arr[2]);

// const arr = [1, 2, 3, 6, 8];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// const arr = [1, 2, 3, 6, 8];

// for (let value of arr) {
//     console.log(value);
// }

// const arr = [1, 2, 3, 6, 8];

// console.log(arr.length);

// const arr = [1, 2, 3, 6, 8];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// const arr = [1, 2, 3, 6, 8];

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt ("", "");
// const products = str.split(", ");
// console.log(products);


// const str = prompt ("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));


const arr = [8, 28, 13, 36, 18];
arr.sort();
console.log(arr);



const arr = [8, 28, 13, 36, 18];
arr.sort(compareNum);
console.log(arr);

function compareNum (a, b) {
    return a - b;
}
