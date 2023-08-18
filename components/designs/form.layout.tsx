import { Formik } from "formik";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validationSchema } from "../../hooks/schemaValidation";
import globalConstant from "../constant/globalConstant";
import InputCustom from "./input.custom";

interface CustomForm {
  children?:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal;
  onSubmit: any;
}

export default function FormLayout(Props: CustomForm) {
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  return (
    <View style={styles.form}>
      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={Props.onSubmit}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
          }) => (
            <>
              <InputCustom
                autoComplete={"email"}
                onBlur={handleBlur("email")}
                onChange={handleChange("email")}
                placeholder="email"
                secureTextEntry={false}
                value={values.email}
                keyboardType="email-address"
              />
              {errors.email && touched.email && (
                <Text style={globalConstant.red}>{errors.email}</Text>
              )}

              <InputCustom
                placeholder="P@55word"
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                autoComplete={"current-password"}
                secureTextEntry={true}
              />

              {errors.password && touched.password && (
                <Text style={globalConstant.red}>{errors.password}</Text>
              )}
              {Props.children}
              <Button
                disabled={!isValid}
                onPress={() => handleSubmit()}
                title="Submit"
              />
            </>
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
