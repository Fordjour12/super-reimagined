import * as Yup from "yup";

const passwordRegex = /^[a-zA-Z0-9-_.!?@$%^*()+=&|~]{8,32}$/;

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .nonNullable()
    .email("Must be a valid email")
    .lowercase()
    .required(),
  password: Yup.string()
    .nonNullable()
    .min(8, "must be at least 8 characters long")
    .max(32, "Should be exactly 32 characters long")
    .matches(
      passwordRegex,
      "must have a least 1 capital letter, number,symbol with min value of 8 and max of 32"
    )
    .required(),
});
