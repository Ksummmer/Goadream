"use strict";

const numberofFilms = +prompt("How many movies have you watched?", " ");

const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let i = 0;
do {
    i++;
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
    while (i < 2);

console.log(personalMovieDB);