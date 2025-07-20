import { RootState } from "@/redux/Store/store";
import { createSelector } from "reselect";

const selectAuth = (state: RootState) => state.Auth;

export const getAuthWithToken = createSelector(
    [selectAuth], 
    (auth) => ({
        id: auth.id,
        username: auth.username,
        token: auth.token,
    })
);

export const getAuthWithoutToken = createSelector(
    [selectAuth], 
    (auth)=>({
        id: auth.id,
        username: auth.username,
    })
)
