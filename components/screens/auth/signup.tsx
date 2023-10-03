import React from "react";
import {
  ImageBackground,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Email from "../../../assets/images/email.svg";
import Facebook from "../../../assets/images/facebook.svg";
import Google from "../../../assets/images/google.svg";
import GlobalConstant from "../../constant/globalConstant";
import Authentication from "../../layout/authentication";
import Button from "../../ui/button";

export default function Signup({ navigation }) {
  const ImageSource = require("../../../assets/images/house-2.jpg");
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

        {/* New Authentication flow */}

        <Authentication
          children={
            <>
              <View>
                <Button
                  text="SignUp with Facebook"
                  btnStyle={GlobalConstant.facebook}
                  icon={<Facebook width={40} height={30} />}
                />
                <Button
                  text="SignUp with Google"
                  btnStyle={GlobalConstant.google}
                  icon={<Google width={40} height={30} />}
                />
                <View style={{ width: "100%" }}>
                  <Button
                    text="Continue with Email"
                    btnStyle={GlobalConstant.login_bg}
                    icon={<Email width={40} height={30} />}
                    onPress={() => navigation.navigate("SignUpEmail")}
                  />
                </View>
              </View>

              <Pressable
                onPress={() => navigation.navigate("SignIn")}
                style={styles.accountSignUp}
              >
                <Text style={styles.account}>Have an Account? </Text>
                <Text style={[styles.account, GlobalConstant.blue]}>
                  Sign In
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
  accountSignUp: {
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
