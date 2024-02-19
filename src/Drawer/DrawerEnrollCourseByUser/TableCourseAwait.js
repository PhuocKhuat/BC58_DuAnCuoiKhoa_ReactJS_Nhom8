import React from "react";
import { Space, Table } from "antd";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

export default function TableCourseAwait({taiKhoan, handleRegisterCourseByUser, handleCancelRegisterCourseByUser }) {
  const {courseListAwaitingApproval} = useSelector((state) => state.courseRegistrationSlice);
  // console.log("🚀 ~ TableCourseAwait ~ courseListAwaitingApproval:", courseListAwaitingApproval)
  const columns = [
    {
      title: "Index",
      key: "index",
      render: (_, record, index) => <p>{index + 1}</p>,
    },
    {
      title: "Course name",
      dataIndex: "tenKhoaHoc",
      sorter: (a, b) => a.tenKhoaHoc.length - b.tenKhoaHoc.length,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="cursor-pointer">
          <CheckOutlined
            onClick={() => {
              handleRegisterCourseByUser(record.maKhoaHoc, taiKhoan);
            }}
            className="text-green-800"
          />
          <DeleteOutlined
            onClick={() => {
              handleCancelRegisterCourseByUser(record.maKhoaHoc, taiKhoan);
            }}
            className="text-red-600"
          />
        </Space>
      ),
    },
  ];
  return <Table columns={columns} pagination={{
    pageSize:2,
}} dataSource={courseListAwaitingApproval}/>;
}
