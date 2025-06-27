import { BlurView } from "expo-blur";
import { Text, TouchableOpacity } from "react-native";

export default function GlassyBtn({onPress, text}:{onPress: ()=> void, text:string}){
    return(
        <BlurView
            intensity={50} tint="light" style={{
                borderRadius: 24,
                overflow: "hidden",
                alignSelf:"center",
                marginTop: 20,
                // borderColor: 
            }}
        ><TouchableOpacity
            onPress={onPress}
            style={{
                paddingHorizontal: 80,
                paddingVertical: 15
            }}
        ><Text style={{color: "white", fontSize:24, fontWeight: 800}}>{text}</Text></TouchableOpacity></BlurView>
    )
}
