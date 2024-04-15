import { createSlice } from "@reduxjs/toolkit";
export const alertDeleteCartSlice = createSlice({
    name : "alertDeleteCartSlice",
    initialState:{
        hiddenDelete: true,
        hiddenChange: true,
        type: "",
        index: 0,
        itemName: "",
        quantity: 0,
    },
    reducers:{
        deleteCart:(state,actions)=>{
            state.hiddenDelete = actions.payload.hiddenDelete
            state.type = actions.payload.type
            state.index = actions.payload.index
            state.itemName = actions.payload.itemName
        },
        updateQuantity:(state,actions)=>{
            state.hiddenChange = actions.payload.hiddenChange
            state.type = actions.payload.type
            state.index = actions.payload.index
            state.itemName = actions.payload.itemName
            state.quantity = actions.payload.quantity
        }
    }
})

export const {deleteCart,updateQuantity} = alertDeleteCartSlice.actions;
export default alertDeleteCartSlice.reducer;