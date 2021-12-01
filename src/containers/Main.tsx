import Header  from './Header/index'
import React from 'react'
import Movies from './Movies'

function Main({
    searchHandler,
    modalOpen,
    selectMovieHandler,
    filterMovies,
    edit,
    add,
    deleteHandler,
    data,
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
