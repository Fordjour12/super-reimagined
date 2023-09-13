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
import DiscoveryCard from "../../designs/discoveryCard";

const image = require("../../../assets/images/discov-2.jpg");

const Discovery = () => {
  const inset = useSafeAreaInsets();
  return (
    <View
      style={{
        backgroundColor: "hsl(225, 37%, 94%)",
        flex: 1,
      }}
    >
      <ImageBackground source={image} style={{ height: 400, width: "100%" }}>
        <View
          style={{
            position: "absolute",
            backgroundColor: "hsla(0,0%,20%,0.6)",
            width: "100%",
            height: 400,
          }}
        />

        <View style={{ paddingTop: 90, zIndex: 10, paddingHorizontal: 16 }}>
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
      <View
        style={{
          width: "90%",
          height: 200,
          //  bgcolor => hsl(225,39%,99%)
          backgroundColor: "hsla(0, 0%, 20%,0.7)",
          zIndex: 10,
          position: "absolute",
          top: "35%",
          alignSelf: "center",
          borderRadius: 12,
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text>Recent Searches</Text>
          {/* see all -> button */}
          <Text>Sell All</Text>
        </View>
        <View>
          <Text>home searches here</Text>
        </View>
      </View>
      <View style={{ position: "relative" }}>
        <Text style={{ fontSize: 25, fontFamily: "GBold", marginTop: 70 }}>
          Recommended for you
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ paddingHorizontal: 10 }}
        >
          <DiscoveryCard />
          <View style={{ paddingHorizontal: 10 }} />
          <DiscoveryCard />
          <View style={{ paddingHorizontal: 10 }} />
          <DiscoveryCard />
          <View style={{ paddingHorizontal: 10 }} />
          <DiscoveryCard />
          <View style={{ paddingHorizontal: 10 }} />
          <DiscoveryCard />
          <View style={{ paddingHorizontal: 10 }} />
          <DiscoveryCard />
          <View style={{ paddingHorizontal: 10 }} />
        </ScrollView>
      </View>
    </View>
  );
};

export default Discovery;

const styles = StyleSheet.create({});
