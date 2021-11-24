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