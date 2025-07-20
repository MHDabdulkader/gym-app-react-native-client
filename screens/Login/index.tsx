import GlassyBtn from "@/components/glassyBtn";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";
// import { scale} from "react-native-size-matters"
import CustomLoading from "@/components/ui/CustomLoading";
import type { AppDispatch } from "@/redux/Store/store";
import { postLoginTunk } from "@/redux/slices/login/loginTunk";
import {
    Alert,
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
import { useDispatch } from "react-redux";
export default function Login_Screen() {
  // ** states
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // ** redux
  // const Login = useSelector((state: RootState) => state.Login);
  const dispatch = useDispatch<AppDispatch>();
  const [loading, setLoading] = useState<boolean>(false);
  const { colors } = useTheme();
  const router = useRouter();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleSubmit = async () => {
    try {
      const requestData = { username, password };
      setLoading(true);
      const response = await dispatch(postLoginTunk(requestData));
      if (postLoginTunk.fulfilled.match(response)) {
        setLoading(false);
        router.push("/(setup)/setup");
      } else if (postLoginTunk.rejected.match(response)) {
        setLoading(false);
        Alert.alert("Please Log in again", "", [
          { text: "Ok", onPress: () => router.reload() },
        ]);
      }
    } catch (error) {
      console.log("Error: login Screen ", error);
    }
  };


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
                router.push("/(onboarding)");
              }}
            >
              <View>
                <AntDesign name="caretleft" size={18} color="#E2F163" />
              </View>
            </TouchableOpacity>

            <Text style={styles.titleAbsolute}>Log In</Text>
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
                Welcome
              </Text>
            </View>
            <View style={{ width: "85%" }}>
              <Text
                style={{ color: "white", fontSize: 14, textAlign: "center" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Text>
            </View>
          </View>
          {/* Input section */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Username or Email</Text>

            <TextInput
              // label="username"
              value={username}
              onChangeText={(text) => setUsername(text)}
              style={styles.inputText}
              textColor="black"
            />
            <Text style={styles.inputLabel}>Password</Text>
            <TextInput
              //label="password"
              textColor="black"
              secureTextEntry={showPassword}
              value={password}
              onChangeText={(text) => setPassword(text)}
              right={
                <TextInput.Icon
                  color="red"
                  icon={showPassword ? "eye-off" : "eye"}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              style={styles.inputText}
            />
            <TouchableOpacity
              onPress={() => router.push("/(auth)/forgetpassword")}
            >
              <Text style={[styles.inputLabel, { textAlign: "right" }]}>
                Forget Password?
              </Text>
            </TouchableOpacity>
          </View>
          {/* submit bnt */}
          <View>
            <GlassyBtn
              text="Log in"
              onPress={handleSubmit} // router.push("/(setup)/setup")
              tint="prominent"
              intensity={80}
              containerStyle={{ marginTop: 30 }}
              btnStyle={{ paddingVertical: 15, paddingHorizontal: 90 }}
              textStyle={{ fontSize: 20, fontWeight: "bold" }}
            />
          </View>
          {/* sign in with other media */}
          <View className="mt-6">
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: 300,
                textAlign: "center",
              }}
            >
              or log in with
            </Text>
            <View className="flex-row gap-8 mt-6">
              <View
                style={{
                  backgroundColor: "white",
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  borderRadius: "40%",
                }}
              >
                <AntDesign name="google" size={24} color="#896CFE" />
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  borderRadius: "40%",
                }}
              >
                <FontAwesome5 name="facebook" size={24} color="#896CFE" />
              </View>
              <View
                style={{
                  backgroundColor: "white",
                  paddingVertical: 10,
                  paddingHorizontal: 10,
                  borderRadius: "40%",
                }}
              >
                <Ionicons name="finger-print" size={24} color="#896CFE" />
              </View>
            </View>
          </View>

          {/* sign Up btn */}
          <View className="flex-row mt-16 gap-3">
            <Text className="color-white text-lg ">Don’t have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
              <Text className="color-[#E2F163] text-lg">Sign Up</Text>
            </TouchableOpacity>
          </View>

          { 
             loading && <CustomLoading transparent={true} blockSize={60} overlay />
  
          }
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
    marginTop: 20,
    backgroundColor: "#B3A0FF",
    width: "100%",
    height: "30%",
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
