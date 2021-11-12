import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies,getAllShows } from '../../features/Movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard';
import Slider from "react-slick";
import './MovieListion.scss';
import {settings} from '../../common/settings';

export default function MovieListing() {
    const movies=useSelector(getAllMovies)
    const shows=useSelector(getAllShows)
    console.log(movies)

    let renderMovies="";
    let renderShows="";
    renderMovies=movies.Response==="True"?(
        movies.Search.map((movie,index)=>{
           return <MovieCard key={index} data={movie} />
        })
    ):(<div className="movies-error"></div>)
    renderShows=shows.Response==="True"?(
        shows.Search.map((shows,index)=>{
           return <MovieCard key={index} data={shows} />
        })
    ):(<div className="movies-error"></div>)
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                <Slider {...settings} >
                {renderMovies}
                </Slider>
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="show-container">
                <Slider {...settings} >
                        {renderShows}
                </Slider>
                </div>
            </div>
        </div>
    )
}
