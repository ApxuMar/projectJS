"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", );

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

let nameFilm = prompt("Один из просмотренных фильмов?", );
let ratingFilm = +prompt("на сколько вы его оцените?", );
let nameFilm2 = prompt("Один из просмотренных фильмов?", );
let ratingFilm2 = +prompt("на сколько вы его оцените?", );

personalMoviesDB.movies[nameFilm] = ratingFilm;
personalMoviesDB.movies[nameFilm2] = ratingFilm2;

console.log(personalMoviesDB);
