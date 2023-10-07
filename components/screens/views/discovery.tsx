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
import HomeSearch from "../../../assets/images/home.svg";
import ArrowUpRight from "../../../assets/images/arrow-up.svg";

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
                    backgroundColor: "hsl(0, 0%, 100%)",
                    zIndex: 10,
                    position: "absolute",
                    top: "35%",
                    alignSelf: "center",
                    borderRadius: 12,
                    paddingHorizontal: 16,
                    paddingVertical: 12,
                }}
            >

                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingBottom: 15 }}>
                    <Text style={{ fontFamily: "GExtraBold" }}>Recent Searches</Text>
                    {/* see all -> button */}
                    <Text style={{ fontFamily: "GRegular" }}>Sell All</Text>
                </View>
                <View>
                    {/* Test Data must be occupied */}
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingBottom: 20
                        }}>
                        <View
                            style={{
                                height: 40,
                                width: 40,
                                borderRadius: 50,
                                backgroundColor: "hsla(0,0%,0%,0.6)",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>

                            <HomeSearch stroke="black" />
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontFamily: "GBold" }}>Jakarta Home</Text>
                            <Text style={{ fontFamily: "GMedium" }}>Kota Lama Street 10, Jakarta </Text>
                        </View>
                        <View style={{ backgroundColor: "white", width: 30, height: 30 }} >
                            <ArrowUpRight />
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            paddingBottom: 20
                        }}>
                        <View
                            style={{
                                height: 40,
                                width: 40,
                                borderRadius: 50,
                                backgroundColor: "hsla(0,0%,0%,0.6)",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>

                            <HomeSearch stroke="black" />
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, fontFamily: "GBold" }}>Jakarta Home</Text>
                            <Text style={{ fontFamily: "GMedium" }}>Kota Lama Street 10, Jakarta </Text>
                        </View>
                        <View style={{ backgroundColor: "white", width: 30, height: 30 }} >
                            <ArrowUpRight />
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ position: "relative" }}>
                <Text style={{ fontSize: 25, fontFamily: "GBold", marginTop: 90 }}>
                    Recommended for you
                </Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ paddingHorizontal: 10 }}
                >
                    {/* TODO: Make a db call and splice in the data here to populate this place */}
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

