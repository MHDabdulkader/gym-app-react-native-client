import { AuthType } from "@/types/authType"
import { createSlice } from "@reduxjs/toolkit"

const initialState : AuthType ={
    id: null,
    username: null,
    token: null,
}

const AuthSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        setAuth : (state, action) =>{
            state.id = action.payload.id,
            state.username = action.payload.username,
            state.token = action.payload.token
        },
        removeAuth : (state) =>{
           state.id = null,
           state.token = null,
           state.username = null
        }
    }
})

export default AuthSlice.reducer;
export const {setAuth, removeAuth} = AuthSlice.actions;
// ** get auth in store.