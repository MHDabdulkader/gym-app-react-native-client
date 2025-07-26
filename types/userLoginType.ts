
export type loginStateType = {
    users : userLoginResponseType | null,
    isLoading: boolean,
    isError: boolean,
    error: string | null
}
export type userLoginResponseType = {
    id: string
    username: string;
    token: string;
}

export type loginRequestType={
    username:string,
    password:string
}

