import React from "react";
import { StyleSheet, View } from "react-native";

interface AuthDesign {
  text: string;
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal;
}

export default function AuthLayout(Props: AuthDesign) {
  return (
    <View style={styles.authContainer}>
      <View style={{ alignItems: "center" }}>
        <View style={styles.divider} />
        {Props.children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  authContainer: {
    width: "100%",
    backgroundColor: "hsl(360,100%,100%)",
    padding: 16,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    flex: 1,
  },
  divider: {
    backgroundColor: "hsl(0,0%,20%)",
    width: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
});
