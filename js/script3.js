"use strict";

const numberOfFilms

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", );

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", );
    }
}

start();

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

function rememberMyFilms(){
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
}

rememberMyFilms();



function detectPersenalLevel (){
    if (personalMoviesDB.count <10) {
        console.log("маловато будет");
    } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
        console.log("Ну хоть что-то");
    } else if (personalMoviesDB.count >= 30) {
        console.log("откуда столько времени");
    } else {
        console.log("error!!!");
    };
}

detectPersenalLevel();

function showMyDB (hidden) {
    if (!hidden){
        console.log(personalMoviesDB);
    }
}

showMyDB(personalMoviesDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMoviesDB.genres[i-1] = genre;
    }
}

writeYourGenres();
