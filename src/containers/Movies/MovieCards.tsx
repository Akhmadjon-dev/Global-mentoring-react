import React from 'react'
import Card from '../../components/Card'
import { IMoviesCards } from '../../components/types'

export interface IMovieCards extends IMoviesCards {
    filterMovies: (id: string) => {};
    sortMovies: (id: string) => {};
}

function MovieCards({ data, edit, add, deleteHandler, selectMovieHandler }: IMoviesCards) {
    return (
        <div className="movie__cards">
            {data.map(movie => (
                <Card edit={edit} deleteHandler={deleteHandler} movie={movie} selectMovieHandler={selectMovieHandler} />
            ))}
        </div>
    )
}

export default MovieCards
