import GlassyBtn from "@/components/glassyBtn";
import ScreenHeader from "@/components/ScreenHeader";
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type chooseOptionType = {
  id: number|string;
  title: string;
};
const chooseOption: chooseOptionType[] = [
  { id: 0, title: "Lose Weight" },
  { id: 1, title: "Gain Weight" },
  { id: 2, title: "Muscle Mass Gain" },
  { id: 3, title: "Shape Body" },
  { id: 4, title: "Other" },
];
type ItemViewProps = {
  item: chooseOptionType;
  backgroundColor: string;
  onPress: () => void;
  textColor: string;
};

const Item = ({ item, backgroundColor, onPress, textColor }: ItemViewProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.itemStyle, { backgroundColor }]}
    >
      <Text style={[{ color: textColor, fontSize : 18 , fontWeight: 500}]}>{item.title}</Text>
      <Entypo name="circle" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default function Goal_screen() {
  const router = useRouter();
 // const [chooseGoalIndex, setChooseGoalIndex] = useState<number|string>();
  const [chooseGoalIndex, setChooseGoalIndex] = useState<number>();

  const renderItem = ({ item }: { item: chooseOptionType }) => {
    const backgroundColor = item.id === chooseGoalIndex ? "#E2F163" : "white";
    const textColor = item.id === chooseGoalIndex ? "black" : "#896CFE";

    return (
      <Item
        backgroundColor={backgroundColor}
        textColor={textColor}
        onPress={() => setChooseGoalIndex(Number(item.id))}
        item={item}
      />
    );
  }; 

  return (
    <SafeAreaView style={{ backgroundColor: "#232323", flex: 1 }}>
      <ScreenHeader btnText="Back" toBack="/(setup)/setHeight" />
      <View style={{ alignItems: "center", marginTop: 5 }}>
        <View>
          <Text style={{ fontSize: 30, color: "#ffffff", fontWeight: "bold" }}>
            What Is Your Goal?
          </Text>
        </View>
        <View
          style={{ paddingHorizontal: 20, paddingVertical: 30, marginTop: 20 }}
        >
          <Text style={{ textAlign: "center", color: "#ffffff", fontSize: 18 }}>
            We’re here to support your goals. Sharing your gender helps us
            tailor workouts and progress tracking to you.
          </Text>
        </View>
        {/* // TODO: animation */}
       <View style={{backgroundColor:"#896CFE", paddingVertical: 30, maxHeight: 120*5, width: "100%", paddingHorizontal: 30}}>
          <FlatList
            data={chooseOption}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            extraData={chooseGoalIndex}
          />
        </View>    
        <GlassyBtn
          text="Continue"
          onPress={() => router.push("/(setup)/setActivityLevel")}
          btnStyle={{ paddingVertical: 10 }}
          containerStyle={{ marginTop: 40 }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  itemStyle: {
    marginTop: 15,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderRadius: 20
  },
});
