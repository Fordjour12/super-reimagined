import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignIn from "./components/screens/auth/signin";
import SigninEmail from "./components/screens/auth/signinEmail";
import SignUp from "./components/screens/auth/signup";
import SignupEmail from "./components/screens/auth/signupEmail";
import useLoadAssets from "./hooks/useLoadAssets";

const Stack = createNativeStackNavigator();

export default function App() {
  const fontLoaded = useLoadAssets();

  if (!fontLoaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="SignIn"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="SignInEmail"
              component={SigninEmail}
              options={{ animation: "none" }}
            />
            <Stack.Screen
              name="SignUpEmail"
              component={SignupEmail}
              options={{ animation: "none" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
