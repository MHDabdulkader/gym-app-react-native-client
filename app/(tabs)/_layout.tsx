import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
// import AntDesign from '@expo/vector-icons/AntDesign';
import { Tabs } from "expo-router";
import { View } from "react-native";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "gold",
        tabBarBackground: () => (
          <View
            style={{
              flex: 1,
              backgroundColor: "#896CFE",
             
              overflow: "hidden",
            }}
          />
        ),
        tabBarStyle: {
          height: 70,

          position: "absolute",
          backgroundColor: "transparent",

         
        },
        tabBarItemStyle: {
          paddingVertical: 4,
        },
        headerShown:false
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size ?? 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="resources"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="activity" size={size ?? 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="star" size={size ?? 24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="helpline"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="customerservice" size={size ?? 24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
