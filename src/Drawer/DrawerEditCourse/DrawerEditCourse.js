import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import "./styleDrawerEditCourse.css";

import { Button, Drawer, Space } from "antd";
import { Field, Form, Formik, useFormik } from "formik";
import { courseValidation } from "../../Validation/courseValidation";
const DrawerEditCourse = () => {
  const [open, setOpen] = useState(false);
  const initialValues = {
    maKhoaHoc: "",
    biDanh: "",
    tenKhoaHoc: "",
    luotXem: 0,
    moTa: "",
    hinhAnh: "",
    maNhom: "",
    ngayTao: "",
    danhMucKhoaHoc: {
      maDanhMucKhoahoc: "",
    },
    nguoiTao: {
      taiKhoan: "",
    }
  }
  const { handleChange, values, handleSubmit, errors} = useFormik({
    initialValues: initialValues,
    validationSchema: courseValidation,
    onSubmit: (values)=>{
      console.log("values", values);
    }
  })
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <EditOutlined onClick={showDrawer} className="text-yellow-500" />
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
              Edit
            </Button>
          </Space>
        }
      >
        <Formik>
          <Form className="formDrawer" onClick={handleSubmit} initialValues={initialValues} validationSchema={courseValidation}>
            <div className="grid grid-cols-12">
            <div className="col-span-6 space-y-5 p-3">
              <div className="flex flex-col space-y-3">
                <label>Course Code</label>
                <Field
                  name="maKhoaHoc"
                  type="text"
                  className="fieldInput"
                  value={values.maKhoaHoc}
                  onChange={handleChange}
                  placeholder="Please enter the code course"
                />
                {errors.maKhoaHoc && (
                  <p className="text-red-500">{errors.maKhoaHoc}</p>
                )}
              </div>
              <div className="flex flex-col space-y-3">
                <label>Aliases</label>
                <Field
                  name="biDanh"
                  type="text"
                  className="fieldInput"
                  value={values.biDanh}
                  onChange={handleChange}
                  placeholder="Please enter the aliases course"
                />
                {errors.biDanh && (
                  <p className="text-red-500">{errors.biDanh}</p>
                )}
              </div>
              <div className="flex flex-col space-y-3">
                <label>Course Name</label>
                <Field
                  name="tenKhoaHoc"
                  type="text"
                  className="fieldInput"
                  value={values.tenKhoaHoc}
                  onChange={handleChange}
                  placeholder="Please enter the course name"
                />
                {/* {errors.matKhau && (
                  <p className="text-red-500">{errors.matKhau}</p>
                )} */}
              </div>
              <div className="flex flex-col space-y-3">
                <label>Views</label>
                <Field
                  name="luotXem"
                  type="text"
                  className="fieldInput"
                  value={values.luotXem}
                  onChange={handleChange}
                  placeholder="Please enter views"
                />
                {/* {errors.matKhau && (
                  <p className="text-red-500">{errors.matKhau}</p>
                )} */}
              </div>
            </div>
            <div className="col-span-6 space-y-5 p-3">
              <div className="flex flex-col space-y-3">
                <label>Image</label>
                <Field
                  name="hinhAnh"
                  type="text"
                  className="fieldInput"
                  value={values.hinhAnh}
                  onChange={handleChange}
                  placeholder="Please enter the image course"
                />
                {/* {errors.matKhau && (
                  <p className="text-red-500">{errors.matKhau}</p>
                )} */}
              </div>
              <div className="flex flex-col space-y-3">
                <label>Group code</label>
                <Field
                  name="maNhom"
                  as = "select"
                  className="fieldInput h-9"
                  value={values.maNhom}
                  onChange={handleChange}
                  placeholder="Please enter the course code"
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
                {/* {errors.matKhau && (
                  <p className="text-red-500">{errors.matKhau}</p>
                )} */}
              </div>
              <div className="flex flex-col space-y-3">
                <label>Course catalog</label>
                <Field
                  name="danhMucKhoaHoc.maDanhMucKhoahoc"
                  className="fieldInput h-9"
                  as="select"
                  value={values.danhMucKhoaHoc.maDanhMucKhoahoc}
                  onChange={handleChange}
                  placeholder="Please enter the course code"
                >
                  <option>Back End</option>
                  <option>Design</option>
                  <option>Mobile</option>
                  <option>Front End</option>
                  <option>FullStack</option>
                  <option>Thinking</option>
                </Field>
                {/* {errors.matKhau && (
                  <p className="text-red-500">{errors.matKhau}</p>
                )} */}
              </div>
              <div className="flex flex-col space-y-3">
                <label>Creator</label>
                <Field
                  name="nguoiTao.taiKhoan"
                  className="fieldInput h-9"
                  as="select"
                  value={values.nguoiTao.taiKhoan}
                  onChange={handleChange}
                  placeholder="Please enter the course code"
                >
                  <option>DuyAdmin22</option>
                  <option>Huy Nguyen</option>
                  <option>testadm</option>
                  <option>tame</option>
                  <option>admin0001</option>
                  <option>adminttt</option>
                  <option>nguyendp</option>
                  <option>admin0003</option>
                  <option>admin_test</option>
                </Field>
                {/* {errors.matKhau && (
                  <p className="text-red-500">{errors.matKhau}</p>
                )} */}
              </div>
            </div>
            </div>
            <div className="flex flex-col space-y-3 p-3 h-full">
                <label>Description</label>
                <Field
                  name="moTa"
                  as="textarea"
                  className="fieldInput form-textarea"
                  value={values.moTa}
                  onChange={handleChange}
                  placeholder="Please enter the description course"
                />
                {/* {errors.matKhau && (
                  <p className="text-red-500">{errors.matKhau}</p>
                )} */}
            </div>
          </Form>
        </Formik>
      </Drawer>
    </>
  );
};
export default DrawerEditCourse;
