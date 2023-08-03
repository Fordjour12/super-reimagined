import React, { ReactElement } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Buttons {
  text: string;
  btnColor: Object;
  icons: ReactElement;
  onPress?: () => void;
}

export default function ButtonCustom(Props: Buttons) {
  return (
    <TouchableOpacity
      style={[styles.Btn, Props.btnColor]}
      onPress={Props.onPress}
    >
      {Props.icons}
      <Text style={styles.BtnText}>{Props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Btn: {
    width: "100%",
    borderRadius: 10,
    paddingVertical: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  BtnText: {
    textTransform: "capitalize",
    color: "hsl(360,100%,100%)",
    marginLeft: 10,
    fontFamily: "GSemiBold",
    fontSize: 17,
  },
});
