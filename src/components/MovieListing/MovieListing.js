import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/Movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard';
import './MovieListion.scss';


export default function MovieListing() {
    const movies=useSelector(getAllMovies)
    console.log(movies)
    let renderMovies="";
    renderMovies=movies.Response==="True"?(
        movies.Search.map((movie,index)=>{
           return <MovieCard key={index} data={movie} />
        })
    ):(<div className="movies-error"></div>)
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                        {renderMovies}
                </div>
            </div>
        </div>
    )
}
