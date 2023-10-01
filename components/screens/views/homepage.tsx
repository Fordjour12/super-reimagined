import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DiscoveryIcon from "../../../assets/images/bt-disco.svg";
import NotificationIcon from "../../../assets/images/notification.svg";
import { Firebase_db } from "../../../firebase.conf";
import ApartmentButton from "../../designs/apartment.button";
import Card, { type CardType } from "../../designs/card";

const Homepage = () => {
    const inset = useSafeAreaInsets();
    const [dataList, setDataList] = useState<any[]>([]);

    //    const db = Firebase_db;
    // 	const querySnapshot = await getDocs(collection(db, "cities"));
    //   querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data());
    //   });

    const getAllDBData = async () => {
        const db = Firebase_db;

        const docRef = collection(db, "building-db");
        const querySnapshot = await getDocs(docRef)
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
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
    };

    useEffect(() => {
        return () => {
            getAllDBData();
        };
    }, []);

    return (
        // <ScrollView decelerationRate={"fast"} alwaysBounceHorizontal={true} bounces={true}>
        //     <Text style={{ fontSize: 50, paddingVertical: 16 }}>Hello World </Text>
        //     {dataList && dataList.map((items) => (

        //         <View style={{ paddingVertical: 20, paddingHorizontal: 17 }} key={items.id}>
        //             <Image source={{
        //                 uri: items.Images[4],
        //             }} height={250} />

        //             <Text style={{ fontSize: 16 }}>{items.Price}</Text>
        //             <Text style={{ fontSize: 16 }}>{items["Property Type"]}</Text>
        //             <Text style={{ fontSize: 16 }}>{items.Address}</Text>
        //             <Text style={{ fontSize: 16 }}>{items.feature["rooms"]}</Text>
        //             <Text style={{ fontSize: 16 }}>{items.feature["showers"]}</Text>
        //             <Text style={{ fontSize: 16 }}>{items.Address}</Text>

        //         </View>

        //     ))}

        // </ScrollView>

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

                <View>
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
            >
                <Text style={{ fontFamily: "GBold", fontSize: 24, marginBottom: 16 }}>
                    Popular
                </Text>
                {/* datalist here */}
                {dataList &&
                    dataList.map((items: CardType) => (
                        <>
                            {/* <View
                style={{ paddingVertical: 20, paddingHorizontal: 17 }}
                key={items.id}
              >
                <Image
                  source={{
                    uri: items.Images[4],
                  }}
                  height={250}
                /> 

                <Text style={{ fontSize: 16 }}>{items.Price}</Text>
                <Text style={{ fontSize: 16 }}>{items["Property Type"]}</Text>
                <Text style={{ fontSize: 16 }}>{items.Address}</Text>
                <Text style={{ fontSize: 16 }}>{items.feature["rooms"]}</Text>
                <Text style={{ fontSize: 16 }}>{items.feature["showers"]}</Text>
                <Text style={{ fontSize: 16 }}>{items.Address}</Text>
              </View> */}
                            <Card
                                ImageURL={items.Images[4]}
                                Address={items.Address}
                                // Name={items.Name}
                                Price={items.Price}
                                id={items.id}
                                Room={items.feature["rooms"]}
                                Shower={items.feature["showers"]}
                                key={items.id}
                                PropertyType={items["Property Type"]}
                            />
                        </>
                    ))}
            </ScrollView>
        </View>
    );
};

export default Homepage;

const styles = StyleSheet.create({});
