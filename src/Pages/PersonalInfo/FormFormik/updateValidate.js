import * as Yup from "yup";

export const updateValidate = Yup.object({
  hoTen: Yup.string()
    .min(3, "Your name must be at least 3 characters")
    .max(14, "Your name must be at maximum 14 characters")
    .required("You must fill in this section"),
  matKhau: Yup.string()
    .min(8, "Your name must be at least 8 characters")
    .required("You must fill in this section"),
  email: Yup.string()
    .email("Invalid email")
    .required("You must fill in this section"),
  soDT: Yup.string()
    .min(9, "Your name must be at min 9 characters")
    .max(10, "Your name must be at maximum 10 characters")
    .required("You must fill in this section"),
});
