import React, { useEffect, useState } from "react";
import { LoginOutlined, DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import { Button, Drawer, Space, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserListAwaitingApproval,
  fetchUserListConfirmed,
  fetchUserNotRegistration,
} from "../../Redux/userRegistrationSlice";

const DrawerUserRegistration = ({ maKhoaHoc }) => {
  const [course, setCourse] = useState({});
  const getCourse = (maKhoaHoc) => {
    maKhoaHoc && setCourse(maKhoaHoc);
  };
  const [open, setOpen] = useState(false);
  const { userListAwaitingApproval, userListConfirmed } = useSelector(
    (state) => state.userRegistrationSlice
  );
  //   console.log("🚀 ~ DrawerUserRegistration ~ userListAwaitingApproval:", userListAwaitingApproval)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserNotRegistration(course));
    dispatch(fetchUserListAwaitingApproval(course));
    dispatch(fetchUserListConfirmed(course));
  }, [course]);
  const columns = [
    {
      title: "Index",
      key: "index",
      render: (_, record, index) => <p>{index + 1}</p>,
    },
    {
      title: "Account",
      dataIndex: "taiKhoan",
      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      sortDirections: ["descend"],
    },
    {
      title: "Student",
      dataIndex: "hoTen",
      sorter: (a, b) => a.hoTen.length - b.hoTen.length,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="cursor-pointer">
          <CheckOutlined className="text-green-800" />
          <DeleteOutlined className="text-red-600" />
        </Space>
      ),
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
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
            <Table
              columns={columns}
              onChange={onChange}
              dataSource={userListAwaitingApproval}
            />
          </div>
        </div>
        <div>
          <div className="mb-3">
            <h3 className="text-lg font-bold text-black">
              Students have participated in the course
            </h3>
          </div>
          <div>
            <Table
              columns={columns}
              onChange={onChange}
              dataSource={userListConfirmed}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default DrawerUserRegistration;
