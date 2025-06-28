import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function SetupScreen(){
    return(
        <SafeAreaProvider>
            <View className="flex-1">
                <Text>
                    Setup screen
                </Text>
            </View>
        </SafeAreaProvider>
    )
}