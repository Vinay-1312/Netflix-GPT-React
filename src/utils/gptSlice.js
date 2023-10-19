import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const gptSlice = createSlice(

    {
        name:"gpt",
        initialState: {
            showGPt:false
        },
        reducers:
        {
            toggleGPT:(state,action)=>
            {
                state.showGPt = !state.showGPt
            }

        }
    }
)

export const {toggleGPT} = gptSlice.actions;

export default gptSlice.reducer;