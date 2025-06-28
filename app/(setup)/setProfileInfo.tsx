import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Profile_Info_screen(){
    return(
        <SafeAreaProvider>
            <View>
                <Text>
                    Set Profile Info
                </Text>
            </View>
        </SafeAreaProvider>
    )
}