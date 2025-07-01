import { configureStore } from "@reduxjs/toolkit";
import LoginSliceReducer from "../slices/login/loginSlice";
const Store = configureStore({
    reducer:{
        Login: LoginSliceReducer
    }
})

export default Store;
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
