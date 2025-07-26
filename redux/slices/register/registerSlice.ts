import { RegistStateType } from "@/types/userRegisterType";
import { createSlice } from "@reduxjs/toolkit";
import { postRegisterThunk } from "./registerThunk";

const initialState : RegistStateType ={
    users: null,
    isLoading: true,
    isError: false,
    error: null
}

const RegisterSlice = createSlice({
    name:"register",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(postRegisterThunk.pending, (state) => {
            state.isError = false;
            state.isLoading = true;
            state.error = null;
            state.users = null;
        })
        .addCase(postRegisterThunk.fulfilled, (state, action)=>{
            state.isError = false;
            state.isLoading = false;
            state.users = action.payload;
            state.error = null;
        })
        .addCase(postRegisterThunk.rejected, (state, action)=>{
            state.error = action.payload ?? "something went wrong";
            state.isError = true,
            state.isLoading = false,
            state.users = null

        })
    }
})
export default RegisterSlice.reducer;