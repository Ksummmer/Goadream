"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        borders: 'black',
        bg: 'red'
    }
};




// console.log(options["colors"]["borders"]);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options){
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     }  else {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     counter++;
//     }
// }
// console.log(counter);

"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        borders: 'black',
        bg: 'red'
    }
};


console.log(Object.keys(options));
console.log(Object.keys(options).length);

"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        borders: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("Test");
    }
};

options.makeTest();


"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        borders: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log("Test");
    }
};
options.makeTest();

const {borders, bg} = options.colors;
console.log(borders);
