import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Activity_level_screen(){
    return(
        <SafeAreaProvider>
            <View>
                <Text>
                    Set activity level
                </Text>
            </View>
        </SafeAreaProvider>
    )
}