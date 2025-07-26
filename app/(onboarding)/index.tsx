import onboardingScreens from "@/screens/onBoarding/index";
import { SafeAreaView } from "react-native";

export default function OnBoarding_Screen() {
  //const [colors] = useTheme();
  const OnboardingScreens = onboardingScreens;
  return (
    <SafeAreaView>
      <OnboardingScreens />
    </SafeAreaView>
    
  );
}
