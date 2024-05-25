import React, { useState } from "react";
import { Button, Drawer, Form, Space, message } from "antd";
import "./styleDrawerAddCourse.css";
import { Field, Formik, useFormik } from "formik";
import ReactDatePicker from "react-datepicker";
import moment from "moment";
import { courseValidation } from "../../Validation/courseValidation";
import { https } from "../../Services/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesList } from "../../Redux/personalSliceThunk";
import { setImage } from "../../Redux/adminCourseSlice";

const saveFormAddCourse = () => {
  const storeAddCourse = localStorage.getItem("FORM_ADD_COURSE");
  if (storeAddCourse) {
    return JSON.parse(storeAddCourse);
  }
  return {
    maKhoaHoc: "",
    biDanh: "",
    tenKhoaHoc: "",
    luotXem: 0,
    danhGia: 0,
    moTa: "",
    hinhAnh: {},
    maNhom: "",
    ngayTao: "",
    maDanhMucKhoaHoc: "",
    taiKhoanNguoiTao: "",
  };
};

const saveErrorAddCourse = () => {
  const storeErrorAddCourse = localStorage.getItem("ERROR_ADD_COURSE");
  if (storeErrorAddCourse) {
    return JSON.parse(storeErrorAddCourse);
  }
};

const DrawerAddCourse = () => {
  const [open, setOpen] = useState(false);

  const [startDate, setStartDate] = useState(new Date());

  const dispatch = useDispatch();

  const { image } = useSelector((state) => state.adminCourseSlice);
  console.log("🚀 ~ DrawerAddCourse ~ image:", image);

  const initialValues = {
    maKhoaHoc: "",
    biDanh: "",
    tenKhoaHoc: "",
    luotXem: 0,
    danhGia: 0,
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
    handleBlur,
    resetForm,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues && saveFormAddCourse(),
    validationSchema: courseValidation,
    initialErrors: saveErrorAddCourse(),
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  React.useEffect(() => {
    localStorage.setItem("FORM_ADD_COURSE", JSON.stringify(values));
  }, [values]);
  React.useEffect(() => {
    localStorage.setItem("ERROR_ADD_COURSE", JSON.stringify(errors));
  }, [errors]);

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

  const handleAddCourse = async (course) => {
    console.log("🚀 ~ handleAddCourse ~ course:", course);
    if (course.hinhAnh.name) {
      const formData = new FormData();
      for (let key in course) {
        if (key !== "hinhAnh") {
          formData.append(key, course[key]);
        } else {
          formData.append("hinhAnh", course.hinhAnh, course.hinhAnh.name);
        }
        console.log(formData.get("moTa"));
      }

      try {
        await https.post("/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh", formData);
        dispatch(fetchCoursesList());
        setOpen(false);
        message.success("Add course successfully");
      } catch (error) {
        console.log("🚀 ~ handleAddImage ~ error:", error);
        message.error(error.response.data);
      }
      return;
    }
    try {
      await https.post("/api/QuanLyKhoaHoc/ThemKhoaHoc", course);
      message.success("Add course successfully");
      dispatch(fetchCoursesList());
      setOpen(false);
    } catch (error) {
      console.log("🚀 ~ handleAddCourse ~ error:", error);
      message.error(error.response.data);
    }
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = (e) => {
      dispatch(
        setImage({
          file,
          url: e.target.result,
        })
      );
      setFieldValue("hinhAnh", file);
    };
  };

  return (
    <div className="drawerAddCourse mb-3">
      <Button type="primary" onClick={showDrawer} className="mt-3">
        <i className="fa fa-plus plusCourse"></i>
        <span className="addCourse">Add Course</span>
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
            {errors.maKhoaHoc ||
            errors.biDanh ||
            errors.tenKhoaHoc ||
            errors.luotXem ||
            errors.moTa ||
            errors.danhGia ||
            errors.hinhAnh ||
            errors.maNhom ||
            errors.ngayTao ||
            errors.maDanhMucKhoaHoc ||
            errors.taiKhoanNguoiTao ? (
              <Button disabled type="primary" className="btnNotAllowed">
                <span className="spanAdd">Add</span>
              </Button>
            ) : (
              <Button
                type="primary"
                onClick={() => {
                  handleAddCourse(values);
                }}
              >
                <span className="spanAdd">Add</span>
              </Button>
            )}
          </Space>
        }
      >
        <Formik
          initialValues={saveFormAddCourse()}
          initialErrors={saveErrorAddCourse()}
          validationSchema={courseValidation}
        >
          <Form className="formDrawer" onClick={handleSubmit}>
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                  <label>Evaluate</label>
                  <Field
                    name="danhGia"
                    type="text"
                    className="fieldInput"
                    value={values.danhGia}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Please enter the image course"
                  />
                  {errors.danhGia && (
                    <p className="text-red-500">{errors.danhGia}</p>
                  )}
                </div>
                <div className="flex flex-col space-y-3">
                  <label>Image</label>
                  <img alt="course-img" src={image.url} className="w-50" />
                  <input
                    name="hinhAnh"
                    type="file"
                    className="fieldInput"
                    accept="image/jpg,image/png,image/jpeg"
                    onChange={handleChangeImage}
                    onClick={(e) => e.stopPropagation()}
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
                    name="maNhom"
                    as="select"
                    className="fieldInput h-9"
                    value={values.maNhom}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    name="maDanhMucKhoaHoc"
                    className="fieldInput h-9"
                    as="select"
                    value={values.maDanhMucKhoaHoc}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                onBlur={handleBlur}
                placeholder="Please enter the description course"
              />
              {errors.moTa && <p className="text-red-500">{errors.moTa}</p>}
            </div>
          </Form>
        </Formik>
      </Drawer>
    </div>
  );
};
export default DrawerAddCourse;
