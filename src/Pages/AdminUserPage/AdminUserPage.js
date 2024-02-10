import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Table } from "antd";
import { DeleteOutlined, EditOutlined} from "@ant-design/icons";
import './styleAdminUserPage.css';
import { fetchAdminUser, setDeleteUser } from "../../Redux/adminUserSliceThunk";
import { https } from "../../Services/api";

export default function AdminUserPage() {
  const { userList } = useSelector((state) => state.adminUserSliceThunk);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdminUser());
  }, []);
  const columns = [
    {
      title: "Account",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      filters: [
        {
          text: "1",
          value: "1",
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
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.taiKhoan.indexOf(value) === 0,
      sorter: (a, b) => a.taiKhoan.length - b.taiKhoan.length,
      sortDirections: ["descend"],
    },
    {
      title: "Full Name",
      dataIndex: "hoTen",
      key: "hoTen",
      filters: [
        {
          text: "Đỗ",
          value: "Đỗ",
        },
        {
          text: "hoang",
          value: "hoang",
        },
        {
          text: "Nguyen",
          value: "Nguyen",
        },
        {
          text: "New",
          value: "New ",
        },
        {
          text: "Phan",
          value: "Phan",
        },
        {
          text: "Phạm",
          value: "Phạm",
        },
        {
          text: "Phong",
          value: "Phong",
        },
        {
          text: "quang",
          value: "quang",
        },
        {
          text: "string",
          value: "string",
        },
        {
          text: "test",
          value: "test",
        },
        {
          text: "trần",
          value: "trần",
        },
        {
          text: "Tran",
          value: "Tran",
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.hoTen.indexOf(value) === 0,
      sorter: (a, b) => a.hoTen.length - b.hoTen.length,
      sortDirections: ["descend"],
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      filters: [
        {
          text: "1",
          value: "1",
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
      onFilter: (value, record) => record.email.indexOf(value) === 0,
    },
    {
      title: "Phone Number",
      dataIndex: "soDt",
      key: "soDt",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.soDt - b.soDt,  
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle" className="cursor-pointer">
            <EditOutlined className="text-yellow-500"/>
            <DeleteOutlined className="text-red-600" onClick={()=>{
              dispatch(setDeleteUser(record.taiKhoan));
            }}/>
          </Space>
        ),
      },
  ];
  const onChange = (pagination, filters, sorter, extra) => {};
  // const handleDelete = async(taiKhoan)=>{
  //   console.log("taiKhoan", taiKhoan);
  //   try {
  //       await https.delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
  //       dispatch(fetchAdminUser());
  //   } catch (error) {
  //       console.log("🚀 ~ handleDelete ~ error:", error)
  //   }
  // }
  return (
    <Table
      columns={columns}
      dataSource={userList}
      onChange={onChange}
      className="container mt-5 adminUserPage"
    />
  );
}
