import { Formik } from "formik";
import React from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUp() {
  return (
    // <View>
    //   <Text>signup</Text>
    // </View>

    <View style={styles.container}>
      <SafeAreaView>
        <Formik
          initialValues={{ email: "" }}
          onSubmit={(values) => console.log(values)}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => {
            return (
              <View>
                <TextInput
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />

                {/* <Button onPress={handleSubmit} title="Submit" /> */}

                <View style={styles.Btn}>
                  <Button
                    onPress={() => handleSubmit}
                    title="Learn More"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                  />
                </View>
              </View>
            );
          }}
        </Formik>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Btn: {
    // flex: 1,
    justifyContent: "center",
    padding: 16,
  },
});
