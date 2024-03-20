import {configureStore} from "@reduxjs/toolkit";
import loginReducer from "./slices/loginSlice";
import alertSlice from "./slices/alertSlice";
export default configureStore({
    reducer:{
        login: loginReducer,
        alert: alertSlice,
    }
})