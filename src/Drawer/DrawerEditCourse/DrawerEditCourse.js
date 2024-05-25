import React, { useEffect, useState } from "react";
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
  // console.log("🚀 ~ DrawerEditCourse ~ editCourse:", editCourse);
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [courseUpdate, setCourseUpdate] = useState({});
  const updateCourse = (course) => {
    course && setCourseUpdate(course);
  };
  const [thumb, setThumb] = useState(courseUpdate.hinhAnh);

  const handleUpdateImage = async (values) => {
    console.log("🚀 ~ handleUpdateImage ~ values:", values);
    if (values.hinhAnh.name) {
      let formData = new FormData();
      for (let key in values) {
        console.log("🚀 ~ handleUpdateImage ~ key:", key)
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("hinhAnh", values.hinhAnh, values.hinhAnh.name);
        }
      }
      try {
        console.log(formData.get("hinhAnh"));
        const result = await https.post(
          "/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload",
          formData
        );
        if (result.request.status === 200) {
          resetForm();
          dispatch(fetchCoursesList());
          setOpen(false);
          message.success("Update course successfully");
        }
      } catch (error) {
        console.log("🚀 ~ handleUpdateImage ~ error:", error);
        message.error(error.response.data);
      }
        console.log("🚀 ~ handleUpdateImage ~ formData:", formData)
    
    } else {
      try {
        let result = await https.put(
          "/api/QuanLyKhoaHoc/CapNhatKhoaHoc",
          values
        );
        if (result.request.status === 200) {
          resetForm();
          setOpen(false);
          dispatch(fetchCoursesList());
          message.success("Update successfully");
        }
      } catch (error) {
        message.error(error.response.data);
      }
    }
  };

  const initialValues = {
    maKhoaHoc: "",
    biDanh: "",
    tenKhoaHoc: "",
    luotXem: 0,
    moTa: "",
    hinhAnh: {},
    maNhom: "",
    ngayTao: "",
    maDanhMucKhoaHoc: "",
    taiKhoanNguoiTao: "",
  };

  const {
    handleChange,
    values,
    handleSubmit,
    errors,
    setValues,
    setFieldValue,
    resetForm,
    handleBlur,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: courseValidation,
    onSubmit: (values) => {
      console.log("🚀 ~ DrawerEditCourse ~ alues:", values);
    },
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setValues({
      maKhoaHoc: courseUpdate.maKhoaHoc,
      biDanh: courseUpdate.biDanh,
      tenKhoaHoc: courseUpdate.tenKhoaHoc,
      luotXem: courseUpdate.luotXem,
      hinhAnh: courseUpdate.hinhAnh,
      maNhom: courseUpdate.maNhom,
      ngayTao: courseUpdate.ngayTao,
      maDanhMucKhoaHoc:
        courseUpdate.danhMucKhoaHoc &&
        courseUpdate.danhMucKhoaHoc.maDanhMucKhoahoc,
      taiKhoanNguoiTao:
        courseUpdate.taiKhoanNguoiTao && courseUpdate.nguoiTao.taiKhoan,
      moTa: courseUpdate.moTa,
    });
  }, [courseUpdate]);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleDatePicker = (date) => {
    handleChange({
      target: { name: "ngayTao", value: moment(date).format("DD/MM/YYYY") },
    });
    return setStartDate(date);
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      setThumb(e.target.result);
      setFieldValue("hinhAnh", file);
      // console.log(values.hinhAnh);
    };
  };

  return (
    <>
      <EditOutlined
        onClick={() => {
          showDrawer();
          updateCourse(editCourse);
        }}
        className="text-yellow-500"
      />
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
                type="primary"
                onClick={() => {
                  handleUpdateImage(values);
                }}
              >
                <span className="relative bottom-2">Update</span>
              </Button>
            )}
          </Space>
        }
      >
        <Formik>
          <Form
            className="formDrawer"
            onSubmit={handleSubmit}
            initialValues={initialValues}
            validationSchema={courseValidation}
          >
            <div className="grid grid-cols-12">
              <div className="col-span-6 space-y-5 p-3">
                <div className="flex flex-col space-y-3">
                  <label>Course Code</label>
                  <Field
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                  <img
                    alt="hinhAnhKhoaHoc"
                    src={thumb}
                    width={100}
                    height={100}
                  />
                  <input
                    name="hinhAnh"
                    type="file"
                    accept="image/jpg,image/png,image/jpeg"
                    className="fieldInput"
                    onClick={(e) => e.stopPropagation()}
                    onChange={handleChangeImage}
                    onBlur={handleBlur}
                    placeholder="Please enter the image course"
                  />
                  {errors.hinhAnh && (
                    <p className="text-red-500">{errors.hinhAnh}</p>
                  )}
                </div>
                <div className="flex flex-col space-y-3">
                  <label>Group code</label>
                  <Field
                    onBlur={handleBlur}
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
                </div>
                <div className="flex flex-col space-y-3">
                  <label>Course catalog</label>
                  <Field
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                onBlur={handleBlur}
                name="moTa"
                as="textarea"
                className="fieldInput form-textarea h-20"
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
