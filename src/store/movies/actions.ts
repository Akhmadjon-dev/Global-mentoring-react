import { MOVIE_ERROR, MOVIE_SUCCESS, MOVIE_LOADING } from './actionTypes';
import { MovieDispatchTypes } from './types';
import { Dispatch } from 'redux';
import axios from '../../utils/axios';


export function getMovies() {
  return async function (dispatch: Dispatch<MovieDispatchTypes>) {
    dispatch<MovieDispatchTypes>({
      type: MOVIE_LOADING
    })
  }
};