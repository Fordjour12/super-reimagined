import { thumbs } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import React, { useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import { useAuthContext } from "../../../context/authContext/createAuth.context";
import GlobalConstant from "../../constant/globalConstant";
import ButtonCustom from "../../designs/button.custom";

const Account = () => {
  const { currentUser, onLogout } = useAuthContext();
  const inset = useSafeAreaInsets();
  const [switchEnabled, setSwitchEnabled] = useState<boolean>(false);

  const switchToggled = () => {
    setSwitchEnabled(!switchEnabled);
  };

  const avatar = createAvatar(thumbs, {
    seed: currentUser.email,
    size: 120,
    radius: 30,
  }).toString();

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingTop: inset.top,
          backgroundColor: "hsl(360, 100%, 100%)",
          height: 210,
        }}
      >
        <View
          style={{
            width: 120,
            height: 120,
            borderColor: "gray",
          }}
        >
          <SvgXml xml={avatar} />
        </View>

        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontFamily: "GExtraBold", fontSize: 16 }}>
            {currentUser.email}
          </Text>
          <Text style={{ fontSize: 10 }}>{currentUser.uid}</Text>
        </View>
      </View>

      <View style={{ marginTop: 20 }}>
        {/* Dark mode */}
        <View
          style={[
            styles.accountBg,
            {
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              paddingVertical: 16,
            },
          ]}
        >
          <Text style={{ fontSize: 20, fontFamily: "GMedium" }}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "gray", true: "#474545" }}
            thumbColor={"#333333"}
            ios_backgroundColor={"gray"}
            onValueChange={switchToggled}
            value={switchEnabled}
          />
        </View>
        {/* Dark mode */}

        <View style={[styles.accountBg, styles.space]}>
          <Text>Account</Text>
          <Text>Notifications</Text>
          <Text>Security</Text>
          <Text>Contact us</Text>
          <Text>Rate us</Text>
        </View>

        <View style={[styles.accountBg, styles.space]}>
          <Text>Help</Text>
          <Text>About</Text>
          <Text>Privacy Policy</Text>
          <Text>Terms of use</Text>
          <Text>FAQ</Text>
        </View>
      </View>

      <View
        style={[
          styles.accountBg,
          styles.space,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <Text style={{ alignItems: "center" }}>Logout</Text>

        <ButtonCustom
          btnColor={GlobalConstant.email}
          onPress={() => onLogout()}
          text="Logout"
        />
      </View>
    </ScrollView>
  );
};

export default Account;

const styles = StyleSheet.create({
  accountBg: {
    backgroundColor: "hsl(0, 0%, 100%)",
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    borderRadius: 20,
  },
  accountBgW: {
    backgroundColor: "hsl(0,0%,0%)",
    paddingVertical: 16,
    color: "hsl(0,0%,100%)",
    textDecorationColor: "hsl(0,0%,100%)",
  },
  space: {
    marginTop: 30,
  },
});
