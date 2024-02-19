import React, { useEffect, useState } from "react";
import { LoginOutlined} from "@ant-design/icons";
import { Button, Drawer, Space, message } from "antd";
import { useDispatch } from "react-redux";
import {
  fetchUserListAwaitingApproval,
  fetchUserListConfirmed,
  fetchUserNotRegistration,
} from "../../Redux/userRegistrationSlice";
import './styleDrawerUserRegistration.css';
import { useFormik } from "formik";
import TableUserAwait from "./TableUserAwait";
import TableUserConfirmed from "./TableUserConfirmed";
import { https } from "../../Services/api";

const DrawerUserRegistration = ({ maKhoaHoc }) => {
  const [course, setCourse] = useState({});
  const getCourse = (maKhoaHoc) => {
    maKhoaHoc && setCourse(maKhoaHoc);
  };
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchAllUserList();
  }, [course]);
  const fetchAllUserList = ()=>{
    dispatch(fetchUserListAwaitingApproval(course));
    dispatch(fetchUserListConfirmed(course));
    dispatch(fetchUserNotRegistration(course));
  }
  const formik = useFormik({
    initialValues: {
      hoTen: '',
    }
  })
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const handleGhiDanhUserByCourse = async (maKhoaHoc, taiKhoan) => {
    const values = { maKhoaHoc: maKhoaHoc, taiKhoan: taiKhoan };
    try {
      await https.post("/api/QuanLyKhoaHoc/GhiDanhKhoaHoc", values);
      message.success("Sign up success");
      fetchAllUserList();
    } catch (error) {
      console.log("🚀 ~ handleGhiDanhCourse ~ error:", error);
    }
  };
  const handleDeleteUserByCourse = async (maKhoaHoc, taiKhoan) => {
    const values = { maKhoaHoc: maKhoaHoc, taiKhoan: taiKhoan };
    try {
      await https.post("/api/QuanLyKhoaHoc/HuyGhiDanh", values);
      fetchAllUserList();
    } catch (error) {
      console.log("🚀 ~ handleDeleteUserByCourse ~ error:", error);
    }
  };
  return (
    <div className="drawerUserRegistration">
      <LoginOutlined
        className="text-green-500"
        onClick={() => {
          getCourse(maKhoaHoc);
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
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Register
            </Button>
          </Space>
        }
      >
        <div>
          <div className="mb-3">
            <h3 className="text-lg font-bold text-black">
              Students wait for confirmation
            </h3>
          </div>
          <div>
            <TableUserAwait maKhoaHoc={maKhoaHoc} 
            handleGhiDanhUserByCourse={handleGhiDanhUserByCourse}
            handleDeleteUserByCourse={handleDeleteUserByCourse}/>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <h3 className="text-lg font-bold text-black">
              Students have participated in the course
            </h3>
          </div>
          <div>
            <TableUserConfirmed maKhoaHoc={maKhoaHoc} handleDeleteUserByCourse={handleDeleteUserByCourse}/>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default DrawerUserRegistration;
