import * as Yup from "yup";

export const addUserValidation = Yup.object({
  taiKhoan: Yup.string()
    .min(3, "Your account must be at least 3 characters")
    .required("You must fill in this section"),
  hoTen: Yup.string()
    .min(3, "Your account must be at least 3 characters")
    .max(14, "Your name must be at maximum 14 characters")
    .required("You must fill in this section"),
  email: Yup.string()
    .min(14, "Your account must be at least 14 characters")
    .email("Invalid email")
    .required("You must fill in this section"),
  soDt: Yup.string()
    .min(9, "Your name must be at min 9 characters")
    .max(10, "Your name must be at maximum 10 characters")
    .required("You must fill in this section"),
  maLoaiNguoiDung: Yup.string()
    .min(2, "Your account must be at least 2 characters")
    .max(2, "Your account must be at least 2 characters")
    .required("You must fill in this section"),
});
