import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";

import {useDispatch} from 'react-redux';
import {fetchAsynctoMovies,fetchAsynctoShows} from '../../features/Movies/movieSlice';
function Home() {
    
    const dispatch = useDispatch();
    const movieText="Harry"
    const showText="Friends"
  useEffect(() => {
      dispatch(fetchAsynctoMovies(movieText))
      dispatch(fetchAsynctoShows(showText))
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
