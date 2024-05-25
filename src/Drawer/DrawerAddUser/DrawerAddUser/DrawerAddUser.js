import React, { useState } from "react";
import { Button, Drawer, Space, message } from "antd";
import "./styleDrawerAddUser.css";
import { Formik, Form, Field, useFormik } from "formik";
import { addUserValidation } from "../../../Validation/addUserValidation";
import { https } from "../../../Services/api";
import { useDispatch } from "react-redux";
import { fetchAdminUser } from "../../../Redux/adminUserSliceThunk";

const saveFormAddUser = ()=>{
  const storeAddUser = localStorage.getItem("FORM_ADD_USER");
  if(storeAddUser){
  return JSON.parse(storeAddUser);
  }
  return {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDt: "",
    maLoaiNguoiDung: "",
    maNhom: "",
    email: "",
  };
}
const saveFormErrorAddUser = ()=>{
  const storeErrorAddUser = localStorage.getItem("FORM_ERROR_ADD_USER");
  if(storeErrorAddUser){
    return JSON.parse(storeErrorAddUser);
  }
}

const DrawerAddUser = () => {
  const [open, setOpen] = useState(false);
  const { handleChange, values, handleSubmit, errors } = useFormik({
    initialValues: saveFormAddUser(),
    validationSchema: addUserValidation,
    initialErrors: saveFormErrorAddUser(),
    onSubmit: (values) => {
      console.log("🚀 ~ DrawerAddUser ~ values:", values);
    },
  });
  React.useEffect(()=>{
    localStorage.setItem("FORM_ADD_USER", JSON.stringify(values))
  }, [values]);
  React.useEffect(()=>{
    localStorage.setItem("FORM_ERROR_ADD_USER", JSON.stringify(errors))
  }, [errors]);
  const dispatch = useDispatch();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleAddUser = (infoUser) => {
    https
      .post("/api/QuanLyNguoiDung/ThemNguoiDung", infoUser)
      .then((res) => {
        console.log(res);
        message.success("Add user successfully");
        onClose();
        dispatch(fetchAdminUser());
      })
      .catch((err) => {
        console.log(err);
        message.error(err.response.data);
      });
  };
  return (
    <div className="drawerAddUser mb-3">
      <Button type="primary" onClick={showDrawer}>
        <i className="fa fa-plus plusUser"></i>
        <span className="addUser">Add User</span>
      </Button>
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            {((errors.taiKhoan || errors.matKhau || errors.hoTen || errors.soDt || errors.maLoaiNguoiDung || errors.maNhom || errors.email) && (values.taiKhoan === ""|| values.matKhau === ""|| values.hoTen === ""|| values.soDt === ""|| values.maLoaiNguoiDung === ""|| values.maNhom === ""|| values.email)) ? <Button
              disabled
              className="btnNotAllowed"
              type="primary"
            >
              <span className="spanAdd">Add</span>
            </Button> : <Button
              onClick={() => {
                handleAddUser(values);
              }}
              type="primary"
            >
              <span className="spanAdd">Add</span>
            </Button>}
          </Space>
        }
      >
        <Formik
          initialValues={saveFormAddUser()}
          validationSchema={addUserValidation}
          initialErrors={saveFormErrorAddUser()}
        >
          <Form
            onSubmit={handleSubmit}
            className="grid grid-cols-12 formDrawer"
          >
            <div className="col-span-6 space-y-5 p-3">
              <div className="flex flex-col space-y-3">
                <label>Account</label>
                <Field
                  name="taiKhoan"
                  type="text"
                  className="fieldInput"
                  value={values.taiKhoan}
                  onChange={handleChange}
                  placeholder="Please enter the user's account"
                />
                {errors.taiKhoan && (
                  <p className="text-red-500">{errors.taiKhoan}</p>
                )}
              </div>
              <div className="flex flex-col space-y-3">
                <label>Password</label>
                <Field
                  name="matKhau"
                  type="text"
                  className="fieldInput"
                  value={values.matKhau}
                  onChange={handleChange}
                  placeholder="Please enter the user's password"
                />
                {errors.matKhau && (
                  <p className="text-red-500">{errors.matKhau}</p>
                )}
              </div>
              <div className="flex flex-col space-y-3">
                <label>Full Name</label>
                <Field
                  name="hoTen"
                  type="text"
                  className="fieldInput"
                  value={values.hoTen}
                  onChange={handleChange}
                  placeholder="Please enter the user's full name"
                />
                {errors.hoTen && <p className="text-red-500">{errors.hoTen}</p>}
              </div>
              <div className="flex flex-col space-y-3">
                <label>Phone Number</label>
                <Field
                  name="soDt"
                  type="text"
                  className="fieldInput"
                  value={values.soDt}
                  onChange={handleChange}
                  placeholder="Please enter the user's phone number"
                />
                {errors.soDt && <p className="text-red-500">{errors.soDt}</p>}
              </div>
            </div>
            <div className="col-span-6 space-y-5 p-3">
              <div className="flex flex-col space-y-3">
                <label>User type code</label>
                <Field
                  name="maLoaiNguoiDung"
                  as="select"
                  className="fieldInput"
                  value={values.maLoaiNguoiDung}
                  onChange={handleChange}
                  placeholder="Please enter the user's type code"
                >
                  <option>GV</option>
                  <option>HV</option>
                </Field>
                {errors.maLoaiNguoiDung && (
                  <p className="text-red-500">{errors.maLoaiNguoiDung}</p>
                )}
              </div>
              <div className="flex flex-col space-y-3">
                <label>Group Code</label>
                <Field
                  name="maNhom"
                  as="select"
                  className="fieldInput"
                  value={values.maNhom}
                  onChange={handleChange}
                  placeholder="Please enter the user's group code"
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </Field>
                {errors.maNhom && (
                  <p className="text-red-500">{errors.maNhom}</p>
                )}
              </div>
              <div className="flex flex-col space-y-3">
                <label>Email</label>
                <Field
                  name="email"
                  type="text"
                  className="fieldInput"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Please enter the user's email"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
            </div>
          </Form>
        </Formik>
      </Drawer>
    </div>
  );
};
export default DrawerAddUser;
