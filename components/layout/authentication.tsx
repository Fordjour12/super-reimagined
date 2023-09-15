import React, {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
} from "react";
import { StyleSheet, View } from "react-native";

type AuthenticationLayout = {
  children:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | Iterable<ReactNode>
    | ReactPortal;
};

const authentication = ({ children }: AuthenticationLayout) => {
  return (
    <View style={styles.authenticationLayout}>
      <View style={styles.divider} />
      <View>{children}</View>
    </View>
  );
};

export default authentication;

const styles = StyleSheet.create({
  authenticationLayout: {
    width: "100%",
    backgroundColor: "hsl(360,100%,100%)",
    padding: 16,
    borderTopEndRadius: 50,
    borderTopStartRadius: 50,
  },
  divider: {
    backgroundColor: "hsl(0,0%,20%)",
    width: 100,
    height: 10,
    borderRadius: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
});
