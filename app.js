"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies:{

    },
    actors:{},
    genres: [],
    privat: false,
}

const a = prompt("один из просмотренных фильмов?", ""),
    b = prompt("На сколько оцентите его?", "");

personalMovieDB.movies[a] = b;

console.log(personalMovieDB)


