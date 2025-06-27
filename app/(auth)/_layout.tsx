import { Stack } from "expo-router";

export default function Auth_Layout(){
    return(
        <Stack>
            <Stack.Screen name="login"/>
            <Stack.Screen name="register" />
        </Stack>
    )
}