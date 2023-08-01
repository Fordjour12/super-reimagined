import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalConstant from "../../constant/globalConstant";
import AuthLayout from "../../designs/auth.layout";
import ButtonCustom from "../../designs/button.custom";

export default function SignIn(props) {
  const ImageSource = require("../../../assets/images/house-1.jpg");

  return (
    <ImageBackground source={ImageSource} style={styles.container}>
      <View style={styles.overlay}>
        <SafeAreaView>
          <View style={{ marginVertical: "25%" }}>
            <Text style={styles.heading}>Reazl Heaven</Text>
            <Text style={styles.sub_intro}>
              The best place to find millions of homes, apartments,condos and
              rental listings
            </Text>
          </View>
        </SafeAreaView>

        {/* auth layout */}
        <AuthLayout
          text={""}
          children={
            <View style={{ width: "100%" }}>
              <ButtonCustom
                text="Login with Facebook"
                btnColor={GlobalConstant.facebook}
              />
              <ButtonCustom
                text="Login with Google"
                btnColor={GlobalConstant.google}
              />
              <ButtonCustom
                text="continue with Email"
                btnColor={GlobalConstant.email}
              />
            </View>
          }
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 70,
    fontWeight: "900",
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "hsla(0,0%,0%/.30)",
    width: "100%",
  },
  sub_intro: {
    fontSize: 18,
    fontWeight: "500",
    paddingTop: 10,
  },
  login_bg: {
    backgroundColor: "black",
    width: "100%",
  },
});

// 220E5C => color
// 1DE9B6 => color
