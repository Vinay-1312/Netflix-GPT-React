import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice(

    {
        name:"movies",
        initialState: {
            nowPlayingMovies:null,
            trailerVideo:null,
            popularMovies:null,
            upcomingMovies:null,
            topRated:null,
            movieTrailer:null,
            trailerId:null,

          
        },
        reducers:
        {
            addNPMovie:(state,action)=>
            {
               state.nowPlayingMovies = action.payload
            },

            removeNPMovie:(state,action)=>
            {
                return null;
            },
            addTrailerVideo:(state,action)=>
            {
                state.trailerVideo = action.payload;
            },
            addPopularMovies:(state,action)=>
            {
                state.popularMovies = action.payload;
            },
            addUpcomingMovies:(state,action)=>
            {
                state.upcomingMovies = action.payload;
            },
            addTopRated:(state,action)=>
            {
                state.topRated = action.payload;
            },
            addMovieTrailer:(state,action)=>
            {
                state.movieTrailer = action.payload;
            },
            addTrailerId:(state,action)=>
            {
                state.trailerId = action.payload;
            }

        }
    }
)

export const {addNPMovie,removeNPMovie,addTrailerVideo,addPopularMovies,addUpcomingMovies,addTopRated,addMovieTrailer,addTrailerId} = movieSlice.actions;

export default movieSlice.reducer;