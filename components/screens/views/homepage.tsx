import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DiscoveryIcon from "../../../assets/images/bt-disco.svg";
import { Firebase_db } from "../../../firebase.conf";
import Card from "../../designs/card";

const Homepage = () => {
  const inset = useSafeAreaInsets();
  const [dataList, setDataList] = useState<any[]>([]);

  const getAllDBData = async () => {
    const db = Firebase_db;

    const docRef = collection(db, "building");
    onSnapshot(docRef, {
      next(snapshot) {
        const docItem: any[] = [];
        snapshot.docs.forEach((docData) => {
          docItem.push({
            id: docData.id,
            // items: docData.data(),
            ...docData.data(),
          });
        });
        console.log("docItem", docItem);
        setDataList(docItem);
      },
    });
  };

  useEffect(() => {
    return () => {
      getAllDBData();
    };
  }, []);

  return (
    <View style={{ paddingTop: inset.top, marginHorizontal: 16 }}>
      <View style={{ flexDirection: "row", alignItems: "flex-start" }}>
        <Text
          style={{
            textTransform: "capitalize",
            fontFamily: "GExtraBold",
            fontSize: 30,
            width: "60%",
          }}
        >
          Find your best real estate
        </Text>

        <Text>Icons</Text>
      </View>

      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            borderWidth: 2,
            borderColor: "gary",
          }}
        >
          <DiscoveryIcon width={30} height={20} style={{ marginRight: 5 }} />
          <TextInput
            placeholder="Search location"
            editable={true}
            inputMode="search"
          />
        </View>

        <View style={{ paddingVertical: 16 }}>
          <Text>4 button here use TouchableOpacitywithoutfeedback </Text>
        </View>
      </View>

      <ScrollView
        alwaysBounceHorizontal={true}
        bounces={true}
        decelerationRate={"fast"}

      >
        <Text style={{ fontFamily: "GBold", fontSize: 24 }}>Popular</Text>

        {/* {dataList.map((i) => (
          <View>
            <Text key={i.id}>{i.id}</Text>
            <Text>{i.address}</Text>
            <Text>{i.features.beds}</Text>
            <Text>{i.features.shower}</Text>
            <Text>{i.features.toilets}</Text>
          </View>
        ))} */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
