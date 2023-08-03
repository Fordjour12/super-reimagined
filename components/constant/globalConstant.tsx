import { StyleSheet } from "react-native";

export default StyleSheet.create({
  google: {
    backgroundColor: "blue",
  },
  facebook: {
    backgroundColor: "skyblue",
  },
  email: {
    backgroundColor: "black",
  },
  blue: {
    color: "#060d11",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 70,
    color: "white",
    fontFamily: "GBold",
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "hsla(0,0%,0%/.60)",
    width: "100%",
  },
  sub_intro: {
    fontSize: 18,
    paddingTop: 10,
    color: "white",
    fontFamily: "GSemiBold",
  },
  login_bg: {
    backgroundColor: "black",
    width: "100%",
  },
  account: {
    fontFamily: "GSemiBold",
    fontSize: 18,
  },
});
