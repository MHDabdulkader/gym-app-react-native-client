import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type props = {
  title?: string;
  toBack?: string;
  btnText?: string;
};

export default function ScreenHeader({ title, toBack = "/", btnText }: props) {
  const router = useRouter();
  return (
    <View style={styles.navigationContainer}>
      <TouchableOpacity
        onPress={() => router.push(toBack as any)}
        style={styles.backBtn}
      >
        <View className="flex-row items-center">
          <AntDesign name="caretleft" size={18} color="#E2F163" />
          {btnText && <Text style={{marginLeft: 6, color:"#E2F163", fontWeight:"bold"}}>{btnText}</Text>}
        </View>
      </TouchableOpacity>

      {title && <Text style={styles.titleAbsolute}>{title}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 20,
    position: "relative",
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
    fontWeight: "600",
    color: "#E2F163",
    fontSize: 24,
    pointerEvents: "none",
  },
});
