import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Height_screen(){
    return(
        <SafeAreaProvider>
            <View>
                <Text>
                    Set Height
                </Text>
            </View>
        </SafeAreaProvider>
    )
}