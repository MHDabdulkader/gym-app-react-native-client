
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "react-native-paper";

export default function Login_Screen() {
    const {colors} = useTheme();
    const router = useRouter();
  return (
    <View>
      <Text>
        Log in screen
        <TouchableOpacity
          onPress={()=>router.push("/(onboarding)/onboarding")}
        >
            <View style={{backgroundColor: colors.primary}}>
                 <Text style={{
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                  color: colors.onPrimary}}>Onboarding</Text>
            </View>
         
        </TouchableOpacity>
      </Text>
    </View>
  );
}
