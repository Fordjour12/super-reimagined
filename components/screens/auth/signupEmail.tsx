import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useAuthContext } from "../../../context/authContext/createAuth.context";
import Form from "../../layout/form";

export default function SignupEmail() {
  const { onRegister } = useAuthContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.Info}>Hello Welcome,</Text>
        <Text
          style={{ paddingVertical: 10, fontFamily: "GMedium", fontSize: 18 }}
        >
          Please enter your detail to create your account
        </Text>
      </View>
      <Form
        onSubmit={() => console.info("first")}
        loadingState={isLoading}
        children={
          <View style={{ flexDirection: "row", paddingVertical: 16 }}>
            <BouncyCheckbox
              size={25}
              fillColor="black"
              text="I agree to the Terms & Conditions and Privacy Polices"
              innerIconStyle={{
                borderColor: "gray",
                borderRadius: 10,
                borderWidth: 2,
              }}
              textStyle={{ fontFamily: "GRegular", textDecorationLine: "none" }}
              isChecked={true}
              // onPress={() => {}}
            />
            {/* <Text>I agree to the Terms & Conditions and Privacy Polices</Text> */}
          </View>
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
});
