import React from "react";
import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
} from "react-native";

type InputText = {
  onChange: (text: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  value: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  autoComplete: any;
  secureTextEntry: boolean;
};

const input = ({
  autoComplete,
  onBlur,
  onChange,
  placeholder,
  secureTextEntry,
  value,
  keyboardType,
}: InputText) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onBlur={onBlur}
      onChangeText={onChange}
      autoCapitalize="none"
      secureTextEntry={secureTextEntry}
      autoComplete={autoComplete}
      value={value}
      keyboardType={keyboardType}
      keyboardAppearance="default"
    />
  );
};

export default input;

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
