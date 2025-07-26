import { loginStateType } from "@/types/userLoginType"
import { createSlice } from "@reduxjs/toolkit"
import { postLoginTunk } from "./loginTunk"

const initialState : loginStateType = {
    users: null,
    isLoading: true,
    isError: false,
    error: null 
}

const LoginSlice = createSlice({
    name: "Login",
    initialState,
    reducers:{
       
    },
    extraReducers:(builder) =>{
        builder
            .addCase(postLoginTunk.pending, (state)=>{
                state.isError = false;
                state.isLoading = true;
                state.users = null;
                state.error = "something wrong";
            })
            .addCase(postLoginTunk.fulfilled, (state, action)=>{
                state.users = action.payload;
                state.isLoading= false;
                state.isError = false;
                state.error = null;
            })
            .addCase(postLoginTunk.rejected, (state, action)=>{
                state.users = null;
                state.error = action.payload ?? "something wrong";
                state.isError = true;
                state.isLoading = false;
            })
    }
})

export default LoginSlice.reducer;