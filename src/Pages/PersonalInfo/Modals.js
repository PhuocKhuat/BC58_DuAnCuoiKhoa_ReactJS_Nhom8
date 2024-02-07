import React, { useState } from "react";
import { Button, Modal } from "antd";
import { useFormik } from "formik";
import * as Yup from "yup";

import { https } from "../../Services/api";
import { useDispatch } from "react-redux";
import { setUpdateForm } from "../../Redux/personalSlice";

const Modals = () => {
  const initialValues = {
    hoTen: "",
    matKhau: "",
    email: "",
    soDT: "",
    taiKhoan: "nguyenTest",
    maNhom: "GP09",
    maLoaiNguoiDung: "HV",
  }
  const {handleChange, values, handleSubmit, errors, touched} = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      hoTen: Yup.string()
        .min(3, "Your name must be at least 3 characters")
        .max(14, "Your name must be at least 14 characters")
        .required("You must fill in this section"),
      matKhau: Yup.string()
        .min(8, "Your name must be at least 8 characters")
        .max(12, "Your name must be at least 12 characters")
        .required("You must fill in this section"),
      email: Yup.string()
        .email('Invalid email')
        .required("You must fill in this section"),
      soDT: Yup.number()
        .min(9, "Your name must be at least 9 characters")
        .max(10, "Your name must be at least 10 characters"),
    }),
    onSubmit: values =>{
      console.log("values", values);
    },
    // handleChange : (e) => {
    //   formik.setFieldValue(e.target.value);
    // }
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleUpdate = (infoUsers) => {
    console.log("🚀 ~ handleUpdate ~ infoUsers:", infoUsers);
    https
      .put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", infoUsers)
      .then((res) => {
        console.log(res);
        dispatch(setUpdateForm(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="modals">
      <Button type="primary" className="btnModals" onClick={showModal}>
        <p>Personal Infomation</p>
      </Button>
      <Modal
        title="Edit personal information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className="modalForm" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label>Full Name:</label>
            <input
              name="hoTen"
              type="text"
              placeholder="Edit your full name"
              value={values.hoTen}
              onChange={handleChange}
            />
            {errors.hoTen && (<p>{errors.hoTen}</p>)}
          </div>
          <div className="flex flex-col">
            <label>Password:</label>
            <input
              name="matKhau"
              type="password"
              placeholder="Edit your password"
              value={values.matKhau}
              onChange={handleChange}
            />
            {errors.matKhau && (<p>{errors.matKhau}</p>)}
          </div>
          <div className="flex flex-col">
            <label>Email:</label>
            <input
              name="email"
              type="email"
              placeholder="Edit your email"
              value={values.email}
              onChange={handleChange}
            />
            {errors.email && (<p>{errors.email}</p>)}
          </div>
          <div className="flex flex-col">
            <label>Phone Number:</label>
            <input
              name="soDT"
              type="number"
              placeholder="Edit your phone number"
              value={values.soDT}
              onChange={handleChange}
            />
            {errors.soDT && (<p>{errors.soDT}</p>)}
          </div>
          <button type="submit"
            onClick={() => {
              handleUpdate(values); 
            }}
            className="btnUpdate"
          >
            Update
          </button>
        </form>
      </Modal>
    </div>
  );
};
export default Modals;
