import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import "./styleDrawerAddUser.css";
import { Formik, Form, Field, useFormik } from "formik";
import { addUserValidation } from "../../Validation/addUserValidation";
import { https } from "../../Services/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminUser } from "../../Redux/adminUserSliceThunk";

const DrawerEditUser = ({ editUserInfo }) => {
  console.log("🚀 ~ DrawerEditUser ~ editUserInfo:", editUserInfo);
  const initialValues = {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDt: "",
    maLoaiNguoiDung: "",
    maNhom: "",
    email: "",
  };
  //   const {} = useSelector(state => state.Slice)
  const { handleChange, values, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: addUserValidation,
    onSubmit: (values) => {
      console.log("🚀 ~ DrawerAddUser ~ values:", values);
    },
  });
  const [open, setOpen] = useState(false);
  const { editUser } = useSelector((state) => state.adminUserSliceThunk);
  console.log("🚀 ~ DrawerEditUser ~ editUser:", editUser);
  const dispatch = useDispatch();
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleUpdateUser = (infoUser) => {
    https
      .put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", infoUser)
      .then((res) => {
        console.log(res);
        dispatch(fetchAdminUser());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEditUser = () => {
    values.taiKhoan = editUserInfo.taiKhoan;
    values.hoTen = editUserInfo.hoTen;
    values.email = editUserInfo.email;
    values.soDt = editUserInfo.soDt;
    values.maLoaiNguoiDung = editUserInfo.maLoaiNguoiDung;
    values.matKhau = editUserInfo.matKhau;
    values.maNhom = editUserInfo.maNhom;
    showDrawer();
  };
  return (
    <div className="drawerAddUser">
      <EditOutlined className="text-yellow-500" onClick={handleEditUser} />
      <Drawer
        title="Update a account"
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
            <Button onClick={onClose}>Cancel</Button>
            {errors.taiKhoan || errors.matKhau || errors.hoTen || errors.soDt || errors.maLoaiNguoiDung || errors.maNhom || errors.email ? <Button
              disabled
              className="btnNotAllowed"
            >
              Update
            </Button> : 
            <Button
            onClick={() => {
              handleUpdateUser(values);
            }}
          >
            Update
          </Button>
            } 
            
          </Space>
        }
      >
        <Formik
          initialValues={initialValues}
          validationSchema={addUserValidation}
        >
          <Form
            onSubmit={handleSubmit}
            className="grid grid-cols-12 formDrawer"
          >
            <div className="col-span-6 space-y-5 p-3">
              <div className="flex flex-col space-y-3">
                <label>Account</label>
                {handleEditUser ? 
                  <Field
                  type="text"
                  className="fieldInput bg-gray-300 cursor-not-allowed"
                  value={values.taiKhoan}
                  disabled
                /> : <Field
                name="taiKhoan"
                type="text"
                className="fieldInput"
                value={values.taiKhoan}
                onChange={handleChange}
                placeholder="Please enter the user's account"
              />
                }
                
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
                  type="text"
                  className="fieldInput"
                  value={values.maLoaiNguoiDung}
                  onChange={handleChange}
                  placeholder="Please enter the user's type code"
                />
                {errors.maLoaiNguoiDung && (
                  <p className="text-red-500">{errors.maLoaiNguoiDung}</p>
                )}
              </div>
              <div className="flex flex-col space-y-3">
                <label>Group Code</label>
                <Field
                  name="maNhom"
                  type="text"
                  className="fieldInput"
                  value={values.maNhom}
                  onChange={handleChange}
                  placeholder="Please enter the user's group code"
                />
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
export default DrawerEditUser;
