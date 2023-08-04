import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FormLayout from "../../designs/form.layout";

export default function SignupEmail() {
  return (
    <SafeAreaView>
      <View>
        <Text>signupEmail</Text>

        <FormLayout />
      </View>
    </SafeAreaView>
  );
}
