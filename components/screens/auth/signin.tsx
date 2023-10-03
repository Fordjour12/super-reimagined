import React from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Email from "../../../assets/images/email.svg";
import Facebook from "../../../assets/images/facebook.svg";
import Google from "../../../assets/images/google.svg";
import GlobalConstant from "../../constant/globalConstant";
import Authentication from "../../layout/authentication";
import Button from "../../ui/button";

export default function SignIn({ navigation }) {
  const ImageSource = require("../../../assets/images/house-1.jpg");

  return (
    <ImageBackground source={ImageSource} style={GlobalConstant.container}>
      <View style={GlobalConstant.overlay}>
        <SafeAreaView>
          <View style={{ marginVertical: "25%" }}>
            <Text style={GlobalConstant.heading}>Reazl Heaven</Text>
            <Text style={GlobalConstant.sub_intro}>
              The best place to find millions of homes, apartments,condos and
              rental listings
            </Text>
          </View>
        </SafeAreaView>

        {/* auth layout */}
        <Authentication
          children={
            <>
              <View>
                <Button
                  text="Login with Facebook"
                  btnStyle={GlobalConstant.facebook}
                  icon={<Facebook width={40} height={30} />}
                />
                <Button
                  text="Login with Google"
                  btnStyle={GlobalConstant.google}
                  icon={<Google width={40} height={30} />}
                />
                <View style={{ width: "100%" }}>
                  <Button
                    text="Continue with Email"
                    btnStyle={GlobalConstant.email}
                    icon={<Email width={40} height={30} />}
                    onPress={() => navigation.navigate("SignInEmail")}
                  />
                </View>
              </View>

              <Pressable
                onPress={() => navigation.navigate("SignUp")}
                style={styles.accountSignIn}
              >
                <Text style={styles.account}>Don't have an Account? </Text>
                <Text style={[styles.account, GlobalConstant.blue]}>
                  Sign Up
                </Text>
              </Pressable>
            </>
          }
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  accountSignIn: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  account: {
    fontFamily: "GSemiBold",
    fontSize: 18,
  },
});
