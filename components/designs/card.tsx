import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Bed from "../../assets/images/bed.svg";
import Location from "../../assets/images/location-pin.svg";
import Shower from "../../assets/images/shower.svg";

export type CardType = {
  id: string;
  Price: string;
  Name?: string;
  Address: string;
  "Year built": number;
  "packing slot": number;
  "Property Type": string;
  Images: {
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

const card = ({
  id,
  ImageURL,
  Price,
  PropertyType,
  Showers,
  Rooms,
  Address,
}) => {
  return (
    <View style={{ marginVertical: 10 }} key={id}>
      <Pressable onPress={() => console.log("Apartment pressed")}>
        <Image
          style={{
            borderTopRightRadius: 30,
            borderTopLeftRadius: 30,
            marginBottom: 7,
            objectFit: "contain",
          }}
          source={{
            uri: ImageURL,
          }}
          // width={40}
          height={250}
        />
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text>{Price}/year</Text>
            <Text style={{ marginHorizontal: 3 }}>|</Text>
            <Text>{PropertyType}</Text>
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
            {/* <Text style={{ fontFamily: "GBold", fontSize: 25 }}>
                {Name}
              </Text> */}

            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingRight: 5,
                }}
              >
                <Shower width={30} height={25} />
                <Text>{Showers}</Text>
              </View>

              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Bed width={25} height={25} />
                <Text>{Rooms}</Text>
              </View>
            </View>
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Location width={30} height={25} />
              <Text>{Address}</Text>
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default card;

const styles = StyleSheet.create({});
