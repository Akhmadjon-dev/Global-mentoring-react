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
  }
});

export const { setMovies, setIsLoading } = moviesSlice.actions;

export const selectMovies = (state: RootState) => state.movies.movies;
export const selectIsLoading = (state: RootState) => state.movies.isLoading;

export default moviesSlice.reducer; 