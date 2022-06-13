import { configureStore } from "@reduxjs/toolkit";
import signupSlice from './features/signupSlice'
import loginSlice from "./features/loginSlice";
import itemSlice from './features/itemSlice'
import nameSlice from "./features/nameSlice";
import todoSlice from "./features/todoSlice";


export const store = configureStore({
    reducer:{
        app:signupSlice,
        applogin:loginSlice,
        appitem:itemSlice,
        appname:nameSlice,
        apptodo:todoSlice,
    },
})