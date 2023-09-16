import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useAuthContext } from "../../../context/authContext/createAuth.context";
import Form from "../../layout/form";

export default function SignupEmail() {
  const { onRegister } = useAuthContext();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(true);

  const checkboxSelection = () => {
    setIsChecked(!isChecked);
  };

  const handelFormSubmit = () => {
    if (isChecked === false) {
      // alert("must be checked checkbox");
      Alert.alert("Alert Title", "My Alert Msg", [
        {
          text: "Ask me later",
          onPress: () => console.log("Ask me later pressed"),
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
      ]);
    } else {
      console.info("first");
    }
  };

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
        onSubmit={() => handelFormSubmit()}
        loadingState={isLoading}
        children={
          <>
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
                textStyle={{
                  fontFamily: "GRegular",
                  textDecorationLine: "none",
                }}
                isChecked={!isChecked}
                onPress={() => checkboxSelection()}
              />
            </View>
          </>
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

  checked: {
    backgroundColor: "green",
  },
  checked_n: {
    backgroundColor: "red",
  },
});
