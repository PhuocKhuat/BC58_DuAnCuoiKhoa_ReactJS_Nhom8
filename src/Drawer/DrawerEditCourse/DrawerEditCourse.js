import React, { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import "./styleDrawerEditCourse.css";

import { Button, Drawer, Space, message } from "antd";
import { Field, Form, Formik, useFormik } from "formik";
import { courseValidation } from "../../Validation/courseValidation";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { https } from "../../Services/api";
import { useDispatch } from "react-redux";
import { fetchCoursesList } from "../../Redux/personalSliceThunk";
import moment from "moment";

const DrawerEditCourse = ({ editCourse }) => {
  // console.log("🚀 ~ DrawerEditCourse ~ editCourse:", editCourse)
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const initialValues = {
    maKhoaHoc: "",
    biDanh: "",
    tenKhoaHoc: "",
    luotXem: 0,
    moTa: "",
    hinhAnh: "",
    maNhom: "",
    ngayTao: "",
    maDanhMucKhoaHoc: "",
    taiKhoanNguoiTao: "",
  };
  const dispatch = useDispatch();
  const { handleChange, values, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: courseValidation,
    onSubmit: (values) => {
      console.log("values", values);
      // console.log("🚀 ~ handleEditCourse ~ values.ngayTao:", moment(values.ngayTao).format('DD/MM/YYYY'));
    },
  });
  const handleUpdateCourse = (course) => {
    console.log("🚀 ~ handleUpdateCourse ~ course:", course);
    https
      .put("/api/QuanLyKhoaHoc/CapNhatKhoaHoc", course)
      .then(function (res) {
        console.log(res);
        dispatch(fetchCoursesList());
        setOpen(false);
      })
      .catch(function (err) {
        console.log(err);
        message.error(err.response.data);
      });
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleEditCourse = () => {
    values.maKhoaHoc = editCourse.maKhoaHoc;
    values.biDanh = editCourse.biDanh;
    values.tenKhoaHoc = editCourse.tenKhoaHoc;
    values.luotXem = editCourse.luotXem;
    values.hinhAnh = editCourse.hinhAnh;
    values.maNhom = editCourse.maNhom;
    values.ngayTao = editCourse.ngayTao;
    values.maDanhMucKhoaHoc = editCourse.danhMucKhoaHoc.maDanhMucKhoahoc;
    values.taiKhoanNguoiTao = editCourse.nguoiTao.taiKhoan;
    values.moTa = editCourse.moTa;
    showDrawer();
  };
  const handleDatePicker = (date) => {
     handleChange({ target: { name: "ngayTao", value: moment(date).format('DD/MM/YYYY')} });
    // console.log("🚀 ~ handleDatePicker ~ date:", date.toString());
    // console.log("🚀 ~ handleEditCourse ~ values.ngayTao:", moment(values.ngayTao).format('DD/MM/YYYY'));
    // values.ngayTao = moment(values.ngayTao).format('DD/MM/YYYY');
    return setStartDate(date);
  };
  
  return (
    <>
      <EditOutlined onClick={handleEditCourse} className="text-yellow-500" />
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
            {errors.maKhoaHoc ||
            errors.biDanh ||
            errors.tenKhoaHoc ||
            errors.luotXem ||
            errors.moTa ||
            errors.hinhAnh ||
            errors.ngayTao ? (
              <Button disabled type="primary" className="btnNotAllowed">
                Update
              </Button>
            ) : (
              <Button
                onClick={() => {
                  handleUpdateCourse(values);
                }}
                type="primary"
              >
                Update
              </Button>
            )}
          </Space>
        }
      >
        <Formik>
          <Form
            className="formDrawer"
            onClick={handleSubmit}
            initialValues={initialValues}
            validationSchema={courseValidation}
          >
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
                  {errors.tenKhoaHoc && (
                    <p className="text-red-500">{errors.tenKhoaHoc}</p>
                  )}
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
                  {errors.luotXem && (
                    <p className="text-red-500">{errors.luotXem}</p>
                  )}
                </div>
                <div className="flex flex-col space-y-3">
                  <label>Select date</label>
                  <ReactDatePicker
                    className="fieldInput fieldInputDate"
                    selected={startDate}
                    value={values.ngayTao}
                    onChange={handleDatePicker}
                    dateFormat="dd/MM/yyyy"
                  />
                  {errors.ngayTao && (
                    <p className="text-red-500">{errors.ngayTao}</p>
                  )}
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
                  {errors.hinhAnh && (
                    <p className="text-red-500">{errors.hinhAnh}</p>
                  )}
                </div>
                <div className="flex flex-col space-y-3">
                  <label>Group code</label>
                  <Field
                    name="maNhom"
                    as="select"
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
                    name="maDanhMucKhoaHoc"
                    className="fieldInput h-9"
                    as="select"
                    value={values.maDanhMucKhoaHoc}
                    onChange={handleChange}
                    placeholder="Please enter the course code"
                  >
                    <option>BackEnd</option>
                    <option>Design</option>
                    <option>DiDong</option>
                    <option>FrontEnd</option>
                    <option>FullStack</option>
                    <option>TuDuy</option>
                  </Field>
                </div>
                <div className="flex flex-col space-y-3">
                  <label>Creator</label>
                  <Field
                    name="taiKhoanNguoiTao"
                    className="fieldInput h-9"
                    as="select"
                    value={values.taiKhoanNguoiTao}
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
              {errors.moTa && <p className="text-red-500">{errors.moTa}</p>}
            </div>
          </Form>
        </Formik>
      </Drawer>
    </>
  );
};
export default DrawerEditCourse;
