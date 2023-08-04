import { Formik } from "formik";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validationSchema } from "../../hooks/schemaValidation";
import InputCustom from "./input.custom";

export default function FormLayout() {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  return (
    <View style={styles.form}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(`data: {${values.email}, ${values.password}}`);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <View>
              <InputCustom
                placeholder="James Bond"
                onChange={() => handleBlur("email")}
                onBlur={() => handleBlur("email")}
                value={values.email}
                autoComplete={"email"}
                keyboardType="email-address"
                secureTextEntry={false}
              />
              {errors.email && touched.email && errors.email}

              <InputCustom
                placeholder="P@55word"
                onChange={() => handleBlur("password")}
                onBlur={() => handleBlur("password")}
                value={values.password}
                autoComplete={"current-password"}
                secureTextEntry={true}
              />
              {errors.password && touched.password && errors.password}

              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 10,
                }}
              >
                <BouncyCheckbox
                  disableBuiltInState
                  size={17}
                  fillColor="gray"
                  isChecked={rememberMe}
                  onPress={() => setRememberMe(!rememberMe)}
                />
                <Text style={styles.remember}>Remember me</Text>
              </View>
              <Button onPress={() => handleSubmit} title="Submit" />
            </View>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: "100%",
    paddingHorizontal: 16,
  },
  remember: {
    color: "hsl(0,0%,0%)",
    fontFamily: "GMedium",
    fontSize: 17,
  },
});
