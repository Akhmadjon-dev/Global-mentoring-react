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
import { addMovie, deleteMovie, fetchMovies, filterMovies, searchMovies, sortByMovies, updateMovie } from './store/thunks';
import { selectMovies } from './store/movies/moviesSlice';

function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const [moivieIdForUpdate, setMoivieIdForUpdate] = useState<string>('');
  const [data, setData] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>();
  const dispatch: any = useAppDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  
  const convertMovies = useSelector(selectMovies);

  const deleteHandler = (id: any) => {
    dispatch(deleteMovie(id))
    dispatch(fetchMovies())
  };

  const converMovieToRequest = (movie) => {
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
    return body
  }

  const addHandler = (movie) => {
    const body = converMovieToRequest(movie)
    dispatch(addMovie(body));
  };

  const getMovieIdForUpdate = (id: string) => {
    setModalIsOpen(true)
    setIsEditable(true)
    setMoivieIdForUpdate(id)
  };

  const editHandler = (values) => {
    console.log(values, 'editHandler');
    const body = {...values, genres: [values.genres]}
    dispatch(updateMovie(body))
  }

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
        editHandler={editHandler}
        isEditable={isEditable}
        movieIdForUpdate={moivieIdForUpdate}
      />
      <Movies
        selectMovieHandler={selectedMovieHandler}
        filterMovies={filterHandler}
        edit={getMovieIdForUpdate}
        add={addHandler}
        deleteHandler={deleteHandler}
        data={convertMovies}
        sortMovies={sortHandler}
      />
      <Logo />
    </StyledApp>
  );
}

export default App;
