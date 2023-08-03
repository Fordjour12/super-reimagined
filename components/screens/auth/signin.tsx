import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Email from "../../../assets/images/email-envelope-letter-message-fast-svgrepo-com.svg";
import Facebook from "../../../assets/images/facebook-svgrepo-com.svg";
import Google from "../../../assets/images/google-color-svgrepo-com.svg";
import GlobalConstant from "../../constant/globalConstant";
import AuthLayout from "../../designs/auth.layout";
import ButtonCustom from "../../designs/button.custom";

export default function SignIn(Props) {
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
            <>
              <View style={{ width: "100%" }}>
                <ButtonCustom
                  text="Login with Facebook"
                  btnColor={GlobalConstant.facebook}
                  icons={<Facebook width={40} height={30} />}
                />
                <ButtonCustom
                  text="Login with Google"
                  btnColor={GlobalConstant.google}
                  icons={<Google width={40} height={30} />}
                />
                <ButtonCustom
                  text="continue with Email"
                  btnColor={GlobalConstant.email}
                  icons={<Email width={40} height={30} />}
                />
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={styles.account}>Don't have an Account? </Text>
                <TouchableOpacity
                  onPress={() => Props.navigation.navigate("SignUp")}
                  delayPressIn={0}
                >
                  <Text style={[styles.account, GlobalConstant.blue]}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
                {/* <Button title="login" onPress={() => Props.navigation.navigate("SignUp")} /> */}
              </View>
            </>
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
    color: "white",
    fontFamily: "GBold",
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "hsla(0,0%,0%/.60)",
    width: "100%",
  },
  sub_intro: {
    fontSize: 18,
    paddingTop: 10,
    color: "white",
    fontFamily: "GSemiBold",
  },
  login_bg: {
    backgroundColor: "black",
    width: "100%",
  },
  account: {
    fontFamily: "GSemiBold",
    fontSize: 18,
  },
});

// 220E5C => color
// 1DE9B6 => color
