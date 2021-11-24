import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Form from "./components/MovieForm";
import Logo from "./components/Logo";
import { IMovie } from "./components/types";
import Header from "./containers/Header";
import Movies from "./containers/Movies";
import movies from "./db/movies";
import { StyledApp } from "./styles/App.styled";
import MovieDetails from "./components/MovieDetails";
//import { useAppDispatch, useAppSelector } from "./store/hooks";
//import { getMovies } from "./store/Movie/actions";
//import { AppDispatch } from "./store";

import { AppDispatch, RootState } from './store';
import { useAppDispatch } from './store/hooks';
import { fetchMovies } from './store/thunks';
import { selectMovies } from './store/movies/moviesSlice';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>();
  //const movieStore = useAppSelector(state => state.movies);
  const dispatch: any = useAppDispatch();

  //console.log(movieStore, 'movie store');

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  
  const myMovies = useSelector(selectMovies);

  const convertMovies = (moviesList) => {
    return moviesList.map(movie => {
      return {
        id: movie.id,
        title: movie.title,
        rate: '10',
        genre: movie.genres[0],
        description: movie.overview,
        releaseDate: movie.release_date,
        url: movie.poster_path,
        runtime: `${movie.runtime}`
      }
    })
  }

  const deleteMovie = (id: any) => {
    const udpated = data.filter((i) => i.id !== id);
    setData(udpated);
  };

  const addHandler = (movie: IMovie) => {
    setData([{ ...movie, id: `${data.length + 1}` }, ...data]);
  };

  const editHandler = (id: string) => {
    // I will implement this one with API
    console.log("edit handler");
  };

  const filterMovies = (id: string): any => {
    if (id === "all") {
      setData(movies);
    } else {
      const sortedList = movies.filter((item) => item.genre === id);
      setData(sortedList);
    }
  };

  const selectedMovieHandler = (id: string): any => {
    if (id !== "") {
      const foundMovie = data.find((item) => item.id === id);
      setSelectedMovie(foundMovie);
    } else {
      setSelectedMovie(null);
    }
  };

  //dispatch(getMovies());
  // console.log(movieStore, 'movie store');
  
  return (
    <StyledApp>
      {!selectedMovie && <Header modalOpen={() => setModalIsOpen(true)} />}
      {selectedMovie && (
        <MovieDetails
          data={selectedMovie}
          selectedMovieHandler={selectedMovieHandler}
        />
      )}
      <Form
        addMovie={addHandler}
        isOpen={modalIsOpen}
        modalClose={() => setModalIsOpen(false)}
      />
      <Movies
        selectMovieHandler={selectedMovieHandler}
        filterMovies={filterMovies}
        edit={editHandler}
        add={addHandler}
        deleteHandler={deleteMovie}
        data={convertMovies(myMovies)}
      />
      <Logo />
    </StyledApp>
  );
}

export default App;
