
export type RegistStateType ={
    users : RegisterResponseType | null
    isLoading: boolean
    isError: boolean
    error : string | null
 }

export type RegisterRequestType= {
    username: string;
    password: string;
}
export type RegisterResponseType ={
    id: string,
    username:string,
    token:string
}