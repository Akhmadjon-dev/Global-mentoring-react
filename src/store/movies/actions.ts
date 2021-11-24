import { MOVIE_LOADING } from './actionTypes';
import { MovieDispatchTypes } from './types';
import { Dispatch } from 'redux';


export function getMovies() {
  return async function (dispatch: Dispatch<MovieDispatchTypes>) {
    dispatch<MovieDispatchTypes>({
      type: MOVIE_LOADING
    })
  }
};