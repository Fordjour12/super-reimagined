import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DiscoveryIcon from "../../../assets/images/bt-disco.svg";
import Card from "../../designs/card";

const image = require("../../../assets/images/discov-2.jpg");

const Discovery = () => {
  const inset = useSafeAreaInsets();
  return (
    <ScrollView style={{ backgroundColor: "hsla(260, 53%, 10%,0.5)", flex: 1 }}>
      <ImageBackground source={image} style={{ height: 400, width: "100%" }}>
        <View
          style={{
            position: "absolute",
            backgroundColor: "hsla(0,0%,20%,0.6)",
            width: "100%",
            height: 400,
          }}
        />

        <View style={{ paddingTop: 100, zIndex: 10, paddingHorizontal: 16 }}>
          {/*  backicon with title on discovery */}
          <Text
            style={{
              fontSize: 30,
              fontFamily: "GExtraBold",
              color: "white",
              width: "70%",
              marginBottom: 20,
            }}
          >
            Discover 1,467 top listings
          </Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 10,
              borderWidth: 2,
              borderColor: "white",
              borderRadius: 10,
              backgroundColor: "white",
            }}
          >
            <DiscoveryIcon width={30} height={20} style={{ marginRight: 5 }} />
            <TextInput
              placeholder="Search location"
              editable={true}
              inputMode="search"
            />
          </View>
        </View>
      </ImageBackground>
      <View>
        <Text style={{ fontSize: 25, fontFamily: "GBold", marginTop: 70 }}>
          Recommended for you
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 10 }}
        >
          <Card />
          <View style={{ paddingHorizontal: 10 }} />
          <Card />
          <View style={{ paddingHorizontal: 10 }} />
          <Card />
          <View style={{ paddingHorizontal: 10 }} />
          <Card />
          <View style={{ paddingHorizontal: 10 }} />
          <Card />
          <View style={{ paddingHorizontal: 10 }} />
          <Card />
          <View style={{ paddingHorizontal: 10 }} />
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Discovery;

const styles = StyleSheet.create({});
