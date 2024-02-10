import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Field, Form, Formik, useFormik } from "formik";
import { https } from "../../../Services/api";
import { useDispatch } from "react-redux";
import { setUpdateForm } from "../../../Redux/personalSlice";
import { updateValidate } from "./updateValidate";

const saveForm = ()=>{
 const storeValues = localStorage.getItem("FORM_USER");
 if(!storeValues){
  return{
    hoTen: "",
    matKhau: "",
    email: "",
    soDT: "",
    taiKhoan: "nguyenTest",
    maNhom: "GP09",
    maLoaiNguoiDung: "HV",
  };
 }
 return JSON.parse(storeValues);
}
const Modals = () => {
  const initialValues = saveForm();
  const { handleChange, values, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: updateValidate,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  React.useEffect(()=>{
    localStorage.setItem("FORM_USER", JSON.stringify(values));
  }, [values])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleUpdate = (infoUsers) => {
    console.log("🚀 ~ handleUpdate ~ infoUsers:", infoUsers);
    https
      .put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", infoUsers)
      .then((res) => {
        console.log(res);
        dispatch(setUpdateForm(res.data));
        setIsModalOpen(false);
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
        <Formik initialValues={initialValues} validationSchema={updateValidate}>
          <Form className="modalForm" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label>Full Name:</label>
              <Field
                name="hoTen"
                type="text"
                placeholder="Edit your full name"
                value={values.hoTen}
                onChange={handleChange}
              />
              {errors.hoTen && <p>{errors.hoTen}</p>}
            </div>
            <div className="flex flex-col">
              <label>Password:</label>
              <Field
                name="matKhau"
                type="password"
                placeholder="Edit your password"
                value={values.matKhau}
                onChange={handleChange}
              />
              {errors.matKhau && <p>{errors.matKhau}</p>}
            </div>
            <div className="flex flex-col">
              <label>Email:</label>
              <Field
                name="email"
                type="email"
                placeholder="Edit your email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <div className="flex flex-col">
              <label>Phone Number:</label>
              <Field
                name="soDT"
                type="string"
                placeholder="Edit your phone number"
                value={values.soDT}
                onChange={handleChange}
              />
              {errors.soDT && <p>{errors.soDT}</p>}
            </div>
            {(errors.hoTen || errors.matKhau || errors.email || errors.soDT) ? <button
              className="btnUpdate cursor-not-allowed font-bold"
              disabled
            >
              Update
            </button> : <button
              type="submit"
              onClick={() => {
                handleUpdate(values);
              }}
              className="btnUpdate"
            >
              Update
            </button>}
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};
export default Modals;