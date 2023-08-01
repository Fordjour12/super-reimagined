import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Buttons {
  text: string;
  btnColor: Object;
}

export default function ButtonCustom(Props: Buttons) {
  return (
    <TouchableOpacity style={[styles.Btn, Props.btnColor]}>
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
    alignItems: "center",
  },
  BtnText: {
    fontWeight: "600",
    textTransform: "capitalize",
    color: "hsl(360,100%,100%)",
  },
});
