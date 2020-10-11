"use strict";

let personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMoviesDB.count = +prompt("Сколько фильмов вы посмотрели?", );
    
        while (personalMoviesDB.count == "" || npersonalMoviesDB.count == null || isNaN(personalMoviesDB.count)) {
            personalMoviesDB.count = +prompt("Сколько фильмов вы посмотрели?", );
        }
    },
    rememberMyFilms: function(){
        for(let i = 1; i <= personalMoviesDB.count; i++){
            let nameFilm = prompt("Один из просмотренных фильмов?", );
            let ratingFilm = +prompt("на сколько вы его оцените?", );
        
            if (nameFilm != null && ratingFilm != null && nameFilm != "" && ratingFilm != "" && nameFilm.length < 50){
                personalMoviesDB.movies[nameFilm] = ratingFilm;
                console.log("Done");
            } else {
                console.log('error!!!');
                i--;
            }
        }
    },
    detectPersenalLevel: function(){
        if (personalMoviesDB.count <10) {
            console.log("маловато будет");
        } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
            console.log("Ну хоть что-то");
        } else if (personalMoviesDB.count >= 30) {
            console.log("откуда столько времени");
        } else {
            console.log("error!!!");
        };
    },
    showMyDB: function(hidden) {
        if (!hidden){
            console.log(personalMoviesDB);
        }
    },
    toggleVisibleMyDB: function(){
        if (personalMoviesDB.privat){
            personalMoviesDB.privat = false;
        } else {
            personalMoviesDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === "" || genre == null) {
                console.log("Вы ввели не корректные данные!!!");
                i--;
            } else {
                personalMoviesDB.genres[i-1] = genre;
            }

            personalMoviesDB.genres.forEach(item, i => {
                console.log(`Любимый жанр ${i + 1} - это ${item}`);
            });

            
            
        }      
    }
};