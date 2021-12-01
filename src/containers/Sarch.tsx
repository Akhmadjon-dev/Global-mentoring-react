import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Header  from './Header/index'
import Movies from './Movies'

function Search({
    searchHandler,
    modalOpen,
    selectMovieHandler,
    filterMovies,
    edit,
    add,
    deleteHandler,
    sortMovies,
    data
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
    const location: any = useLocation();
    
    useEffect(() => {
        console.log(location)
    }, [])
    
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
