import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const configSlice = createSlice(

    {
        name:"config",
        initialState: {
           lang:"en",
        },
        reducers:
        {
            changLanguage:(state,action)=>
            {
                state.lang = action.payload
            }

        }
    }
)

export const {changLanguage} = configSlice.actions;

export default configSlice.reducer