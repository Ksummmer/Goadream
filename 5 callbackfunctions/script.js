"use strict";


function first() {
    //Do something
    setTimeout(function(){
        console.log(1);
    }, 500);
}


function second(){
    console.log(2);
}

first();
second();


function LearnJS(language, callback){
    console.log(`I learn: ${language}`);
    callback();
}

LearnJS('JavaScript', function(){
    console.log('I finished the lesson!');
});


function LearnJS(language, callback){
    console.log(`I learn: ${language}`);
    callback();
}

function done() {
    console.log('I finished the lesson!');
}


LearnJS('JavaScript', done);

