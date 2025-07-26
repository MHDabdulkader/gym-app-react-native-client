import { loginRequestType, userLoginResponseType } from "@/types/userLoginType";
import axios from "axios";

// TODO dev mode of :

const isDevMode = true;




const baseURL = process.env.REQBASEURL; // TODO : save on .env file and export from there
export const postLogin= async(requestData:loginRequestType)=>{
    if(isDevMode){
        await new Promise(res => setTimeout(res, 3000))
        if(requestData.username === "test" && requestData.password === "1234"){
            return {
                data: {
                    id: "1",
                    username:"test",
                    token:"test-token-1234"
                },
            }
        }else{
            throw {
                response:{
                    data: {message: "Invaild credentials"}
                }
            }
        }
    }
    const response = await axios.post<userLoginResponseType>(`${baseURL}/login`, requestData);
    return response;
}