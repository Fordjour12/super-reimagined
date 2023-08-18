import React from "react";
import { Text, View } from "react-native";
import { useAuthContext } from "../../../context/authContext/createAuth.context";
import FormLayout from "../../designs/form.layout";

export default function SignupEmail() {
  const { onRegister } = useAuthContext();

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
          SignUp
        </Text>
        <Text
          style={{
            fontFamily: "GExtraBold",
            fontSize: 35,
            textTransform: "capitalize",
          }}
        >
          Hello Welcome,
        </Text>
        <Text
          style={{ paddingVertical: 10, fontFamily: "GMedium", fontSize: 18 }}
        >
          Please enter your detail to create your account
        </Text>
      </View>

      <FormLayout
        // onSubmit={(value: any) => console.log("signup cred", value)}
        onSubmit={(value: { email: string; password: string }) =>
          onRegister(value.email, value.password).catch((error) =>
            console.log(error)
          )
        }
      />
    </View>
  );
}
