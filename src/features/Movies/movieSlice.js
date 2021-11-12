import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/apis/MovieApi";
import { APIKEY } from "../../common/apis/MovieApiKey";



export const fetchAsynctoMovies=createAsyncThunk('movies/fetchAsyncMovies',async (term)=>{
    // const movieText = "Harry";
 const response = await MovieApi.get(
    `?apikey=${APIKEY}&s=${term}&type=movie`
  )
  console.log("response from api",response)
  return response.data;
})


export const fetchAsynctoShows=createAsyncThunk('movies/fetchAsyncShows',async (term)=>{
    // const movieText = "Friends";
 const response = await MovieApi.get(
    `?apikey=${APIKEY}&s=${term}&type=series`
  )
  console.log("response from api",response)
  return response.data;
})



export const fetchAsyncMoviesOrShowDetails=createAsyncThunk('movies/fetchAsyncMoviesOrShowDetails',async (id)=>{
 
 const response = await MovieApi.get(
    `?apikey=${APIKEY}&i=${id}&Plot=full`
  )
  console.log("response from api",response)
  return response.data;
})

const initialState={
    movies:[],
    shows:[],
    SelectedMovieOrShows:{}
}

const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        removeSelectedMovieOrShow: (state) => {
            state.SelectedMovieOrShows = {};
          },
    },
    extraReducers:{
        [fetchAsynctoMovies.pending]:()=>{
            console.log("panding")
        },
        [fetchAsynctoMovies.fulfilled]:(state,{payload})=>{
            console.log("fetch successfully");
            return {...state,movies:payload}
        },
        [fetchAsynctoMovies.rejected]:()=>{
            console.log("rejected")
        },
        [fetchAsynctoShows.fulfilled]:(state,{payload})=>{
            console.log("fetch successfully");
            return {...state,shows:payload}
        },
        [fetchAsyncMoviesOrShowDetails.fulfilled]:(state,{payload})=>{
            console.log("fetch successfully");
            return {...state,SelectedMovieOrShows:payload}
        },
    }
})

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies=(state)=>state.movies.movies
export const getSelectedMovieOrShow=(state)=>state.movies.SelectedMovieOrShows
export const getAllShows=(state)=>state.movies.shows
export default movieSlice.reducer;