import { GET_FILMS,GET_FILMS_FAIL, GET_FILMS_SUCCESS } from "./constants";

export const getFilms= ()=>({type:GET_FILMS})
export const getFilmsSuccess= (payload)=>({type:GET_FILMS_SUCCESS, payload})
export const getFilmsFail= (payload)=>({type:GET_FILMS_FAIL})
