"use strict";


//while (num <= 55) {
//console.log(num);
// num++;
//}

//do {
//    console.log(num);
//   num++;  
//}
//while (num < 55);

//for (let i = 1; i < 8; i++) {
//    console.log(num);
//    num++;
//}

const numberofFilms = +prompt("How many movies have you watched?", " ");

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

//const a = prompt('Один из последних просмотренных фильмов?', ' '),
//      b = prompt('На сколько его оцените?', ' '),
//      c = prompt('Один из последних просмотренных фильмов?', ' '),
//      d = prompt('На сколько его оцените?', ' ');

//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ' '),
          b = prompt('На сколько его оцените?', ' ');
 
    
    if (a != null && b != null && a != '' && a != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        } else {
            console.log('error');
            i--;
        }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');}
    else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');    
    }
    else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
}
    else {
    console.log('Произошла ошибка');
    }

console.log(personalMovieDB);

