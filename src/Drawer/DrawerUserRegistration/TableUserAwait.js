import { Space, Table } from "antd";
import React from "react";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

export default function TableUserAwait({ maKhoaHoc, handleGhiDanhUserByCourse, handleDeleteUserByCourse }) {
  const { userListAwaitingApproval } = useSelector(
    (state) => state.userRegistrationSlice
  );
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
          <CheckOutlined
            onClick={() => {
              handleGhiDanhUserByCourse(maKhoaHoc, record.taiKhoan);
            }}
            className="text-green-800"
          />
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
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };
  return (
    <Table
      columns={columns}
      onChange={onChange}
      dataSource={userListAwaitingApproval}
    />
  );
}
