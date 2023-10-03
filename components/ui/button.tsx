import React, { ReactElement } from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text } from "react-native";

type Button = {
  text: string;
  icon?: ReactElement;
  onPress?: () => void;
  btnStyle: Object;
  loading?: boolean;
  disabled?: boolean;
};

const button = ({
  disabled,
  loading,
  text,
  icon,
  onPress,
  btnStyle,
}: Button) => {
  return (
    <Pressable
      style={[btnStyle, styles.btn]}
      disabled={disabled}
      onPress={loading ? null : onPress}
    >
      {loading ? (
        <ActivityIndicator color="hsl(360,100%,100%)" />
      ) : (
        <>
          {icon}
          <Text style={styles.btnText}>{text}</Text>
        </>
      )}
    </Pressable>
  );
};

export default button;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 40,
    flexDirection: "row",
    width: "100%",
    paddingVertical: 16,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    textTransform: "capitalize",
    color: "hsl(360,100%,100%)",
    marginLeft: 10,
    fontFamily: "GSemiBold",
    fontSize: 17,
  },
});
