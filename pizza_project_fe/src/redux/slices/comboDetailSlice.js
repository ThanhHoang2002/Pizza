import { createSlice } from "@reduxjs/toolkit";
export const comboDetailSlice = createSlice({
    name : "comboDetail",
    initialState:{
        hidden: true,
        combo:{}
    },
    reducers:{
        show:(state,actions)=>{
            return state=actions.payload
        }
    }
})

export const {show} = comboDetailSlice.actions;
export default comboDetailSlice.reducer;