import { useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import Animated, {
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from "react-native-reanimated";

type OptionType = {
  id: string | number;
  title: string;
};

type OptionPickerProp = {
  optionItem: OptionType[];
  selectedId: string | number | undefined; // TODO : check undefine valid for case;
  onSelect: (id: string | number) => void;
  selectedBackgroundColor?: string | "#FAF9F6";
  unselectedBackgroundColor?: string | "white";
  selectedTextColor?: string | "black";
  unselectedTextColor?: string | "#232323";
};

export default function HorizontalOptionPicker_Component({
  optionItem,
  selectedId,
  onSelect,
  selectedBackgroundColor,
  unselectedBackgroundColor,
  selectedTextColor,
  unselectedTextColor,
}: OptionPickerProp) {
  const renderItem = ({ item }: { item: OptionType }) => {
    const isSelected = item.id === selectedId;
    const progress = useSharedValue(isSelected ? 1 : 0);

    useEffect(() => {
      progress.value = withTiming(isSelected ? 1 : 0, { duration: 250 });
    }, [isSelected]);

    const safeSelectedBackgroundColor = selectedBackgroundColor ?? "#FAF9F6";
    const safeUnselectedBackgroundColor = unselectedBackgroundColor ?? "white";

    const AnimationStyle = useAnimatedStyle(() => ({
      backgroundColor: interpolateColor(
        progress.value,
        [0, 1],
        [safeUnselectedBackgroundColor, safeSelectedBackgroundColor]
      ),
    }));
    const safeSelectTextColor = selectedTextColor ?? "black";
    const safeUnselectedTextColor = unselectedTextColor ?? "#232323";

    const AnimationTextStyle = useAnimatedStyle(() => ({
      color: interpolateColor(
        progress.value,
        [0, 1],
        [safeUnselectedTextColor, safeSelectTextColor]
      ),
    }));

    return(
        <Animated.View style={[AnimationStyle, styles.item]}>
            <TouchableOpacity onPress={()=> onSelect(item.id)}>
                <Animated.Text style={[AnimationTextStyle, styles.text]}>
                    {item.title}
                </Animated.Text>
            </TouchableOpacity>
        </Animated.View>
    )
  };

  return (
    <FlatList
      data={optionItem}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  item:{
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginRight: 10
  },
  text:{
    fontSize: 20,
    fontWeight: 300
  }
});
