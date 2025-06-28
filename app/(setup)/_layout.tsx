import { Stack } from "expo-router";

export default function SetupLayout(){
    return(
        <Stack>
            <Stack.Screen name="setup" options={{headerShown: false}} />
        </Stack>
    )
}