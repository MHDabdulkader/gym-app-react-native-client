import GlassyBtn from "@/components/glassyBtn";
import ScreenHeader from "@/components/ScreenHeader";
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
  { id: 0, title: "Beginner" },
  { id: 1, title: "Intermediate" },
  { id: 2, title: "Advance" },
  
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
      <Text style={[{textAlign: "center", color: textColor, fontSize : 20, fontWeight: 500}]}>{item.title}</Text>
     
    </TouchableOpacity>
  );
};

export default function ActivityLevel_screen() {
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
      <ScreenHeader btnText="Back" toBack="/(setup)/setGoal" />
      <View style={{ alignItems: "center", marginTop: 5 }}>
        <View>
          <Text style={{ fontSize: 30, color: "#ffffff", fontWeight: "bold" }}>
           Physical Activity Level
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
       <View style={{ paddingVertical: 30, maxHeight: 120*5, width: "100%", paddingHorizontal: 30}}>
          <FlatList
            data={chooseOption}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            extraData={chooseGoalIndex}
          />
        </View>    
        <GlassyBtn
          text="Continue"
          onPress={() => router.push("/(setup)/setProfileInfo")}
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
    
    
    paddingHorizontal: 20,
    borderRadius: 20
  },
});
