import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const recommendationData = [
  {
    id: "0",
    backgroundImageURL: require("@/assets/images/ex3.png"),
    isFavorite: true,
    title: "T-Bar Row",
    time: "12 Minutes",
    calories: "125 Kcal",
  },
  {
    id: "1",
    backgroundImageURL: require("@/assets/images/ex2.png"),
    isFavorite: false,
    title: "Full Body stretching",
    time: "12 Minutes",
    calories: "100 Kcal",
  },
  {
    id: "2",
    backgroundImageURL: require("@/assets/images/ex2.png"),
    isFavorite: false,
    title: "Full Body stretching",
    time: "12 Minutes",
    calories: "100 Kcal",
  },
];
const WeeklyChallenge = [
  {
    challengeTitle: "Plank With hip Twist",
    sampleImageURL: require("@/assets/images/ex2.png")
  }
];

const articleAndTipData = [
  {
    id: "0",
    backgroundImageURL: require("@/assets/images/ex3.png"),
    isFavorite: true,
    title: "T-Bar Row",
  },
  {
    id: "1",
    backgroundImageURL: require("@/assets/images/ex2.png"),
    isFavorite: false,
    title: "Full Body stretching",
  },
  {
    id: "2",
    backgroundImageURL: require("@/assets/images/ex2.png"),
    isFavorite: false,
    title: "Full Body stretching",
  },
];

