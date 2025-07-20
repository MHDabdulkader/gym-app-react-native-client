import GlassyBtn from "@/components/glassyBtn";
import ScreenHeader from "@/components/ScreenHeader";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Weight_screen(){

    const router = useRouter();
    return(
        <SafeAreaView style={{backgroundColor:"#232323", flex: 1}}>
            <ScreenHeader btnText="Back" toBack="/(setup)/setAge"/>
            <View style={{alignItems:"center", marginTop: 5}}>
                <View>
                     <Text style={{fontSize: 30, color:"#ffffff", fontWeight:"bold"}}>
                    What Is Your Weight?
                </Text>
                </View>
                <View style={{paddingHorizontal: 20, paddingVertical: 30, marginTop: 20}}>
                    <Text style={{textAlign:"center", color: "#ffffff", fontSize: 18}}>
                        We’re here to support your goals.
Sharing your gender helps us tailor
workouts and progress tracking to you.
                    </Text>
                </View>
                {/* // TODO: animation */}
                <View>
                    <Text style={{color:"#fff"}}>Todo: Animations</Text>
                </View>
                <GlassyBtn text="Continue" onPress={()=>router.push("/(setup)/setHeight")}
                    btnStyle={{paddingVertical:10}}
                    containerStyle={{marginTop: 40}}    
                />
            </View>
        </SafeAreaView>
    )
}