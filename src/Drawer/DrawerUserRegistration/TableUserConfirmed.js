import { Space, Table } from "antd";
import React from "react";
import { DeleteOutlined } from "@ant-design/icons";
import {  useSelector } from "react-redux";

export default function TableUserConfirmed({maKhoaHoc, handleCancelUserByCourse}) {
  const { userListConfirmed } = useSelector(
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
      filters: [
        {
          text: "1",
          value: "1",
        },
        {
          text: "2",
          value: "2",
        },
        {
          text: "3",
          value: "3",
        },
        {
          text: "4",
          value: "4",
        },
        {
          text: "5",
          value: "5",
        },
        {
          text: "6",
          value: "6",
        },
        {
          text: "7",
          value: "7",
        },
        {
          text: "8",
          value: "8",
        },
        {
          text: "9",
          value: "9",
        },
        {
          text: "a",
          value: "a",
        },
        {
          text: "b",
          value: "b",
        },
        {
          text: "c",
          value: "c",
        },
        {
          text: "d",
          value: "d",
        },
        {
          text: "e",
          value: "e",
        },
        {
          text: "f",
          value: "f",
        },
        {
          text: "g",
          value: "g",
        },
        {
          text: "h",
          value: "h",
        },
        {
          text: "i",
          value: "i",
        },
        {
          text: "j",
          value: "j",
        },
        {
          text: "k",
          value: "k",
        },
        {
          text: "l",
          value: "l",
        },
        {
          text: "m",
          value: "m",
        },
        {
          text: "n",
          value: "n",
        },
        {
          text: "o",
          value: "o",
        },
        {
          text: "p",
          value: "p",
        },
        {
          text: "q",
          value: "q",
        },
        {
          text: "r",
          value: "r",
        },
        {
          text: "s",
          value: "s",
        },
        {
          text: "t",
          value: "t",
        },
        {
          text: "u",
          value: "u",
        },
        {
          text: "v",
          value: "v",
        },
        {
          text: "w",
          value: "w",
        },
        {
          text: "x",
          value: "x",
        },
        {
          text: "y",
          value: "y",
        },
        {
          text: "z",
          value: "z",
        },
      ],
      onFilter: (value, record) => record.taiKhoan.indexOf(value) === 0,
      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
    },
    {
      title: "Student",
      dataIndex: "hoTen",
      filters: [
        {
          text: "1",
          value: "1",
        },
        {
          text: "2",
          value: "2",
        },
        {
          text: "3",
          value: "3",
        },
        {
          text: "4",
          value: "4",
        },
        {
          text: "5",
          value: "5",
        },
        {
          text: "6",
          value: "6",
        },
        {
          text: "7",
          value: "7",
        },
        {
          text: "8",
          value: "8",
        },
        {
          text: "9",
          value: "9",
        },
        {
          text: "a",
          value: "a",
        },
        {
          text: "b",
          value: "b",
        },
        {
          text: "c",
          value: "c",
        },
        {
          text: "d",
          value: "d",
        },
        {
          text: "e",
          value: "e",
        },
        {
          text: "f",
          value: "f",
        },
        {
          text: "g",
          value: "g",
        },
        {
          text: "h",
          value: "h",
        },
        {
          text: "i",
          value: "i",
        },
        {
          text: "j",
          value: "j",
        },
        {
          text: "k",
          value: "k",
        },
        {
          text: "l",
          value: "l",
        },
        {
          text: "m",
          value: "m",
        },
        {
          text: "n",
          value: "n",
        },
        {
          text: "o",
          value: "o",
        },
        {
          text: "p",
          value: "p",
        },
        {
          text: "q",
          value: "q",
        },
        {
          text: "r",
          value: "r",
        },
        {
          text: "s",
          value: "s",
        },
        {
          text: "t",
          value: "t",
        },
        {
          text: "u",
          value: "u",
        },
        {
          text: "v",
          value: "v",
        },
        {
          text: "w",
          value: "w",
        },
        {
          text: "x",
          value: "x",
        },
        {
          text: "y",
          value: "y",
        },
        {
          text: "z",
          value: "z",
        },
      ],
      onFilter: (value, record) => record.taiKhoan.indexOf(value) === 0,
      sorter: (a, b) => a.hoTen.length - b.hoTen.length,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="cursor-pointer">
          <DeleteOutlined
            onClick={() => {
              handleCancelUserByCourse(maKhoaHoc, record.taiKhoan);
            }}
            className="text-red-600"
          />
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      pagination={{
        pageSize:2,
      }}
      dataSource={userListConfirmed}
    />
  );
}
