import React from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useAuthContext } from "../../../context/authContext/createAuth.context";
import FormLayout from "../../designs/form.layout";

export default function SigninEmail() {
  const { onLogin } = useAuthContext();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ justifyContent: "flex-start" }}>
        <Text
          style={{
            fontFamily: "GExtraBold",
            fontSize: 25,
            textTransform: "capitalize",
            paddingVertical: 30,
          }}
        >
          Login
        </Text>
        <Text
          style={{
            fontFamily: "GExtraBold",
            fontSize: 35,
            textTransform: "capitalize",
          }}
        >
          Welcome back {"name"}
          {/* name => from shared preferences  */}
        </Text>
        <Text
          style={{ paddingVertical: 10, fontFamily: "GMedium", fontSize: 18 }}
        >
          Please enter your detail to access your account
        </Text>
      </View>

      <FormLayout
        onSubmit={(value: { email: string; password: string }) =>
          onLogin(value.email, value.password).catch((error) =>
            console.log(error)
          )
        }
        children={
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 10,
            }}
          >
            <BouncyCheckbox
              size={17}
              fillColor="gray"
            />
            <Text style={styles.remember}>Remember me</Text>
          </View>
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
  form: {
    width: "100%",
    paddingHorizontal: 16,
  },
  remember: {
    color: "hsl(0,0%,0%)",
    fontFamily: "GMedium",
    fontSize: 17,
  },
});
