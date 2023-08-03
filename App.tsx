import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignIn from "./components/screens/auth/signin";
import SignUp from "./components/screens/auth/signup";
import useLoadAssets from "./hooks/useLoadAssets";

const Stack = createNativeStackNavigator();

export default function App() {
  // const [fontLoaded] = useFonts({
  //   GBold: require("./assets/fonts/EBGaramond-Bold.ttf"),
  //   GExtraBold: require("./assets/fonts/EBGaramond-ExtraBold.ttf"),
  //   GRegular: require("./assets/fonts/EBGaramond-Regular.ttf"),
  //   GSemiBold: require("./assets/fonts/EBGaramond-SemiBold.ttf"),
  //   GMedium: require("./assets/fonts/EBGaramond-Medium.ttf"),
  // });

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
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
