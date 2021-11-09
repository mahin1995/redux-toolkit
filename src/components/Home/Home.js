import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import MovieApi from "../../common/apis/MovieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";
import {useDispatch} from 'react-redux';
import {addMovies} from '../../features/Movies/movieSlice';
function Home() {
    const movieText = "Harry";
    const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await MovieApi.get(
        `?apikey=${APIKEY}&s=${movieText}&type=movie`
      ).catch((err) => {
          console.log(err)
      });
      dispatch(addMovies(response.data))
      console.log("response from api",response)
    };
    fetchMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
