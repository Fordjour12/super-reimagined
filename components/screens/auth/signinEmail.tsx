import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useAuthContext } from "../../../context/authContext/createAuth.context";
import Form from "../../layout/form";

export default function SigninEmail() {
  const { onLogin } = useAuthContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.Info}>Welcome back,</Text>
        <Text style={styles.sub_info}>
          Please enter your detail to access your account
        </Text>
      </View>

      <Form
        onSubmit={(value: { email: string; password: string }) => {
          setIsLoading(!isLoading);
          onLogin(value.email, value.password);
        }}
        loadingState={isLoading}
        children={
          <View style={{ flexDirection: "row", paddingVertical: 16 }} />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  Info: {
    fontFamily: "GExtraBold",
    fontSize: 45,
    textTransform: "capitalize",
  },
  sub_info: {
    paddingVertical: 10,
    fontFamily: "GMedium",
    fontSize: 18,
  },
});
