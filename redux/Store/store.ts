import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../slices/auth/authSlice";
import LoginSliceReducer from "../slices/login/loginSlice";
import RegisterReducer from "../slices/register/registerSlice";
const Store = configureStore({
    reducer:{
        Login: LoginSliceReducer,
        Auth: AuthReducer,
        Register: RegisterReducer
    }
})

export default Store;
export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
