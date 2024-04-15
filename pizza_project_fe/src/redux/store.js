import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import alertSlice from "./slices/alertSlice";
import orderSlice from "./slices/orderSlice";
import cartSlice from "./slices/cartSlice";
import methodReceiveSlice from "./slices/methodReceiveSlice";
import comboDetailSlice from "./slices/comboDetailSlice";
export default configureStore({
    reducer:{
        login: loginReducer,
        alert: alertSlice,
        order: orderSlice,
        cart: cartSlice,
        methodReceive: methodReceiveSlice,
        comboDetail: comboDetailSlice,
    }
})