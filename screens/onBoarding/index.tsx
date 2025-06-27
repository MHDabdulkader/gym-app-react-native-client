import { useRouter } from "expo-router";
import { MotiImage } from "moti";
import { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

//import { transparent } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import GlassyBtn from "@/components/glassyBtn";
import { onboardingScreenDataType } from "./types";
import { onboardingScreenData } from "./utils";

const { width, height } = Dimensions.get("window");

export default function onboardingScreens() {
  // const { colors } = useTheme();
  const router = useRouter();

  const [indexScreen, setIndexScreen] = useState(0);
  const screen = onboardingScreenData[indexScreen];
  const [screenData, setScreenData] =
    useState<onboardingScreenDataType[]>(onboardingScreenData);
  const Ref = useRef<FlatList<any>>(null);
  const handleNext = () => {
    if (indexScreen < screenData.length - 1) {
      Ref.current?.scrollToIndex({ index: indexScreen + 1 });
      // setScreenIndex(screenIndex+1);
    } else {
      router.replace("/(auth)/login");
    }
  };
  return (
    <FlatList
      ref={Ref}
      data={screenData}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onMomentumScrollEnd={(e) => {
        const index = Math.round(e.nativeEvent.contentOffset.x / width);
        setIndexScreen(index);
      }}
      keyExtractor={(_, idx) => idx.toString()}
      renderItem={({ item }) => (
        <ImageBackground
          source={item.background}
          style={styles.background}
          resizeMode="cover"
        >
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: `${indexScreen === 0} ? "rgba(0, 0, 0, 0.4)": "rgba(0, 0, 0, 0.2)"`, // ← adjust darkness here
            }}
          />

          <View style={styles.contentContainer}>
            <MotiImage source={item.icon} style={styles.iconImage} />
            <Text
              style={{
                fontSize: 24,
                marginTop: 10,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              {item.title}
            </Text>
            {/* <Text style={{fontSize: 18, marginTop: 10, fontWeight: 400,textAlign:"center"}}>{item.subtitle}</Text> */}

             
              <View style={styles.navibtnContainer}>
                {screenData.map((_, idx) => (
                  <TouchableOpacity
                    key={idx}
                    onPress={() => {
                      Ref.current?.scrollToIndex({ index: idx });
                      setIndexScreen(idx);
                    }}
                    style={[
                      styles.navibtn,
                      idx === indexScreen && styles.navibtnActive,
                    ]}
                  />
                ))}
              </View>
            
             
              
            
          </View>
          {/* <TouchableOpacity
                onPress={handleNext}
                style={styles.btnContainer}
              >
                <Text style={{ color: "white", fontSize: 24 }}>
                  {item.btnText}
                </Text>
              </TouchableOpacity> */}

            <GlassyBtn onPress={handleNext} text={item.btnText}/>
        </ImageBackground>
      )}
    />
  );
}

const styles = StyleSheet.create({
  background: {
    width,
    height,
    justifyContent: "center",
    //opacity: .4
  },
  contentContainer: {
    height: 300,
    backgroundColor: "#896CFE",
   
    //  paddingHorizontal: 10
    padding: 20,
    // marginTop: 20,
    alignItems: "center",
    justifyContent:"center",
    // opacity: 0.8
    //backgroundColor:
  },
  iconImage: {
    // marginTop: 20
    width: 100,
    height: 100,
  },
  navibtnContainer: {
    flexDirection: "row",
    gap: 5,
    marginTop: 20,
  },
  navibtn: {
    width: 30,
    height: 10,
    backgroundColor: "gray",
  },
  navibtnActive: {
    backgroundColor: "black",
  },
  btnContainer: {
    marginTop: 20,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 40,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    
  },
});
