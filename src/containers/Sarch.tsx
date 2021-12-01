import Header  from './Header/index'
import React, { useEffect } from 'react'
import Movies from './Movies'
import { useAppDispatch } from '../store/hooks'
import { SearchPopularMovies } from '../store/thunks'
import { useSelector } from 'react-redux'
import { selectMovies } from '../store/movies/moviesSlice'

function Search({
    searchHandler,
    modalOpen,
    selectMovieHandler,
    filterMovies,
    edit,
    add,
    deleteHandler,
    sortMovies
}:{
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
    const dispatch: any = useAppDispatch()
    useEffect(() => {
        dispatch(SearchPopularMovies())
    }, [])

    const data = useSelector(selectMovies);

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
    )
}

export default Search
