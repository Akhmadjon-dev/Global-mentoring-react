import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Form from "./components/MovieForm";
import Logo from "./components/Logo";
import { IMovie } from "./components/types";
import Header from "./containers/Header";
import Movies from "./containers/Movies";
import { StyledApp } from "./styles/App.styled";
import MovieDetails from "./components/MovieDetails";
import { useAppDispatch } from './store/hooks';
import { addMovie, fetchMovies, filterMovies, searchMovies, sortByMovies } from './store/thunks';
import { selectMovies } from './store/movies/moviesSlice';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>();
  const dispatch: any = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  
  const convertMovies = useSelector(selectMovies);

  const deleteMovie = (id: any) => {
    const updated = data.filter((i) => i.id !== id);
    setData(updated);
  };
  console.log(convertMovies, 'movies in the')
  const addHandler = (movie) => {
    const { id, ...rest } = movie;
    const body = {
      ...rest, 
      genres: [movie.genres],
      tagline: movie.tagline || "comedy",
      vote_average: +movie.vote_average,
      budget: +movie.budget,
      revenue: +movie.revenue,
      runtime: +movie.runtime,
    }
    dispatch(addMovie(body));
  };

  const editHandler = (id: string) => {
    // I will implement this one with API
    console.log("edit handler");
  };

  const filterHandler = (id: string): any => {
    if (id === "all") {
      dispatch(fetchMovies());
    } else {
      dispatch(filterMovies(id));
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

  const sortHandler = (id: string): any => {
    dispatch(sortByMovies(id));
  };


  const searchHandler = (e: any): any => {
    e.preventDefault();
    const searchValue = e.target.value;
    console.log(searchValue, 'search value');
    dispatch(searchMovies(searchValue));
  };
  
  return (
    <StyledApp>
      {!selectedMovie && <Header searchHandler={searchHandler} modalOpen={() => setModalIsOpen(true)} />}
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
        filterMovies={filterHandler}
        edit={editHandler}
        add={addHandler}
        deleteHandler={deleteMovie}
        data={convertMovies}
        sortMovies={sortHandler}
      />
      <Logo />
    </StyledApp>
  );
}

export default App;
