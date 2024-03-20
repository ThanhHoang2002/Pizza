import { createSlice } from "@reduxjs/toolkit";
export const alertSlice = createSlice({
    name : "alert",
    initialState:{
        hidden: true,
        text: "",
    },
    reducers:{
        update:(state,actions)=>{
            state.hidden = actions.payload.hidden
            state.text = actions.payload.text
        }
    }
})

export const {update} = alertSlice.actions;
export default alertSlice.reducer;