import { postLogin } from "@/screens/Login/api";
import { loginRequestType, userLoginResponseType } from "@/types/userLoginType";
import { createAsyncThunk } from "@reduxjs/toolkit";


//* returnType, argumentType.
export const postLoginTunk = createAsyncThunk<userLoginResponseType, loginRequestType, { rejectValue:string }>(
  "/users/login",
  async (requestData, thunkAPI) => {
    try {
        const users = await postLogin(requestData);
        return users.data;
    } catch (error:any) {
        return thunkAPI.rejectWithValue("Invalid credentials");
    }
    
  }
);
