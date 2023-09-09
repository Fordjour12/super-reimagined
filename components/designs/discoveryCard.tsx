import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import data from "../../assets/data.json";

type DiscoveryCard = {
  Price: string;
  Address: string;
  "Year built": number;
  "packing slot": number;
  "Property Type": string;
  images: {
    "1": string;
    "2": string;
    "3": string;
  };
  Descrption: string;
  feature: {
    rooms: number;
    shower: number;
    "sq.ft": number;
  };
};

const discoveryCard = () => {
  return (
    <View style={{ marginVertical: 10 }}>
      {data.map((datalist) => (
        <Pressable onPress={() => console.log("Apartment pressed")}>
          <Image
            style={{
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              marginBottom: 7,
              objectFit: "contain",
            }}
            source={{
              uri: datalist.images[4],
            }}
            height={180}
          />
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "hsl(100,100%,10%)",
                  fontFamily: "GBold",
                  fontSize: 19,
                }}
              >
                {datalist.Price}/year
              </Text>
              <Text style={{ marginHorizontal: 3 }}>|</Text>
              <Text>{datalist["Property Type"]}</Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontFamily: "GBold", fontSize: 25 }}>
                {datalist.Name}
              </Text>
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default discoveryCard;

const styles = StyleSheet.create({});
