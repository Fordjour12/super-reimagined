import React from "react";
import { Text, View } from "react-native";
import FormLayout from "../../designs/form.layout";

export default function SigninEmail() {
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
        </Text>
        <Text
          style={{ paddingVertical: 10, fontFamily: "GMedium", fontSize: 18 }}
        >
          Please enter your detail to access your account
        </Text>
      </View>

      <FormLayout />
    </View>
  );
}
