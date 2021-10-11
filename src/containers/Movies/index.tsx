import { Button } from 'antd';
import ButtonGroup from 'antd/lib/button/button-group';
import React from 'react'
import MoviesLabel from '../../components/MoviesLabel';
import Tabs from '../../components/Tabs';
import { IMovie, IMoviesCards } from '../../components/types';
import {StyledMovies} from '../../styles/Movies.styled';
import MovieCards from './MovieCards';

function Movies({ data, edit, add, deleteHandler, }:IMoviesCards) {
    

    return (
        <StyledMovies>
            <Tabs />
            <MoviesLabel number={data.length}/>
            <MovieCards edit={edit} add={add} deleteHandler={deleteHandler} data={data} />
            
        </StyledMovies>
    )
}

export default Movies
