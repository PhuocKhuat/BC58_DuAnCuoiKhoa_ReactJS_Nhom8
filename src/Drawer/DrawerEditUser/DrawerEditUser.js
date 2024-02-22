import React, { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { Button, Drawer, Space, message } from "antd";
import "../DrawerAddUser/DrawerAddUser/styleDrawerAddUser.css";
import { Formik, Form, Field, useFormik } from "formik";
import { addUserValidation } from "../../Validation/addUserValidation";
import { https } from "../../Services/api";
import { useDispatch } from "react-redux";
import { fetchAdminUser } from "../../Redux/adminUserSliceThunk";

const DrawerEditUser = ({ editUserInfo }) => {
  // console.log("🚀 ~ DrawerEditUser ~ editUserInfo:", editUserInfo);
  const [open, setOpen] = useState(false);
  const [userUpdate, setUserUpdate] = useState({});
  const dispatch = useDispatch();
  const getUpdateUser = (user) => {
    user && setUserUpdate(user);
  };
  const initialValues = {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDt: "",
    maLoaiNguoiDung: "",
    maNhom: "",
    email: "",
  };
  const { handleChange, values, handleSubmit, errors, setValues, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: addUserValidation,
      onSubmit: (values) => {
        console.log("🚀 ~ DrawerAddUser ~ values:", values);
      },
    });
  useEffect(() => {
    setValues({
      taiKhoan: userUpdate.taiKhoan,
      matKhau: userUpdate.matKhau,
      hoTen: userUpdate.hoTen,
      soDt: userUpdate.soDt,
      maLoaiNguoiDung: userUpdate.maLoaiNguoiDung,
      maNhom: userUpdate.maNhom,
      email: userUpdate.email,
    });
  }, [userUpdate]);
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
        message.success("Update successfully");
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
        message.error("Update failed");
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
      <EditOutlined
        className="text-yellow-500"
        onClick={() => {
          showDrawer();
          getUpdateUser(editUserInfo);
        }}
      />
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
            {errors.taiKhoan ||
            errors.matKhau ||
            errors.hoTen ||
            errors.soDt ||
            errors.maLoaiNguoiDung ||
            errors.maNhom ||
            errors.email ? (
              <Button disabled className="btnNotAllowed">
                Update
              </Button>
            ) : (
              <Button
                onClick={() => {
                  handleUpdateUser(values);
                }}
              >
                Update
              </Button>
            )}
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
                {handleEditUser ? (
                  <Field
                    onBlur={handleBlur}
                    type="text"
                    className="fieldInput bg-gray-300 cursor-not-allowed"
                    value={values.taiKhoan}
                    disabled
                  />
                ) : (
                  <Field
                    onBlur={handleBlur}
                    name="taiKhoan"
                    type="text"
                    className="fieldInput"
                    value={values.taiKhoan}
                    onChange={handleChange}
                    placeholder="Please enter the user's account"
                  />
                )}

                {errors.taiKhoan && (
                  <p className="text-red-500">{errors.taiKhoan}</p>
                )}
              </div>
              <div className="flex flex-col space-y-3">
                <label>Password</label>
                <Field
                  onBlur={handleBlur}
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
                  onBlur={handleBlur}
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
                  onBlur={handleBlur}
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
                  onBlur={handleBlur}
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
                  onBlur={handleBlur}
                  name="maNhom"
                  as="select"
                  className="fieldInput h-9"
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
                  onBlur={handleBlur}
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
