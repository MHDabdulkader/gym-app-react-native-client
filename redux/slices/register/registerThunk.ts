import { postRegister } from "@/screens/Register/api";
import { RegisterRequestType, RegisterResponseType } from "@/types/userRegisterType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuth } from "../auth/authSlice";




export const postRegisterThunk = createAsyncThunk<RegisterResponseType, RegisterRequestType, { rejectValue: string }>("/auth/register", async (requestData, thunkAPI) => {
    try {
        console.log("Request data: ", requestData);
        const users = await postRegister(requestData);
        console.log("User response from register ", users);
        thunkAPI.dispatch(setAuth({
            id: users.data.id,
            username: users.data.username,
            token: users.data.token
        })
        );
        return users.data;
    }
    catch(error:any){
        console.log("Thunk error catch: ", error.message);
        console.log("Thunk full error: ", error.response);
        console.log("Axios error response: ", error.response?.data)
        console.log("Axios request: ", error.request);
        
        return thunkAPI.rejectWithValue(error.message)
    }
})