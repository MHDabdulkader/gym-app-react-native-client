import { Stack } from "expo-router";

export default function OnBoarding_Layout(){
    return(
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="onboarding" options={{headerShown: false}}/>
        </Stack>
    )
}