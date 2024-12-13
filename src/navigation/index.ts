import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./auth-navigator";
import AppNavigator from "./app-navigator";
import ChannelScreen from "../res/layout/app/channels";
import ClassScreen from "../res/layout/app/classes";
import GroupScreen from "../res/layout/app/group";
import ClassRoomScreen from "../res/layout/app/class";
import ChatRoomHeader from "../res/components/Header/ChatRoomHeader";
import { createElement } from "react";
import UserProfileScreen from "../res/layout/app/profile/UserProfile";

const RootStack = createNativeStackNavigator({
  groups: {
    Auth: {
      if: () => true,
      screens: {
        Auth: AuthNavigator,
      },
    },
    App: {
      if: () => true,
      screens: {
        App: AppNavigator,
        ClassRoom: {
          options: {
            headerShown: true,
            headerStyle: {
              backgroundColor: "#fff",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 16,
              paddingVertical: 10,
            },
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: "600",
            },
            header: props => createElement(ChatRoomHeader, props),
          },
          screen: ClassRoomScreen,
        },
        Group: {
          screen: GroupScreen,
        },
        Channel: {
          screen: ChannelScreen,
        },
        Class: {
          screen: ClassScreen,
        },
      },
    },
  },
  screenOptions: {
    headerShown: false,
    headerMode: "none",
    lazy: true,
  },
  initialRouteName: "Auth",
});

export default createStaticNavigation(RootStack);
