import { BlurView } from "expo-blur";
import {
    StyleProp,
    Text,
    TextStyle,
    TouchableOpacity,
    ViewStyle,
} from "react-native";

type props = {
  onPress: () => void;
  text: string;
  containerStyle?: StyleProp<ViewStyle>;
  btnStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  intensity?: number;
  tint?: "light" | "dark" | "prominent" | "default";
};

export default function GlassyBtn({
  onPress,
  text,
  containerStyle,
  btnStyle,
  textStyle,
  intensity = 30,
  tint,
}: props) {
  return (
    <BlurView
      intensity={intensity}
      tint={tint}
      style={[
        {
          borderRadius: 24,
          overflow: "hidden",
          alignSelf: "center",
          marginTop: 20,

          // borderColor:
        },
        containerStyle,
      ]}
    >
      <TouchableOpacity
        onPress={onPress}
        style={[
          {
            paddingHorizontal: 80,
            paddingVertical: 15,
            // opacity: .9
          },
          btnStyle,
        ]}
      >
        <Text
          style={[{ color: "white", fontSize: 24, fontWeight: 800 }, textStyle]}
        >
          {text}
        </Text>
      </TouchableOpacity>
    </BlurView>
  );
}
