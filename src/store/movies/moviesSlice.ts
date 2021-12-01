import { deleteMovie, updateMovie, SearchPopularMovies } from './../thunks';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../index';

import { IMovie } from './types';
import { fetchMovies, filterMovies, searchMovies, sortByMovies } from '../thunks';

export interface MoviesState {
  movies: IMovie[],
  isLoading: boolean
}

const initialState: MoviesState  = {
  movies: [],
  isLoading: false,
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (_, action: PayloadAction<IMovie[]>) => {
      return {
        isLoading: false,
        movies: action.payload,
      };
    },
    addMovie: (state, action: PayloadAction<IMovie>) => {
      return {
        isLoading: false,
        movies: [action.payload, ...state.movies],
      };
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        isLoading: action.payload,
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchMovies.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload;
    });
    builder.addCase(SearchPopularMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(SearchPopularMovies.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.movies = payload;
    });
    builder.addCase(filterMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(filterMovies.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.movies = payload;
    });
    builder.addCase(sortByMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(sortByMovies.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.movies = payload;
    });
    builder.addCase(searchMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchMovies.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.movies = payload;
    });
    builder.addCase(updateMovie.fulfilled, (state, {payload}) => {
      const updated = state.movies.map(item => item.id === payload.id ? payload : item);
      state.isLoading = false;
      state.movies = updated;
    });
    builder.addCase(deleteMovie.fulfilled, (state, {payload}) => {
      const updated = state.movies.filter(item => item.id !== payload.id);
      state.isLoading = false;
      state.movies = updated;
    });
  }
});

export const { setMovies, setIsLoading, addMovie } = moviesSlice.actions;

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectIsLoading = (state: RootState) => state.movies.isLoading;

export default moviesSlice.reducer; 