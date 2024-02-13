import * as Yup from "yup";

export const courseValidation = Yup.object({
    maKhoaHoc: Yup.string()
    .min(4, "Your course code must be at least 4 characters")
    .required("You must fill in this section"),
    // .test("isDuplicate", "Your account name is already taken", (value)=>{
    // })
    biDanh: Yup.string()
    .min(6, "Your aliases must be at least 6 characters")
    .required("You must fill in this section"),
    tenKhoaHoc: Yup.string()
    .min(11, "Your course name must be at least 4 characters")
    .required("You must fill in this section"),
    luotXem: Yup.number()
    .required("You must fill in this section"),
    hinhAnh: Yup.string()
    .min(30, "Your image must be at least 30 characters")
    .required("You must fill in this section"),
    ngayTao: Yup.string()
    .min(8, "Your date must be at least 8 characters")
    .required("You must fill in this section"),
    moTa: Yup.string()
    .min(30, "Your description must be at least 30 characters")
    .required("You must fill in this section"),
});
