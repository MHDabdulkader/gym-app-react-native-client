import GlassyBtn from "@/components/glassyBtn";
import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function Setup_screen() {
    const router = useRouter();
  return (
    <ImageBackground
      style={styles.background}
      source={require("@assets/images/onBoarding 3.jpg")}
    >
      <View className="absolute bottom-0 w-full pb-24 bg-[#232323]">
        <View>
          <Text  style={{paddingHorizontal: 10, paddingVertical: 30,
            fontSize: 30, color: "#E2F163", textAlign: "center"
          }}>Consistency Is the Key To progress. Don't Give Up!</Text>
        </View>
        <View
            style={{backgroundColor: "#896CFE", paddingHorizontal: 10, paddingVertical: 40}}
        >
          <Text style={{fontSize: 14, textAlign: "center"}}>
            Every transformation begins with a decision. 
          </Text>
          <Text style={{fontSize: 14, textAlign: "center"}}>Set your fitness
            foundation today — your strongest self is waiting.</Text>
        </View>

        <GlassyBtn text="Next" onPress={()=>router.push("/(setup)/setGender")}
            tint="prominent"
            intensity={70}
            containerStyle={{marginTop: 30, borderRadius: 30}}
            btnStyle={{paddingHorizontal: 80, paddingVertical: 10}}
        />

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    position: "relative"
  },
});
