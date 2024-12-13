import { BackpackIcon, BellIcon, BookTextIcon, Calendar, CircleSlashIcon, EllipsisIcon, EllipsisVertical, HomeIcon, MessageCircleMore } from "lucide-react-native";
import ClassesScreen from "../res/layout/app/classes";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawer from "../res/components/Drawer";
import { Image, Pressable, StyleProp, Text, View, ViewStyle } from "react-native";
import IconButton from "../res/components/IconButton";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import navigation from ".";
import AppHeader from "../res/components/Header/AppHeader";
import UserProfileScreen from "../res/layout/app/profile/UserProfile";
import SettingScreen from "../res/layout/app/settings/Settings";
import SimpleHeader from "../res/components/Header/SimpleHeader";
import { createElement } from "react";

const AppNavigatorConfig = {
  initialRouteName: "Classes",
};

const RouteConfig = {
  Classes: {
    screen: ClassesScreen,
    options: {
      tabBarIcon: () => <HomeIcon />,
    },
  },
  Chat: {
    screen: ClassesScreen,
    options: {
      tabBarIcon: () => <MessageCircleMore />,
    },
  },
  Assignments: {
    screen: ClassesScreen,
    options: {
      tabBarIcon: () => <BackpackIcon />,
    },
  },
  Learning: {
    screen: ClassesScreen,
    options: {
      tabBarIcon: () => <BookTextIcon />,
    },
  },
  Calendar: {
    screen: ClassesScreen,
    options: {
      tabBarIcon: () => <Calendar />,
    },
  },
  More: {
    screen: ClassesScreen,
    options: {
      tabBarIcon: () => <EllipsisIcon />,
    },
  },
};

// combine tabs and drawer
const TabNavigator = createBottomTabNavigator({
  ...AppNavigatorConfig,
  screenOptions: {
    headerShown: true,
    headerStyle: {
      backgroundColor: '#fff',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 16,
    },
    header: AppHeader,
    tabBarStyle: {
      backgroundColor: "#fff",
      height: 56,
    },
    tabBarLabelStyle: {
      fontSize: 11,
    },
    lazy: true
  },
  screens: RouteConfig
});

const AppNavigator = createDrawerNavigator({
  initialRouteName: "Main",
  screenOptions: {
    headerMode: "none",
    headerShown: false,
    drawerStyle: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      width: 250,
    },
    lazy: true,
  },
  drawerContent: Drawer,
  screens: {
    Main: {
      screen: TabNavigator,
    },
    Profile: {
      screen: UserProfileScreen,
    },
    Settings: {
      screen: SettingScreen,
      options: {
        headerShown: true,
        headerStyle: {
          flexDirection: 'row',
          alignItems: 'center',
          padding: 16,
          backgroundColor: '#fff',
        },
        headerTitle: "Settings",
        header: (props: any) => createElement(SimpleHeader, props)
      }
    }
  }
});

export default AppNavigator;
