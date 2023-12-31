import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "./components/screens";
import SignIn from "./components/screens/auth/signin";
import SignInEmail from "./components/screens/auth/signinEmail";
import SignUp from "./components/screens/auth/signup";
import SignupEmail from "./components/screens/auth/signupEmail";
import { AuthenticationProvider } from "./context/authContext/auth.context";
import { useAuthContext } from "./context/authContext/createAuth.context";
import useLoadAssets from "./hooks/useLoadAssets";

const Stack = createNativeStackNavigator();

export const Layout = () => {
    const { currentUser } = useAuthContext();
    const fontLoaded = useLoadAssets();

    if (!fontLoaded) {
        return null;
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Index"
                    screenOptions={{
                        headerShown: false,
                        animation: "fade",
                        animationTypeForReplace: "push",
                        animationDuration: 50,
                    }}
                >
                    {currentUser ? (
                        <Stack.Screen name="Index" component={Index} />
                    ) : (
                        <Stack.Group>
                            <Stack.Screen name="SignIn" component={SignIn} />
                            <Stack.Screen name="SignUp" component={SignUp} />
                            <Stack.Screen
                                name="SignInEmail"
                                component={SignInEmail}
                                options={{
                                    headerShown: true,
                                    title: "Login",
                                    headerTitleStyle: {
                                        fontFamily: "GExtraBold",
                                        fontSize: 20,
                                    },
                                }}
                            />
                            <Stack.Screen
                                name="SignUpEmail"
                                component={SignupEmail}
                                options={{
                                    title: "Signup",
                                    headerShown: true,
                                    headerTitleStyle: {
                                        fontFamily: "GExtraBold",
                                        fontSize: 20,
                                    },
                                }}
                            />
                        </Stack.Group>
                    )}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
};

export default function App() {
    return (
        <AuthenticationProvider>
            <Layout />
        </AuthenticationProvider>
    );
}
