import { Stack } from "expo-router";

export default function Auth_Layout(){
    return(
        <Stack>
            <Stack.Screen name="login" options={{headerShown: false}}/>
            <Stack.Screen name="register" options={{headerShown: false}}/>
            <Stack.Screen name="forgetpassword" options={{headerShown: false}}/>
              <Stack.Screen name="setpassword" options={{headerShown: false}}/>
        </Stack>
    )
}