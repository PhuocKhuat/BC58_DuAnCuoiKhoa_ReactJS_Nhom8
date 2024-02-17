import { Space, Table } from "antd";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { https } from "../../Services/api";
import { fetchUserListAwaitingApproval, fetchUserListConfirmed, fetchUserNotRegistration } from "../../Redux/userRegistrationSlice";

export default function TableUserConfirmed({maKhoaHoc}) {
  const { userListConfirmed } = useSelector(
    (state) => state.userRegistrationSlice
  );
  const dispatch = useDispatch();
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
          <DeleteOutlined
            onClick={() => {
              handleDeleteUserByCourse(maKhoaHoc, record.taiKhoan);
            }}
            className="text-red-600"
          />
        </Space>
      ),
    },
  ];
  const handleDeleteUserByCourse = async (maKhoaHoc, taiKhoan) => {
    const values = { maKhoaHoc: maKhoaHoc, taiKhoan: taiKhoan };
    try {
      await https.post("/api/QuanLyKhoaHoc/HuyGhiDanh", values);
      dispatch(fetchUserNotRegistration(maKhoaHoc));
      dispatch(fetchUserListAwaitingApproval(maKhoaHoc));
      dispatch(fetchUserListConfirmed(maKhoaHoc));
    } catch (error) {
      console.log("🚀 ~ handleDeleteUserByCourse ~ error:", error);
    }
  };
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table
      columns={columns}
      onChange={onChange}
      dataSource={userListConfirmed}
    />
  );
}
