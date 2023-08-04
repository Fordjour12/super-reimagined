import React from "react";
import { KeyboardTypeOptions, StyleSheet, TextInput } from "react-native";

interface Input {
  onChange: () => void;
  onBlur: () => void;
  value: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  autoComplete: any;
  secureTextEntry: boolean;
}

export default function InputCustom(Props: Input) {
  return (
    <TextInput
      style={styles.input}
      placeholder={Props.placeholder}
      onBlur={Props.onBlur}
      onChangeText={Props.onChange}
      keyboardAppearance="default"
      autoCapitalize="none"
      autoComplete={Props.autoComplete}
      keyboardType={Props.keyboardType}
      secureTextEntry={Props.secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 16,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "hsla(0,0%,0%/0.50)",
    marginVertical: 10,
    fontFamily: "GSemiBold",
    fontSize: 17,
    
  },
});
