import { postLogin } from "@/screens/Login/api";
import { loginRequestType, userLoginResponseType } from "@/types/userLoginType";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuth } from "../auth/authSlice";

//* returnType, argumentType.
export const postLoginTunk = createAsyncThunk<
  userLoginResponseType,
  loginRequestType,
  { rejectValue: string }
>("/auth/login", async (requestData, thunkAPI) => {
  try {
    const users = await postLogin(requestData);
    thunkAPI.dispatch(
      setAuth({
        id: users.data.id,
        username: users.data.username,
        token: users.data.token,
      })
    );
    return users.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
