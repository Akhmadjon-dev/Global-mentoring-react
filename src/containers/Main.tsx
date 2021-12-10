import Header from "./Header/index";
import React from "react";
import Movies from "./Movies";
import { useAppDispatch } from "../store/hooks";
import {
  fetchMovies,
  filterMovies as filterMovieByGenre,
  searchMovies,
  SearchPopularMovies,
  sortByMovies,
} from "../store/thunks";
import { useSelector } from "react-redux";
import { selectMovies } from "../store/movies/moviesSlice";
import { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

function Main({
  searchHandler,
  modalOpen,
  selectMovieHandler,
  filterMovies,
  edit,
  add,
  deleteHandler,
  sortMovies,
}: {
  searchHandler: (e: any) => void;
  modalOpen: any;
  selectMovieHandler: any;
  filterMovies: any;
  edit: any;
  add: any;
  deleteHandler: any;
  data: any;
  sortMovies: any;
}) {
  const dispatch: any = useAppDispatch();
  const location: any = useLocation();
  const history: any = useHistory();
  const data = useSelector(selectMovies);
  const query = location.pathname.split("/")[2];
  const movieId = location.pathname.split("=:")[1];
  let filterType = location.search.split("").slice(1).join("");
  const search = location.search;

  useEffect(() => {
    if (location.pathname.includes("genre")) {
      if (filterType === "all") {
        dispatch(fetchMovies());
      } else {
        dispatch(filterMovieByGenre(filterType));
      }
    } else if (location.pathname.includes("sortBy")) {
      dispatch(sortByMovies(filterType));
    } else if (location.pathname.includes("movie=:")) {
        history.push('/movies/'+ movieId)
      } else if(query) {
      dispatch(searchMovies(query));
    }else{
      dispatch(SearchPopularMovies());
    }
  }, [query, search]);


  return (
    <React.Fragment>
      <Header searchHandler={searchHandler} modalOpen={modalOpen} />
      <Movies
        selectMovieHandler={selectMovieHandler}
        filterMovies={filterMovies}
        edit={edit}
        add={add}
        deleteHandler={deleteHandler}
        data={data}
        sortMovies={sortMovies}
      />
    </React.Fragment>
  );
}

export default Main;
