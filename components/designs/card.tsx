import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import data from "../../assets/data.json";
import Bed from "../../assets/images/bed.svg";
import Location from "../../assets/images/location-pin.svg";
import Shower from "../../assets/images/shower.svg";

type Card = {
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

const card = () => {
  return (
    <View style={{ marginVertical: 10 }}>
      {data.map((datalist) => (
        <View>
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
            // width={40}
            height={250}
          />
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text>{datalist.Price}/year</Text>
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

              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingRight: 5,
                  }}
                >
                  <Shower width={30} height={25} />
                  <Text>{datalist.feature["shower"]}</Text>
                </View>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Bed width={30} height={25} />
                  <Text>{datalist.feature["rooms"]}</Text>
                </View>
              </View>
            </View>
            <View>
              <View>
                <Location width={30} height={25} />
                <Text>{datalist.Address}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default card;

const styles = StyleSheet.create({});
