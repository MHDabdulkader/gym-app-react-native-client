import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Goal_screen(){
    return(
        <SafeAreaProvider>
            <View>
                <Text>
                    Set goal
                </Text>
            </View>
        </SafeAreaProvider>
    )
}