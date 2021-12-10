import React, { useEffect, useState } from 'react'
import MovieDetailsStyled from '../styles/MovieDetails.styled'
import Logo from './Logo'
import { SearchOutlined, } from '@ant-design/icons';
import fakeImg from '../assets/img/card.png';
import { useSelector } from 'react-redux';
import { selectMovies } from '../store/movies/moviesSlice';
import { useHistory, useLocation } from 'react-router-dom';
import { getMovie } from '../store/thunks';
import axios from '../utils/axios';

function MovieDetails(props: any) {
    const location: any = useLocation();
    const history: any = useHistory();
    const [data, setData] = useState({})
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    const id = location.pathname.split("/")[2];
    useEffect(() => {
            axios.get(`/movies/${id}`).then(res => {
                console.log(res.data);
                setData(res.data);
            }
        )
    }, [id])
    const { title, vote_average, genres, overview, runtime, poster_path }: any = data;
    console.log(
        data
    )
    return (
        <MovieDetailsStyled>
            <div className="header">
                <Logo />
                <SearchOutlined onClick={() => history.push("/")} style={{ fontSize: "20px", color: "#F65261" }} />
            </div>
            <div className="body">
                <div className="img">
                    <img src={ poster_path ? poster_path : fakeImg} alt="details" />
                </div>
                <div className="textBody">
                    <div className="infoBody">
                        <div className="row">
                            <h3> {title} </h3>
                            <p className="rate">
                                {vote_average}
                            </p>
                        </div>
                    </div>
                    <div className="genres">
                        {genres?.map((item: any, index: number) => {
                            return (
                                <span key={index}> {item} </span>
                            )   
                        })}
                    </div>
                    <div className="row">
                        <p className="runtime">
                            {runtime}
                        </p>
                    </div>
                    <div className="description">
                        {overview}
                    </div>
                </div>
            </div>
        </MovieDetailsStyled>
    )
}

export default MovieDetails
