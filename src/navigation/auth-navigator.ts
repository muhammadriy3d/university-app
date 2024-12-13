import { createElement } from "react";
import SimpleHeader from "../res/components/Header/SimpleHeader";
import LoginScreen from "../res/layout/auth/login";
import WelcomeScreen from "../res/layout/auth/welcome";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../res/layout/auth/register";
import GetHelpScreen from "../res/layout/auth/help";

const AuthNavigatorConfig = {
  headerStyle: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  header: (props: any) => createElement(SimpleHeader, props),
  headerShown: true,
};

const RouteConfig = {
  Welcome: {
    screen: WelcomeScreen,
    options: {
      headerShown: false,
    },
  },
  Login: {
    screen: LoginScreen,
    options: {
      headerTitle: "Log In",
    },
  },
  Register: {
    screen: RegisterScreen,
    options: {
      headerTitle: "Sign Up",
    },
  },
  GetHelp: {
    screen: GetHelpScreen,
    options: {
      headerTitle: "Get Help",
    },
  },
};

const AuthNavigator = createNativeStackNavigator({
  initialRouteName: "Welcome",
  screenOptions: AuthNavigatorConfig,
  screens: RouteConfig,
});

export default AuthNavigator;
