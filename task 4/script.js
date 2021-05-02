"use strict";



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("How many movies have you watched?", " ");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN (personalMovieDB.count)){
            personalMovieDB.count = +prompt("How many movies have you watched?", " ");
        }
    },   
     rememberMyFilms: function(){
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
        
    },
    detectPersonalLevel: function(){
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
    },
    showMyDB: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
    }
    },
    toggleVisibleMyDB: function(){
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        } else{
         personalMovieDB.privat = true;
        }
    },
    // WriteyourGenres: function(){
    //     for (let i = 1; i <= 3; i++) {
    //         let genre = prompt(`Your favourite genre under the number ${i}?`);

    //         if (genre == '' || genre === null) {
    //             console.log('Вы ввели некорректные данные или не ввели их вообще');
    //             i--;
    //         } else{
    //             personalMovieDB.genres [i - 1] = genre;
    //         }
    //     }
    
    //     personalMovieDB.genres.forEach((item, i) => {
    //         console.log(`ЛЮбимый жанр ${i + 1} - это ${item}`);
    //     });
    // },
    WriteyourGenres: function(){
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
    
            if (genres == '' || genres === null) {
                console.log('Вы ввели некорректные данные или не ввели их вообще');
                i--;
            } else{
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort ();
            }


        personalMovieDB.genres.forEach((item, i) => {
            console.log(`ЛЮбимый жанр ${i + 1} - это ${item}`);
        });
    }
}
};

console.log(personalMovieDB);
