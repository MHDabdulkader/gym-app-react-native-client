import GlassyBtn from "@/components/glassyBtn";
import ScreenHeader from "@/components/ScreenHeader";
import Foundation from '@expo/vector-icons/Foundation';
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Gender_screen(){

    const router = useRouter();
    return(
        <SafeAreaView style={{backgroundColor:"#232323", flex: 1}}>
            <ScreenHeader btnText="Back" toBack="/(setup)/setup"/>
            <View style={{alignItems:"center", marginTop: 20}}>
                <View>
                     <Text style={{fontSize: 30, color:"#ffffff", fontWeight:"bold"}}>
                    What’s Your Gender
                </Text>
                </View>
                <View style={{paddingHorizontal: 20, backgroundColor:"#896CFE", paddingVertical: 30, marginTop: 20}}>
                    <Text style={{textAlign:"center", color: "#ffffff", fontSize: 18}}>
                        We’re here to support your goals.
Sharing your gender helps us tailor
workouts and progress tracking to you.
                    </Text>
                </View>

                <View style={{marginTop: 40, alignItems:"center", gap: 20}}>
                    <View style={{borderRadius: "50%", backgroundColor:"#333",width: 163, height: 163, justifyContent:"center", alignItems:"center"}}>
                         <Foundation name="male-symbol" size={96} color="white" />
                    </View>
                   <Text style={{fontSize: 20, color:"white", fontWeight:"bold"}}>Male</Text>
                </View>

                <View style={{marginTop: 40, alignItems:"center", gap: 20}}>
                    <View style={{borderRadius: "50%", backgroundColor:"#E2F163",width: 163, height: 163, justifyContent:"center", alignItems:"center"}}>
                         <Foundation name="female-symbol" size={96} color="#232323" />
                    </View>
                   <Text style={{fontSize: 20, color:"white", fontWeight:"bold"}}>Female</Text>
                </View>
                <GlassyBtn text="Continue" onPress={()=>router.push("/(setup)/setAge")}
                    btnStyle={{paddingVertical:10}}
                    containerStyle={{marginTop: 40}}    
                />
            </View>
        </SafeAreaView>
    )
}