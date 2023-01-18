import * as yup from "yup";
export const FormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter you name")
    .min(3, "Name must be at least 3 characters")
    .max(10, "Name should not less than 10 characters"),
  email: yup.string().email().required("Please enter you email"),
  gender: yup.string().required("Please select Gender"),
});
