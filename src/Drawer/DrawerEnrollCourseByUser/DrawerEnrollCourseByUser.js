import React, { useEffect, useState } from "react";
import { LoginOutlined } from "@ant-design/icons";
import { Drawer, message } from "antd";
import "./styleDrawerEnrollCourseByUser.css";
import TableCourseAwait from "./TableCourseAwait";
import { useDispatch } from "react-redux";
import {
  fetchCourseListAwaitingApproval,
  fetchCourseListNotRegister,
  fetchCourseListRegistered,
} from "../../Redux/courseRegistrationSlice";
import TableCourseConfirmed from "./TableCourseConfirmed";
import { https } from "../../Services/api";
import TableCourseNotRegister from "./TableCourseNotRegister";

const DrawerEnrollCourseByUser = ({ taiKhoan }) => {
  const [open, setOpen] = useState(false);
  const [account, setAccount] = useState({});
  // console.log("🚀 ~ DrawerEnrollCourseByUser ~ courseListNotRegister:", courseListRegistered);
  const dispatch = useDispatch();
  const getUser = (taiKhoan) => {
    taiKhoan && setAccount(taiKhoan);
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
      message.success("Unsubscribe successfully");
      fetchAllCourseList();
    } catch (error) {
      console.log("🚀 ~ handleCancelRegisterCourseByUser ~ error:", error);
    }
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
      >
        <div>
        <div className="mb-3">
            <h3 className="text-lg font-bold text-black">
              The course has not been registered
            </h3>
          </div>
          <div>
            <TableCourseNotRegister taiKhoan={taiKhoan} handleRegisterCourseByUser={handleRegisterCourseByUser} />
          </div>
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
            <TableCourseConfirmed taiKhoan={taiKhoan} handleCancelRegisterCourseByUser={handleCancelRegisterCourseByUser}/>
          </div>
        </div>
      </Drawer>
    </>
  );
};
export default DrawerEnrollCourseByUser;