import React from "react";
import { StyleSheet } from "react-native";
import { useAuthContext } from "../../context/authContext/createAuth.context";
import BottomTab from "./bottomNavigation/bottom.navigation";

const Homepage = () => {
  const { currentUser, onLogout } = useAuthContext();

  return <BottomTab />;
};

export default Homepage;

const styles = StyleSheet.create({});
