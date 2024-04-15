import { createSlice } from "@reduxjs/toolkit";
export const methodReceiveSlice = createSlice({
    name : "methodReceive",
    initialState:{
        hidden: true,
    },
    reducers:{
        changeState:(state,actions)=>{
            state.hidden = actions.payload.hidden
        }
    }
})

export const {changeState} = methodReceiveSlice.actions;
export default methodReceiveSlice.reducer;