export default function HomeScreen() {
  const [username, setUsername] = useState<string>("Kader");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#232323" }}>
      {/* //** name and icon(search, notification, people icons) */}
      <View style={styles.paddingContainer}>
        <View
          style={{
            marginTop: 10,
            paddingVertical: 5,
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.usernameText}>Hi, {username}</Text>
          </View>
          <View style={{ flexDirection: "row", gap: 20 }}>
            <FontAwesome name="search" size={24} color="#896CFE" />
            <Ionicons name="notifications-sharp" size={24} color="#896CFE" />
            <Ionicons name="person-sharp" size={24} color="#896CFE" />
          </View>
        </View>
        <View>
          <Text style={{ color: "white", fontWeight: "500", fontSize: 18 }}>
            It's time to challenge your limits.
          </Text>
        </View>
      </View>
      {/* //* workout, progress, nutration, community, tab menu */}
      <View style={styles.paddingContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <FontAwesome5 name="dumbbell" size={35} color="#E2F163" />
            <Text style={{ color: "#E2F163" }}>Workout</Text>
          </View>
          <View
            style={{ width: 2, height: "100%", backgroundColor: "#896CFE" }}
          ></View>
          <View style={{ alignItems: "center" }}>
            <MaterialCommunityIcons
              name="timetable"
              size={30}
              color="#896CFE"
            />
            <Text style={{ color: "#896CFE" }}>Progress</Text>
          </View>
          <View
            style={{ width: 2, height: "100%", backgroundColor: "#896CFE" }}
          ></View>
          <View style={{ alignItems: "center" }}>
            <MaterialCommunityIcons
              name="nutrition"
              size={35}
              color="#896CFE"
            />
            <Text style={{ color: "#896CFE" }}>Nutrition</Text>
          </View>
          <View
            style={{ width: 2, height: "100%", backgroundColor: "#896CFE" }}
          ></View>
          <View style={{ alignItems: "center" }}>
            <FontAwesome6 name="people-group" size={35} color="#896CFE" />
            <Text style={{ color: "#896CFE" }}>Community</Text>
          </View>
        </View>
      </View>
      {/* ============================== recommendation section ======================================== */}
      <View style={styles.paddingContainer}>
        <View style={{ marginTop: 10, paddingVertical: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "#E2F163", fontSize: 18 }}>
              Recommendation
            </Text>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 15 }}
            >
              <Text style={{ color: "white", fontSize: 16 }}>See All</Text>
              <FontAwesome6 name="caret-right" size={22} color="#E2F163" />
            </View>
          </View>
          <View style={{ width: "100%", marginTop: 10 }}>
            <FlatList
              data={recommendationData}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 10, gap: 5 }}
              renderItem={({ item }) => (
                <View
                  style={{
                    width: 157,
                    overflow: "hidden",
                    // marginRight: 20,
                    position: "relative",
                    // borderTopRightRadius: 20
                  }}
                >
                  <View
                    style={{
                      position: "absolute",
                      zIndex: 2,
                      alignItems: "flex-end",
                      width: "100%",
                      marginTop: 10,
                      paddingHorizontal: 10,
                    }}
                  >

                    <FontAwesome
                      name="star"
                      size={24}
                      color={item.isFavorite ? "#E2F163" : "white"}
                    />
                  </View>

                  <View>
                    <Image
                      source={item.backgroundImageURL}
                      resizeMode="contain"
                      style={{
                        height: 100,
                        width: "100%",
                        overflow: "hidden",
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      height: "100%",
                      justifyContent: "center",
                      width: "100%",
                      alignItems: "flex-end",
                      marginTop: 20,
                      paddingHorizontal: 10,
                    }}
                  >
                    {/* <View style={{backgroundColor:"white", borderRadius: "50%"}}>  */}
                    <AntDesign name="play" size={24} color="#896CFE" />
                    {/* </View> */}
                  </View>
                  <View
                    style={{
                      paddingHorizontal: 10,
                      borderRightWidth: 1,
                      borderLeftWidth: 1,
                      borderBottomWidth: 1,
                      paddingVertical: 10,
                      borderBottomEndRadius: 20,
                      borderBottomStartRadius: 20,
                      borderColor: "white",
                    }}
                  >
                    <Text style={{ color: "#E2F163", fontSize: 14 }}>
                      {item.title}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <MaterialIcons
                          name="access-time"
                          size={14}
                          color="#896CFE"
                        />
                        <Text style={{ color: "white", fontSize: 12 }}>
                          {item.time}
                        </Text>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <FontAwesome6
                          name="gripfire"
                          size={14}
                          color="#896CFE"
                        />
                        <Text style={{ color: "white", fontSize: 12 }}>
                          {item.calories}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
      {/* ===================================== Weekly Challenge  ===================== */}
      <View style={{ backgroundColor: "#B3A0FF" }}>
        <View style={[styles.paddingContainer, { paddingVertical: 20 }]}>
          <View style={{ backgroundColor: "#232323", width: "100%", borderRadius: 20, justifyContent: "space-between", flexDirection: "row" }}>
            <View style={{ width: "50%", alignItems: "center", justifyContent: "center" }}>
              <Text style={{ color: "#E2F163", fontSize: 24, fontWeight: 800, textAlign: "center" }}>Weekly{"\n"}Challenge</Text>
              <Text style={{ color: "white", textAlign: "center", fontSize: 12 }}>{WeeklyChallenge[0].challengeTitle}</Text>
            </View>
            <View style={{ width: "50%" }}>
              <Image
                source={WeeklyChallenge[0].sampleImageURL}
                resizeMode="contain"
                style={{
                  height: 120,
                  // width: 0,
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: 20
                }}
              />
            </View>
          </View>


        </View>
      </View>

      {/* =================== Article and tips */}
      <View style={styles.paddingContainer}>
        <View style={{paddingVertical: 20,gap: 10}}>
          <View>
            <Text style={{color:"#E2F163", fontSize: 18, fontWeight: 500}}>Article & Tips</Text>
          </View>
          <FlatList
            data={articleAndTipData}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ gap: 5 }}
            renderItem={({ item }) => (
              <View
                style={{
                  width: 157,
                  overflow: "hidden",
                  // marginRight: 10,
                  position: "relative",
                  // borderTopRightRadius: 20
                }}
              >
                <View
                  style={{
                    position: "absolute",
                    zIndex: 2,
                    alignItems: "flex-end",
                    width: "100%",
                    marginTop: 10,
                    paddingHorizontal: 10,
                  }}
                >

                  <FontAwesome
                    name="star"
                    size={24}
                    color={item.isFavorite ? "#E2F163" : "white"}
                  />
                </View>

                <View>
                  <Image
                    source={item.backgroundImageURL}
                    resizeMode="contain"
                    style={{
                      height: 100,
                      width: "100%",
                      overflow: "hidden",
                      borderTopRightRadius: 20,
                      borderTopLeftRadius: 20,
                    }}
                  />
                </View>
               
                <View
                  style={{
                    paddingHorizontal: 10,
                    
                    
                    paddingVertical: 10,
                    borderBottomEndRadius: 20,
                    borderBottomStartRadius: 20,
                    //borderColor: "white",
                  }}
                >
                  <Text style={{ color: "#ffffff", fontSize: 14 }}>
                    {item.title}
                  </Text>

                </View>
              </View>
            )}
          />
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  paddingContainer: {
    paddingHorizontal: 15,
  },
  usernameText: {
    color: "#896CFE",
    fontSize: 24,
    fontWeight: 900,
  },
});
