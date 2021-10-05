import React from 'react'
import CardStyled from '../styles/Card.styled'
import cardImage from '../assets/img/card.png';
import { IMovie } from './types';
function Card({movie, deleteHandler, edit }:{movie: IMovie,  deleteHandler: any, edit:any}) {
    return (
        <CardStyled>
            <div className="card__img">
                <img src={cardImage} alt=""/>
                <div className="card__btns">
                    <button onClick={()=> edit(movie.id)} className="card__btn">
                        Edit
                    </button>
                    <button onClick={() => deleteHandler(movie.id)} className="card__btn">
                        Delete
                    </button>
                </div>
            </div>
            <div className="card__info">
                <div className="card__row">
                    <h2 className="card__title">
                        {movie.title}
                    </h2>
                    <p className="card__release-date">
                        {movie.releaseDate}
                    </p>
                </div>
                <div className="card__tags">
                   {movie.genre}
                </div>
            </div>
        </CardStyled>
    )
}

export default Card
