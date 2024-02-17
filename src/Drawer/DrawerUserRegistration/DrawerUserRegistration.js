import React, { useEffect, useState } from "react";
import { LoginOutlined} from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
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

const DrawerUserRegistration = ({ maKhoaHoc }) => {
  const [course, setCourse] = useState({});
  const getCourse = (maKhoaHoc) => {
    maKhoaHoc && setCourse(maKhoaHoc);
  };
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserNotRegistration(course));
    dispatch(fetchUserListAwaitingApproval(course));
    dispatch(fetchUserListConfirmed(course));
  }, [course]);
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
            <TableUserAwait maKhoaHoc={maKhoaHoc}/>
          </div>
        </div>
        <div>
          <div className="mb-3">
            <h3 className="text-lg font-bold text-black">
              Students have participated in the course
            </h3>
          </div>
          <div>
            <TableUserConfirmed maKhoaHoc={maKhoaHoc}/>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default DrawerUserRegistration;
