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
export const SearchPopularMovies = createAsyncThunk<IMovie[]>(
  "movies/searchPopular",
  async () => {
    const response: AxiosResponse<any> = await axios.get<any>(`/movies?search=popular`);
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
    const response: AxiosResponse<any> = await axios.post<any>(`/movies`, movie);
    return response.data;
  }
); 
export const updateMovie = createAsyncThunk<IMovie, IMovie>(
  "movies/put",
  async (data: IMovie) => {
    const response: AxiosResponse<any> = await axios.put<any>(`/movies`, data);
    return response.data;
  }
); 
export const deleteMovie = createAsyncThunk<IMovie, string>(
  "movies/delete",
  async (id: string) => {
    const response: AxiosResponse<any> = await axios.delete<any>(`/movies/${id}`);
    return response.data;
  }
); 
