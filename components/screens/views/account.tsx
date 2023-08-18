import { thumbs } from "@dicebear/collection";
import { createAvatar } from "@dicebear/core";
import React, { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SvgXml } from "react-native-svg";
import { useAuthContext } from "../../../context/authContext/createAuth.context";

const Account = () => {
  const { currentUser } = useAuthContext();
  const inset = useSafeAreaInsets();
  const [switchEnabled, setSwitchEnabled] = useState<boolean>(false);

  const switchToggled = () => {
    setSwitchEnabled(!switchEnabled);
  };

  const avatar = createAvatar(thumbs, {
    seed: currentUser.uid,
    size: 120,
    radius: 30,
  }).toString();

  return (
    <View>
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
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            paddingVertical: 16,
          }}
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

        <View style={styles.accountBg}>
          <Text>Hollo</Text>
          <Text>Hollo</Text>
          <Text>Hollo</Text>
          <Text>Hollo</Text>
          <Text>Hollo</Text>
          <Text>Hollo</Text>
        </View>

        <View style={styles.accountBg}>
          <Text>Hollo</Text>
          <Text>Hollo</Text>
          <Text>Hollo</Text>
          <Text>Hollo</Text>
          <Text>Hollo</Text>
          <Text>Hollo</Text>
        </View>
      </View>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  accountBg: {
    backgroundColor: "hsl(0, 0%, 100%)",
    paddingVertical: 16,
    // color: "hsl(365,100%,100%)",
  },
  accountBgW: {
    backgroundColor: "hsl(0,0%,0%)",
    paddingVertical: 16,
    color: "hsl(0,0%,100%)",
    textDecorationColor: "hsl(0,0%,100%)",
  },
});
