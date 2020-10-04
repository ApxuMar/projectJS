"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", );

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};



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

if (personalMoviesDB.count <10) {
    console.log("маловато будет");
} else if (personalMoviesDB.count >= 10 && personalMoviesDB.count < 30) {
    console.log("Ну хоть что-то");
} else if (personalMoviesDB.count >= 30) {
    console.log("откуда столько времени");
} else {
    console.log("error!!!");
};


console.log(personalMoviesDB);