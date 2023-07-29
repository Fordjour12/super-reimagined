import React from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ImageSource from "../../../assets/images/house-1.jpg";

export default function SignIn(props) {
  return (
    <ImageBackground source={ImageSource} style={styles.container}>
      <View style={styles.overlay}>
        <SafeAreaView>
          <View style={{ marginTop: "45%" }}>
            <Text style={styles.heading}>Reazl Heaven</Text>
            <Text style={styles.sub_intro}>
              The best place to find millions of homes, apartments,condos and
              rental listings
            </Text>
          </View>
        </SafeAreaView>

        <View
          style={{
            width: "100%",
            height: "45%",
            backgroundColor: "black",
            paddingVertical: 16,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            // justifyContent: "center",
            // alignItems: "center",
          }}
        >
          <View
            style={{
              paddingHorizontal: 20,
              // justifyContent: "center",
              // alignItems: "center",
            }}
          >
            <View
              style={{
                width: 70,
                height: 3,
                backgroundColor: "yellow",
                // alignItems: "center",
                // justifyContent: "center",
              }}
            />

            <Button title="facebook" />
            <Button title="google" color={"blue"} />
            <Button title="phone" color={"red"} />
          </View>
          <View style={{ flexDirection: "row", marginVertical: 10 }}>
            <Text style={{ color: "white" }}>Don't have an Account?</Text>
            <TouchableOpacity onPress={() => console.log("Heaven")}>
              <Text>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
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
    fontSize: 30,
    fontWeight: "900",
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "hsla(360 100% 100% / 0.50)",
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
