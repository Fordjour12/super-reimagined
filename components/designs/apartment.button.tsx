import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";

type ApartmentButton = {
  ApartmentType: string;
};

const apartmentButton = (Props: ApartmentButton) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        console.log("hello apartment");
      }}
    >
      <View
        style={{
          backgroundColor: "hsl(100,100%,10%)",
          borderRadius: 20,
          padding: 16,
          marginRight: 10,
        }}
      >
        <Text style={{ color: "white" }}>{Props.ApartmentType}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default apartmentButton;
