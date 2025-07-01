import { Stack } from "expo-router";

export default function OnBoarding_Layout(){
    return(
        <Stack initialRouteName="index" screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{headerShown: false}}/>
        </Stack>
    )
}