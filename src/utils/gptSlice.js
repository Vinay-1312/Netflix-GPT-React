import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const gptSlice = createSlice(

    {
        name:"gpt",
        initialState: {
            showGPt:false,
            movieNames:null,
            moviesResults:null
            
        },
        reducers:
        {
            toggleGPT:(state,action)=>
            {
                state.showGPt = !state.showGPt
            },
            addGptMovieResult:(state,action) =>
            {
  
               const {movieNames,moviesResults} =action.payload
                state.movieNames = movieNames
                state.moviesResults = moviesResults
            },
            


        }
    }
)

export const {toggleGPT,addGptMovieResult} = gptSlice.actions;

export default gptSlice.reducer;