import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function HomeScreen(){
    
  

    return(
        <SafeAreaView style={{flex: 1, justifyContent: "center", backgroundColor:"#232323"}}>
            <Text style={{color: "black"}}>
                Home screen
            </Text>
        </SafeAreaView>
    )
}