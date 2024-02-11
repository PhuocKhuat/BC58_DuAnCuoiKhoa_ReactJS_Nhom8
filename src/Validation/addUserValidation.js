import * as Yup from "yup";

export const addUserValidation = Yup.object({
  taiKhoan: Yup.string()
    .min(3, "Your account must be at least 3 characters")
    .required("You must fill in this section"),
  matKhau: Yup.string()
    .min(8, "Your name must be at least 8 characters")
    .required("You must fill in this section"),
  hoTen: Yup.string()
    .min(3, "Your full name must be at least 3 characters")
    .max(14, "Your full name must be at maximum 14 characters")
    .required("You must fill in this section"),
  soDt: Yup.string()
    .min(9, "Your phone number must be at min 9 characters")
    .max(10, "Your phone number must be at maximum 10 characters")
    .required("You must fill in this section"),
  maLoaiNguoiDung: Yup.string()
    .min(2, "Your user code must be at least 2 characters")
    .max(2, "Your user code must be at least 2 characters")
    .required("You must fill in this section"),
  maNhom: Yup.string()
    .min(4, "Your group code must be at least 4 characters")
    .max(4, "Your group code must be at least 4 characters")
    .required("You must fill in this section"),
  email: Yup.string()
    .min(14, "Your email must be at least 14 characters")
    .email("Invalid email")
    .required("You must fill in this section"),
});
