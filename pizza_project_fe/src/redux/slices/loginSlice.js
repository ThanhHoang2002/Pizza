import { createSlice } from "@reduxjs/toolkit";
export const loginSlice = createSlice({
    name : "login",
    initialState:{
        hidden: true,
    },
    reducers:{
        update:(state)=>{
            state.hidden = !state.hidden
        }
    }
})

export const {update} = loginSlice.actions;
export default loginSlice.reducer;