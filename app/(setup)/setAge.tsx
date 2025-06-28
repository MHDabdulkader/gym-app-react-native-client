import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Age_screen(){
    return(
        <SafeAreaProvider>
            <View>
                <Text>
                    Set age
                </Text>
            </View>
        </SafeAreaProvider>
    )
}