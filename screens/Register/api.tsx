
import { API_URL } from "@/constants/api";
import { RegisterRequestType, RegisterResponseType } from "@/types/userRegisterType";
import axios, { AxiosResponse } from "axios";

const isDevMode = false;

export const postRegister = async (requestData: RegisterRequestType) => {
    if (isDevMode) {
        await new Promise(res => setTimeout(res, 3000))
        if (requestData.username === "test" && requestData.password === "1234") {
            return {
                data: {
                    id: "1",
                    username: "test",
                    token: "test-token-1234"
                },
                status: 201,
                statusText: "created",
                headers: {},
                config: {},
            } as AxiosResponse<RegisterResponseType>;
        } else {
            const error = new Error("Invaild credentials");
            (error as any).response = {
                data: "Invaild credentials",
            }

            throw error;
        }
    }
    else {
        try {
            console.log("API_URL ", `${API_URL}` )
            const response = await axios.post(
                `/${API_URL}/auth/register`,
                requestData,{
                    headers:{
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                }
            );
            console.log("Response: ", response)
            return response;
        } catch (error: any) {
            const message =
                typeof error?.response?.data?.message === "string"
                    ? error.response.data.message
                    : typeof error?.response?.data === "string"
                        ? error.response.data
                        : "Something went wrong";

            return Promise.reject(new Error(message));
        }
    }


}