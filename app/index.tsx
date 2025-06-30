import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";

export default function Index() {
  const [targetScreen, setTargetScreen] = useState<string | null>(null);

    useEffect(() => {
  const getDevScreen = async () => {
    if (__DEV__) {
      const screen = await AsyncStorage.getItem("dev_screen");
      setTargetScreen(screen ?? "/(onboarding)");
    } else {
      setTargetScreen("/(onboarding)");
    }
  };
  getDevScreen();
}, []);

  return <Redirect href={targetScreen as any} />;
}
