import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, View } from "react-native";
// import { AppIcons } from "../../shared/icons";
import AppIcons from "@expo/vector-icons/Feather";
import { Feed } from "../screens/Feed";
import { Profile } from "../screens/Profile";
import { Placeholder } from "../screens/Placeholder";

export const MainTabs = () => {
  const Tabs = createBottomTabNavigator();

  return (
    <Tabs.Navigator
      initialRouteName="Feed"
      // sceneContainerStyle={{ flex: 1 }}
      // safeAreaInsets={{ bottom: 10 }}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#222",
        tabBarInactiveTintColor: "#ccc",
        // tabBarIcon: ({ color }) => {
        //   if (route.name === "feed") {
        //     return <AppIcons name="home" size={28} color={color} />;
        //   }
        // },
        tabBarIconStyle: {
          color: "red",
          // position: "absolute",
          // bottom: 35,
        },
      })}
      // defaultScreenOptions={{ tabBarIconStyle: { height: 64 } }}
    >
      <Tabs.Screen
        name="Feed"
        component={Feed}
        options={{
          tabBarIcon: ({ color }) => (
            <AppIcons name="home" size={28} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Search"
        component={Placeholder}
        options={{
          tabBarIcon: ({ color }) => (
            <AppIcons name="search" size={28} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Reels"
        component={Placeholder}
        options={{
          tabBarIcon: ({ color }) => (
            <AppIcons name="play-circle" size={28} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Shop"
        component={Placeholder}
        options={{
          tabBarIcon: ({ color }) => (
            <AppIcons name="shopping-bag" size={28} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <AppIcons name="user" size={28} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs.Navigator>
  );
};
