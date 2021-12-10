import MoviesLabel from '../../components/MoviesLabel';
import Tabs from '../../components/Tabs';
import { StyledMovies } from '../../styles/Movies.styled';
import MovieCards, { IMovieCards } from './MovieCards';

function Movies({ data, edit, add, deleteHandler, filterMovies, selectMovieHandler, sortMovies }: IMovieCards) {


    return (
        <StyledMovies>
            <Tabs filterMovies={filterMovies} sortMovies={sortMovies}/>
            <MoviesLabel number={data.length} />
            <MovieCards selectMovieHandler={selectMovieHandler} edit={edit} add={add} deleteHandler={deleteHandler} data={data} />
        </StyledMovies>
    )
}

export default Movies
