import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const movieSlice = createSlice(

    {
        name:"movies",
        initialState: {
            nowPlayingMovies:null,
            trailerVideo:null
          
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
            }

        }
    }
)

export const {addNPMovie,removeNPMovie,addTrailerVideo} = movieSlice.actions;

export default movieSlice.reducer;