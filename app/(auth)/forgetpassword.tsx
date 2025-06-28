
import GlassyBtn from "@/components/glassyBtn";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { useState } from "react";
// import { scale} from "react-native-size-matters"
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import { TextInput, useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";



export default function ForgetPassword_Screen() {
  const [username, setUsername] = useState<string>("");
  
  const { colors } = useTheme();
  const router = useRouter();
 

  
  const handleSubmit = ()=>{
    try {
      router.push("/(auth)/setpassword")
    } catch (error) {
      console.log("Error: login Screen ", error)
    }
  }
  return (
    <SafeAreaView style={styles.backgroundContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1, alignItems: "center" }}
        >
          {/* navigation */}
          <View style={styles.navigationContainer}>
            <TouchableOpacity
              style={styles.backBtn}
              onPress={() => {
                console.log("Prev btn prees");
                router.push("/(onboarding)/onboarding");
              }}
            >
              <View>
                <AntDesign name="caretleft" size={18} color="#E2F163" />
              </View>
            </TouchableOpacity>

            <Text style={styles.titleAbsolute}>Forgotten Password</Text>
          </View>
          {/* Welcome section */}
          <View style={styles.welcomeContainer}>
            <View style={{ paddingVertical: 30 }}>
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Forget Password?
              </Text>
            </View>
            <View style={{ width: "85%" }}>
              <Text
                style={{ color: "white", fontSize: 14, textAlign: "center" }}
              >
                Enter your email address and we'll send you a link to reset your password.
              </Text>
            </View>
          </View>
          {/* Input section */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Username or Email</Text>

            <TextInput 
             // label="username"
              value={username}
              onChangeText={text => setUsername(text)}
              style={styles.inputText} 
              textColor="black" />
           
           
          </View>
          {/* submit bnt */}
          <View>
            <GlassyBtn
              text="Continue"
              onPress={handleSubmit} // router.push("/(setup)/setup")
              tint="prominent"
              intensity={80}
              containerStyle={{ marginTop: 30 }}
              btnStyle={{ paddingVertical: 15, paddingHorizontal: 90 }}
              textStyle={{ fontSize: 20, fontWeight: "bold" }}
            />
          </View>
         

        
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    // justifyContent: "center",

    backgroundColor: "#232323",
    // color:""
  },
  navigationContainer: {
    flexDirection: "row",
    //justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    position: "relative",
    // backgroundColor:"red"
  },
  backBtn: {
    zIndex: 2,
  },
  titleAbsolute: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    left: 20,
    right: 0,
    fontWeight: 600,
    color: "#E2F163",
    fontSize: 24,
    pointerEvents: "none",
    // paddingHorizontal: 10,
    // backgroundColor:"blue"
  },
  welcomeContainer: {
    paddingVertical: 30,
  },
  inputContainer: {
    marginTop: 50,
    // justifyContent:"center",
    backgroundColor: "#B3A0FF",
    width: "100%",
    // height: "30%",
    paddingHorizontal: 40,
    paddingVertical: 30,
    gap: 10,
  },
  inputLabel: {
    color: "#232323",
    fontSize: 18,
    fontWeight: "bold",
  },
  inputText: {
    backgroundColor: "white",
    color: "#000",
  },
});
