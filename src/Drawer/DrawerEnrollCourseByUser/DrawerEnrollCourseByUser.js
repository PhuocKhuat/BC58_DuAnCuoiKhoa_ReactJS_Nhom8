import React, { useEffect, useState } from "react";
import { LoginOutlined } from "@ant-design/icons";
import { Button, Drawer, Space, message } from "antd";
import "./styleDrawerEnrollCourseByUser.css";
import TableCourseAwait from "./TableCourseAwait";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCourseListAwaitingApproval,
  fetchCourseListNotRegister,
  fetchCourseListRegistered,
  setFilterCourse,
} from "../../Redux/courseRegistrationSlice";
import TableCourseConfirmed from "./TableCourseConfirmed";
import { https } from "../../Services/api";
import { Field, Form, Formik, useFormik } from "formik";

const DrawerEnrollCourseByUser = ({ taiKhoan }) => {
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState({});
  const { filterCourse, courseListNotRegister } = useSelector(
    (state) => state.courseRegistrationSlice
  );
  // console.log("🚀 ~ DrawerEnrollCourseByUser ~ filterCourse:", filterCourse);
  // console.log("🚀 ~ DrawerEnrollCourseByUser ~ courseListNotRegister:", courseListNotRegister);
  const dispatch = useDispatch();
  const initialValues = {
    tenKhoaHoc: filterCourse,
  };
  const formik = useFormik({
    initialValues: initialValues,
  });
  const getUser = (taiKhoan) => {
    taiKhoan && setAccount(taiKhoan);
  };
  const [item, setItem] = useState({});
  const getCourse = (course) => {
    course && setItem(course);
  };
  useEffect(() => {
    fetchAllCourseList();
  }, [account]);
  const fetchAllCourseList = () => {
    dispatch(fetchCourseListAwaitingApproval(account));
    dispatch(fetchCourseListRegistered(account));
    dispatch(fetchCourseListNotRegister(account));
  };
  const handleRegisterCourseByUser = async (maKhoaHoc, taiKhoan) => {
    const objectRegister = { maKhoaHoc: maKhoaHoc, taiKhoan: taiKhoan };
    try {
      await https.post("/api/QuanLyKhoaHoc/GhiDanhKhoaHoc", objectRegister);
      fetchAllCourseList();
      message.success("Sign up success");
    } catch (error) {
      console.log("🚀 ~ handleRegisterCourseByUser ~ error:", error);
    }
  };
  const handleCancelRegisterCourseByUser = async (maKhoaHoc, taiKhoan) => {
    const objectCancelRegister = { maKhoaHoc: maKhoaHoc, taiKhoan: taiKhoan };
    try {
      await https.post("/api/QuanLyKhoaHoc/HuyGhiDanh", objectCancelRegister);
      fetchAllCourseList();
    } catch (error) {
      console.log("🚀 ~ handleCancelRegisterCourseByUser ~ error:", error);
    }
  };
  const renderSelectCourse = (courseListNotRegister) => {
    return courseListNotRegister.map((course, index) => {
      return (
        <option
          key={index}
          className="dropdownCourseListNotRegister"
          // onClick={() => {
          //   getCourse(course);
          //   dispatch(setFilterCourse(course.tenKhoaHoc));
          // }}
        >
          {course.tenKhoaHoc}
        </option>
      );
    });
  };
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <LoginOutlined
        className="text-green-500"
        onClick={() => {
          getUser(taiKhoan);
          showDrawer();
        }}
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
            <Formik initialValues={initialValues}>
              <Form className="formDrawerEnrollCourseByUser">
                <Field
                  name="tenKhoaHoc"
                  as="select"
                  value={formik.values.tenKhoaHoc}
                  className="formFilterCourse"
                  onChange={(e) => {
                    dispatch(setFilterCourse(e.target.value));
                  }}
                  placeholder="Select course.."
                >
                  {renderSelectCourse(courseListNotRegister)}
                </Field>
              </Form>
            </Formik>
            <Button
              onClick={() => {
                handleRegisterCourseByUser(item.maKhoaHoc, taiKhoan);
                onClose();
              }}
              type="primary"
            >
              Register
            </Button>
          </Space>
        }
      >
        <div>
          <div className="mb-3">
            <h3 className="text-lg font-bold text-black">
              Course is being confirmed
            </h3>
          </div>
          <div>
            <TableCourseAwait
              taiKhoan={taiKhoan}
              handleRegisterCourseByUser={handleRegisterCourseByUser}
              handleCancelRegisterCourseByUser={
                handleCancelRegisterCourseByUser
              }
            />
          </div>
          <div className="mb-3">
            <h3 className="text-lg font-bold text-black">
              The course has been registered
            </h3>
          </div>
          <div>
            <TableCourseConfirmed
              taiKhoan={taiKhoan}
              handleCancelRegisterCourseByUser={
                handleCancelRegisterCourseByUser
              }
            />
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default DrawerEnrollCourseByUser;
