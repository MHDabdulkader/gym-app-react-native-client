import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { PaperProvider, ThemeProvider } from "react-native-paper";

import { DarkTheme } from "@/theme/DarkTheme";
import { LightTheme } from "@/theme/LightTheme";
import { useEffect, useState } from "react";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [navigateTheme, setNavigateTheme] = 
        useState(colorScheme === "dark" ? DarkTheme : LightTheme);
        //
  // const [loaded] = useFonts({
  //   // SpaceMono: require("@assets/fonts/SpaceMono-Regular.ttf"),
  //   "Outfit-Thin": require("../assets/fonts/Outfit-Thin.ttf"),
  //   "Outfit-Light": require("../assets/fonts/Outfit-Light.ttf"),
  //   "Outfit-Regular": require("../assets/fonts/Outfit-Regular.ttf"),
  //   "Outfit-Medium": require("../assets/fonts/Outfit-Medium.ttf"),
  //   "Outfit-SemiBold": require("../assets/fonts/Outfit-SemiBold.ttf"),
  //   "Outfit-Bold": require("../assets/fonts/Outfit-Bold.ttf"),
  //   "LeagueSpartan-Bold": require("./assets/fonts/LeagueSpartan-Bold.ttf"),
  //   "LeagueSpartan-SemiBold": require("./assets/fonts/LeagueSpartan-SemiBold.ttf"),
  //   "LeagueSpartan-Medium": require("./assets/fonts/LeagueSpartan-Medium.ttf"),
  //   "LeagueSpartan-Regular": require("./assets/fonts/LeagueSpartan-Regular.ttf"),
  // });

  // if (!loaded) {
  //   // Async font loading only occurs in development.
  //   return null;
  // }
  useEffect(()=>{
   // console.log(navigateTheme);
    setNavigateTheme(DarkTheme);

  },[]);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={navigateTheme}>
        <ThemeProvider theme={navigateTheme}>
          <Stack initialRouteName="(onboarding)">
            
            <Stack.Screen name="(auth)"  />
            <Stack.Screen name="(onboarding)"  options={{headerShown:false}}/>
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style={colorScheme === "dark" ? "dark" : "light"} />
        </ThemeProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
