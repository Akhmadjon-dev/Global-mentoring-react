import Header  from './Header/index'
import React from 'react'
import Movies from './Movies'
import { useAppDispatch } from '../store/hooks'
import { SearchPopularMovies } from '../store/thunks'
import { useSelector } from 'react-redux'
import { selectMovies } from '../store/movies/moviesSlice'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Main({
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
    const location: any = useLocation();
    useEffect(() => {
        dispatch(SearchPopularMovies())
    }, [])
    
    console.log('mainaiiiiinnn', location)

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

export default Main
