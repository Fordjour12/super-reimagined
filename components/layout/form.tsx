import { Formik } from "formik";
import { ReactElement } from "react";
import { Platform, StyleSheet, Text, UIManager, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { validationSchema } from "../../hooks/schemaValidation";
import globalConstant from "../constant/globalConstant";
import Button from "../ui/button";
import Input from "../ui/input";

type FormLayout = {
  children: ReactElement;
  onSubmit: () => any;
  loadingState: boolean;
};

const form = ({ onSubmit, children, loadingState }: FormLayout) => {
  if (
    Platform.OS === "android" &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  return (
    <View>
      <KeyboardAwareScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.form}
      >
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
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
              <Input
                autoComplete={"email"}
                onBlur={handleBlur("email")}
                onChange={handleChange("email")}
                placeholder="email"
                secureTextEntry={false}
                value={values.email}
                keyboardType="email-address"
              />

              {errors.email && touched.email && (
                <Text style={globalConstant.warning}>{errors.email}</Text>
              )}

              <Input
                placeholder="P@55word"
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                autoComplete={"current-password"}
                secureTextEntry={true}
              />

              {errors.password && touched.password && (
                <Text style={globalConstant.warning}>{errors.password}</Text>
              )}

              {children}

              {isValid ? (
                <Button
                  btnStyle={globalConstant.email}
                  text="submit"
                  loading={loadingState}
                  onPress={() => handleSubmit()}
                  disabled={!isValid}
                />
              ) : (
                <Button
                  btnStyle={styles.gray}
                  text="submit"
                  onPress={() => handleSubmit()}
                  disabled={isValid}
                />
              )}
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default form;

const styles = StyleSheet.create({
  form: {
    paddingHorizontal: 16,
    width: "100%",
  },
  gray: {
    backgroundColor: "hsl(0,0%,20%)",
  },
});
