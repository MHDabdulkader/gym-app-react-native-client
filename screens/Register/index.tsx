import GlassyBtn from "@/components/glassyBtn";
import CustomLoading from "@/components/ui/CustomLoading";
import { AppDispatch } from "@/redux/Store/store";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { useState } from "react";

import { postRegisterThunk } from "@/redux/slices/register/registerThunk";
// import { scale} from "react-native-size-matters"
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

export default function Register_Screen() {
    //** form states */
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const { colors } = useTheme();
    const router = useRouter();

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] =
        useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();

    // ** screen states */
    const [loading, setLoading] = useState<boolean>(false);

    //  ** handlers  //
    const handleSubmit = async () => {
        try {
            const requestData = { username, password };
            setLoading(true);
            if (!password || !confirmPassword || password.length < 6) {
                setLoading(false);
                Alert.alert("Password must be at least 6 length")
                return;
            }
            else if (password !== confirmPassword) {
                setLoading(false);
                Alert.alert("Password and confirm password do not match!");
                return;
            }
            else if (!username || username.length < 4) {
                setLoading(false);
                Alert.alert("Username must be at least 4 characters");
                return;
            }



            // ** now submit and api calls
            const response = await dispatch(postRegisterThunk(requestData));
            console.log("Response after thunk calls, register screen ", response);
            setLoading(false);

            if (postRegisterThunk.fulfilled.match(response)) {
                router.push("/(setup/setup");
            } else if (postRegisterThunk.rejected.match(response)) {
                Alert.alert("Register failed : " , response.payload ?? "Something went wrong", [
                    {
                        text: "Try again!",
                        onPress: () => router.reload(),
                    },
                ]);
            }




            //router.push("/(setup)/setup");
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
                                router.push("/(setup)/setup");
                            }}
                        >
                            <View>
                                <AntDesign name="caretleft" size={18} color="#E2F163" />
                            </View>
                        </TouchableOpacity>

                        <Text style={styles.titleAbsolute}>Create Account</Text>
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
                                Let's Start!
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
                            secureTextEntry={!showPassword}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            right={
                                <TextInput.Icon
                                    color="red"
                                    icon={showPassword ? "eye" : "eye-off"}
                                    onPress={() => setShowPassword(!showPassword)}
                                />
                            }
                            style={styles.inputText}
                        />

                        <Text style={styles.inputLabel}>Confirm Password</Text>
                        <TextInput
                            //label="password"
                            textColor="black"
                            secureTextEntry={!showConfirmPassword}
                            value={confirmPassword}
                            onChangeText={(text) => setConfirmPassword(text)}
                            right={
                                <TextInput.Icon
                                    color="red"
                                    icon={showConfirmPassword ? "eye" : "eye-off"}
                                    onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                                />
                            }
                            style={styles.inputText}
                        />
                    </View>
                    <View className="mt-10">
                        <Text className="text-center color-white">
                            By continuing, you agree to
                        </Text>
                        <Text className="text-white text-center">
                            <Text className="color-[#E2F163]">Terms of Use</Text> and
                            <Text className="color-[#E2F163]">Privacy Policy</Text>.
                        </Text>
                    </View>
                    {/* submit bnt */}
                    <View>
                        <GlassyBtn
                            text="Sign Up"
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
                            or sign up with
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
                        <Text className="color-white text-lg ">
                            Already have an account?
                        </Text>
                        <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
                            <Text className="color-[#E2F163] text-lg">Log In</Text>
                        </TouchableOpacity>
                    </View>

                    {loading && (
                        <CustomLoading transparent={true} blockSize={60} overlay />
                    )}
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
        paddingVertical: 10,
    },
    inputContainer: {
        // marginTop: 10,
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
