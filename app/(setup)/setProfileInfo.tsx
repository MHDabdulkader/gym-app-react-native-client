import GlassyBtn from "@/components/glassyBtn";
import ScreenHeader from "@/components/ScreenHeader";
import { getAuthWithToken } from "@/redux/slices/auth/authSelector";
import { setSetupScreen } from "@/redux/Store/mobileAsyncStore";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { Pressable } from "react-native-gesture-handler";
import { Avatar } from "react-native-paper";

import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";

export default function ProfileInfo_screen() {
  // ** router
  const router = useRouter();
  // ** input states
  const [fullname, setFullname] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phonenumber, setPhonenumber] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // ** auth:
  const auth = useSelector(getAuthWithToken);

  // TODO: useEffect to if load user informations 

  // TODO: First did not have image set defualt avator image, otherwise user upload image,

  // ** handle fn
  const handleSubmit = async () => {
    try {
      setLoading(true);
      await setSetupScreen();
      const requestData = [fullname, nickname, email, phonenumber];
      router.push("/(tabs)/home");
    } catch (e) {
      console.log("----> Error: profile info screen! ", e);
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#232323", flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView
            contentContainerStyle={{
              flexGrow: 1,
              padding: 16,
              //justifyContent: "center"
            }}
            keyboardShouldPersistTaps="handled"
          >
            <ScreenHeader btnText="Back" toBack="/(setup)/setActivityLevel" />
            <View style={{ width: "100%", marginTop: 5 }}>
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 30,
                    color: "#ffffff",
                    fontWeight: "bold",
                  }}
                >
                  Fill Your Profile
                </Text>
              </View>
              <View
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 30,
                  marginTop: 20,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#ffffff",
                    fontSize: 18,
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>

              <View
                style={{
                  backgroundColor: "#896CFE",
                  maxHeight: 140,
                  width: "100%",

                  alignItems: "center",
                  paddingVertical: 20,
                  flexDirection: "row",
                  justifyContent: "center",
                }}
              >
                {/* //*  ----------------------- Aavater Image --------------- */}
                {/* // TODO: ask permission for upload personal pictures. hash image, save on imageKit when available backend */}
                <Avatar.Image
                  size={100}
                  source={require("@assets/images/avatar.png")}
                />
                <View
                  style={{
                    justifyContent: "flex-end",
                    marginLeft: -30,
                    height: "100%",
                  }}
                >
                  <Pressable
                    onPress={()=>console.log("Btn press")}
                  >
                    <FontAwesome6 name="pen" size={24} color="black" />
                  </Pressable>

                </View>
              </View>

              <View
                style={{ width: "100%", paddingHorizontal: 50, marginTop: 20 }}
              >
                {/* // * *------------------ Full name ----------------------------*/}
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#896CFE",
                      fontWeight: 600,
                      marginBottom: 5,
                    }}
                  >
                    Full Name
                  </Text>
                  <TextInput
                    value={fullname}
                    onChangeText={setFullname}
                    style={{
                      backgroundColor: "white",
                      borderRadius: 30,
                      paddingHorizontal: 30,
                      fontSize: 24,
                      height: 45,
                      marginBottom: 10,
                    }}
                  />
                </View>
                {/* //* *  ------------------- Nick Name ---------------- */}
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#896CFE",
                      fontWeight: 600,
                      marginBottom: 5,
                    }}
                  >
                    Nick Name
                  </Text>
                  <TextInput
                    value={nickname}
                    onChangeText={setNickname}
                    style={{
                      backgroundColor: "white",
                      borderRadius: 30,
                      paddingHorizontal: 30,
                      fontSize: 24,
                      height: 45,
                      marginBottom: 10,
                    }}
                  />
                </View>

                {/* //* *  ------------------- Email ---------------- */}
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#896CFE",
                      fontWeight: 600,
                      marginBottom: 5,
                    }}
                  >
                    Email
                  </Text>
                  <TextInput
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    style={{
                      backgroundColor: "white",
                      borderRadius: 30,
                      paddingHorizontal: 30,
                      fontSize: 24,
                      height: 45,
                      marginBottom: 10,
                    }}
                  />
                </View>

                {/* //* *  ------------------- Phone number ---------------- */}
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      color: "#896CFE",
                      fontWeight: 600,
                      marginBottom: 5,
                    }}
                  >
                    Phone
                  </Text>
                  <TextInput
                    value={phonenumber}
                    onChangeText={setPhonenumber}
                    keyboardType="number-pad"
                    style={{
                      backgroundColor: "white",
                      borderRadius: 30,
                      paddingHorizontal: 30,
                      fontSize: 24,
                      height: 45,
                      marginBottom: 10,
                    }}
                  />
                </View>
              </View>
              <GlassyBtn
                text="Continue"
                onPress={handleSubmit}
                btnStyle={{ paddingVertical: 10 }}
                containerStyle={{ marginTop: 40 }}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
