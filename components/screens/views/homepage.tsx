import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DiscoveryIcon from "../../../assets/images/bt-disco.svg";
import NotificationIcon from "../../../assets/images/notification.svg";
import ApartmentButton from "../../designs/apartment.button";

const Homepage = () => {
  const inset = useSafeAreaInsets();
  const [dataList, setDataList] = useState<any[]>([]);
  const [Loading, setLoading] = useState<boolean>(false);
  /**
   *  Todo: onSnapShot
   * */
  // onSnapshot(docRef, {
  //   next(snapshot) {
  //     const docItem: any[] = [];
  //     snapshot.docs.forEach((docData) => {
  //       docItem.push({
  //         id: docData.id,
  //         // items: docData.data(),
  //         ...docData.data(),
  //       });
  //     });
  //     console.log("docItem", docItem);
  //     setDataList(docItem);
  //   },
  // });
  //   };

  setLoading(false);

  // useEffect(() => {
  //   const getAllDBData = async () => {
  //     const db = Firebase_db;
  //     let d = [];
  //     const docRef = collection(db, "building-db");
  //     const querySnapshot = await getDocs(query(docRef, limit(10)));
  //     querySnapshot.forEach((doc) => {
  //       d.push(doc.data());
  //     });
  //     setDataList(d);
  //   };

  //   // return () => {
  //   getAllDBData();
  //   // };
  // }, [Firebase_db]);

  return (
    <View style={{ paddingTop: inset.top, marginHorizontal: 16 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-start",
          marginVertical: 16,
          justifyContent: "space-between",
        }}
      >
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

        <NotificationIcon width={60} height={25} />
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingVertical: 10,
            borderWidth: 2,
            borderColor: "gary",
            borderRadius: 10,
          }}
        >
          <DiscoveryIcon width={30} height={20} style={{ marginRight: 5 }} />
          <TextInput
            placeholder="Search location"
            editable={true}
            inputMode="search"
          />
        </View>

        <View
          style={{
            backgroundColor: "hsla(0, 0%, 73%,.3 )",
            // borderBottomRightRadius: 10,
            // borderBottomLeftRadius: 10,
          }}
        >
          <ScrollView
            horizontal
            style={{ paddingVertical: 16 }}
            showsHorizontalScrollIndicator={false}
          >
            <ApartmentButton ApartmentType="condos" />
            <ApartmentButton ApartmentType="Apartment" />
            <ApartmentButton ApartmentType="condos" />
            <ApartmentButton ApartmentType="condos" />
            <ApartmentButton ApartmentType="condos" />
            <ApartmentButton ApartmentType="condos" />
            <ApartmentButton ApartmentType="Residential" />
          </ScrollView>
        </View>
      </View>
      <ScrollView
        alwaysBounceHorizontal={true}
        bounces={true}
        decelerationRate={"fast"}
        showsVerticalScrollIndicator={false}
      >
        <Text
          style={{
            fontFamily: "GBold",
            fontSize: 24,
            marginBottom: 16,
          }}
        >
          Popular
        </Text>

        <View style={{ height: inset.bottom }}>
          {/* {Loading ? (
            dataList.map((items) => (
              <Card
                ImageURL={items.Images[4]}
                id={items.id}
                Price={items.Price}
                PropertyType={items["Property Type"]}
                Address={items.Address}
                Rooms={items.feature["rooms"]}
                Showers={items.feature["shower"]}
              />
            ))
          ) : (
            <Text>Hello</Text>
          )} */}
        </View>
      </ScrollView>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
