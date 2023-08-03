import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Email from "../../../assets/images/email-envelope-letter-message-fast-svgrepo-com.svg";
import Facebook from "../../../assets/images/facebook-svgrepo-com.svg";
import Google from "../../../assets/images/google-color-svgrepo-com.svg";
import GlobalConstant from "../../constant/globalConstant";
import AuthLayout from "../../designs/auth.layout";
import ButtonCustom from "../../designs/button.custom";

export default function Signup(Props) {
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

        {/* auth layout */}
        <AuthLayout
          text={""}
          children={
            <>
              <View style={{ width: "100%" }}>
                <ButtonCustom
                  text="Sign up with Facebook"
                  btnColor={GlobalConstant.facebook}
                  icons={<Facebook width={40} height={30} />}
                />
                <ButtonCustom
                  text="Sign up with Google"
                  btnColor={GlobalConstant.google}
                  icons={<Google width={40} height={30} />}
                />
                <ButtonCustom
                  text="continue with Email"
                  btnColor={GlobalConstant.email}
                  icons={<Email width={40} height={30} />}
                  onPress={() => Props.navigation.navigate("SignUpEmail")}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={GlobalConstant.account}>Have an Account? </Text>
                <TouchableOpacity
                  onPress={() => Props.navigation.navigate("SignIn")}
                  delayPressIn={0}
                >
                  <Text style={[GlobalConstant.account, GlobalConstant.blue]}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          }
        />
      </View>
    </ImageBackground>
  );
}
