
import { MOVIE_ERROR, MOVIE_LOADING, MOVIE_SUCCESS } from './actionTypes';

import { IMovieSuccessPayload, MovieDispatchTypes } from './types';

interface IDefaultState {
    loading: boolean;
    movies?: IMovieSuccessPayload;
}

const defaultState:IDefaultState = {
    loading: false,
}

const MovieReducer = (state:IDefaultState = defaultState, action: MovieDispatchTypes) => {
    switch (action.type) {
        case MOVIE_ERROR:
            return{
                loading: false,
            }
        case MOVIE_LOADING:      
            return {
                loading: true,
            }
        case MOVIE_SUCCESS: 
            return {
                loading: false,
                movies: action.payload 
            }
        default:
            return state;
    }
}

export default MovieReducer;