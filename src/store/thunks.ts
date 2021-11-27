import { createAsyncThunk } from "@reduxjs/toolkit";

import { IMovie } from "./movies/types";
import axios from '../utils/axios';
import { AxiosResponse } from "axios";

export const fetchMovies = createAsyncThunk<IMovie[]>(
  "movies/fetch",
  async () => {
    const response: AxiosResponse<any> = await axios.get<any>(`/movies`);
    return response.data.data;
  }
); 

export const filterMovies = createAsyncThunk<IMovie[], string>(
  "movies/filter",
  async (query: string) => {
    const response: AxiosResponse<any> = await axios.get<any>(`/movies?filter=${query}`);
    return response.data.data;
  }
); 

export const sortByMovies = createAsyncThunk<IMovie[], string>(
  "movies/sortBy",
  async (query: string) => {
    const response: AxiosResponse<any> = await axios.get<any>(`/movies?sortBy=${query}&sortOrder=asc`);
    return response.data.data;
  }
); 
export const searchMovies = createAsyncThunk<IMovie[], string>(
  "movies/search",
  async (query: string) => {
    const response: AxiosResponse<any> = await axios.get<any>(`/movies?search=${query}&searchBy=title`);
    return response.data.data;
  }
); 
export const addMovie = createAsyncThunk<IMovie[], IMovie>(
  "movies/add",
  async (movie: IMovie) => {
    console.log(movie, 'in the thunk')
    const response: AxiosResponse<any> = await axios.post<any>(`/movies`, movie);
    return response.data;
  }
); 
