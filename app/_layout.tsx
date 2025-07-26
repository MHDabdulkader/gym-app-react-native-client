import CustomLoading from "@/components/ui/CustomLoading";
import "@/global.css";
import Store from "@/redux/Store/store";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { Provider as ReduxProvider } from "react-redux";

export default function RootLayout() {
  //const colorScheme = useColorScheme();
 // const [navigateTheme, setNavigateTheme] = useState(
   // colorScheme === "dark" ? DarkTheme : LightTheme
  //);
  const [showLoading, setShowLoader] = useState(true);
  //
  const [loaded] = useFonts({
    // SpaceMono: require("@assets/fonts/SpaceMono-Regular.ttf"),
    "Poppins-Bold": require("@/assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("@/assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Medium": require("@/assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("@/assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Light": require("@/assets/fonts/Poppins-Light.ttf"),
    "Poppins-Thin": require("@/assets/fonts/Poppins-Thin.ttf"),
    "LeagueSpartan-Bold": require("@/assets/fonts/LeagueSpartan-Bold.ttf"),
    "LeagueSpartan-SemiBold": require("@/assets/fonts/LeagueSpartan-SemiBold.ttf"),
    "LeagueSpartan-Medium": require("@/assets/fonts/LeagueSpartan-Medium.ttf"),
    "LeagueSpartan-Regular": require("@/assets/fonts/LeagueSpartan-Regular.ttf"),
    "LeagueSpartan-Light": require("@/assets/fonts/LeagueSpartan-Light.ttf"),
    "LeagueSpartan-Thin": require("@/assets/fonts/LeagueSpartan-Thin.ttf"),
  });


  useEffect(() => {
    // console.log(navigateTheme);
    //setNavigateTheme(DarkTheme);
    // Always show loader for at least 1.5 seconds
    const minLoaderTime = setTimeout(() => {
      setShowLoader(false);
    }, 2000);

    return () => clearTimeout(minLoaderTime);
  }, []);

  if (!loaded || showLoading) {
    return (
      <CustomLoading />
    )
  }
  return (
    <ReduxProvider store={Store}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        
            <Stack initialRouteName="(onboarding)">
              {/* <Stack.Screen name="index" /> */}
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
              <Stack.Screen
                name="(onboarding)"
                options={{ headerShown: false }}
              />
              <Stack.Screen name="(setup)" options={{ headerShown: false }} />
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="light" />
          
      </GestureHandlerRootView>
    </ReduxProvider>
  );
}

// <ReduxProvider store={Store}>
//       <GestureHandlerRootView style={{ flex: 1 }}>
//         <PaperProvider theme={navigateTheme}>
//           <ThemeProvider theme={navigateTheme}>
//             <Stack initialRouteName="(onboarding)">
//               {/* <Stack.Screen name="index" /> */}
//               <Stack.Screen name="(auth)" options={{ headerShown: false }} />
//               <Stack.Screen
//                 name="(onboarding)"
//                 options={{ headerShown: false }}
//               />
//               <Stack.Screen name="(setup)" options={{ headerShown: false }} />
//               <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//               <Stack.Screen name="+not-found" />
//             </Stack>
//             <StatusBar style={colorScheme === "dark" ? "dark" : "light"} />
//           </ThemeProvider>
//         </PaperProvider>
//       </GestureHandlerRootView>
//     </ReduxProvider>
