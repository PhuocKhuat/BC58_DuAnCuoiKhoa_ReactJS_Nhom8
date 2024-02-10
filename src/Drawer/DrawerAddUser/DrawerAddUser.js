import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import "./styleDrawerAddUser.css";
import { Formik, Form, Field, useFormik } from "formik";
import { addUserValidation } from "../../Validation/addUserValidation";

const DrawerAddUser = () => {
  const initialValues = {
    taiKhoan: "",
    hoTen: "",
    email: "",
    soDt: "",
    maLoaiNguoiDung: "",
  };
  const { handleChange, values, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: addUserValidation,
    onSubmit: (values) => {
      console.log("🚀 ~ DrawerAddUser ~ values:", values);
    },
  });
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="drawerAddUser">
      <Button type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
        Add User
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
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Add
            </Button>
          </Space>
        }
      >
        <Formik initialValues={initialValues} validationSchema={addUserValidation}>
          <Form onSubmit={handleSubmit} className="grid grid-cols-12 formDrawer">
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
              </div>
            </div>
            <div className="col-span-6 space-y-5 p-3">
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
            </div>
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
            </div>
            </div>
          </Form>
        </Formik>
      </Drawer>
    </div>
  );
};
export default DrawerAddUser;
