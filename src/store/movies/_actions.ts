import { MOVIE_ERROR, MOVIE_SUCCESS, MOVIE_LOADING  } from './actionTypes';
import { MovieDispatchTypes } from './types';
import {Dispatch} from 'redux';
import axios from '../../utils/axios';
 

export function getMovies() {
    return async function(dispatch) {
        dispatch({
            type: MOVIE_LOADING
        })
    }
} 
/* export const getMovies = () => async (dispatch:Dispatch<MovieDispatchTypes>) => {
    try {
        dispatch({
            type: MOVIE_LOADING
        })

        const res: any = await axios.get(`/movies`)

        const { data } = res;

        console.log(data, 'dataaaa');

        dispatch({
            type: MOVIE_SUCCESS,    
            payload: data
        })
    } catch (e) {
        console.log(e, 'erooororo')
        dispatch({
            type: MOVIE_ERROR
        })
    }
} */

export const getMovie = (id:string) => async (dispatch:Dispatch<MovieDispatchTypes>, getState:any) => {
    try {
        dispatch({
            type: MOVIE_LOADING
        })

        const res: any = await axios.get(`/movies/`+id)
        const { data } = res;
        console.log(data, 'dataaaa');
        dispatch({
            type: MOVIE_SUCCESS,    
            payload: data
        })
    } catch (e) {
        console.log(e, 'erooororo')
        dispatch({
            type: MOVIE_ERROR
        })
    }
}