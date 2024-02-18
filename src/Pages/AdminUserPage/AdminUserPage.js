import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Table, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import "./styleAdminUserPage.css";
import { fetchAdminUser } from "../../Redux/adminUserSliceThunk";
import DrawerEditUser from "../../Drawer/DrawerEditUser/DrawerEditUser";
import { https } from "../../Services/api";
import Search from "antd/es/input/Search";
import DrawerAddUser from "../../Drawer/DrawerAddUser/DrawerAddUser/DrawerAddUser";
import DrawerEnrollCourseByUser from '../../Drawer/DrawerEnrollCourseByUser/DrawerEnrollCourseByUser';

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
      title: "User type code",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      defaultSortOrder: "descend",
      filters: [
        {
          text: "HV",
          value: "HV",
        },
        {
          text: "GV",
          value: "GV",
        },
      ],
      onFilter: (value, record) => record.maLoaiNguoiDung.indexOf(value) === 0,
      sorter: (a, b) => a.maLoaiNguoiDung.length - b.maLoaiNguoiDung.length,
      sortDirections: ["descend"],
    },
    // {
    //   title: "Password",
    //   dataIndex: "matKhau",
    //   key: "matKhau",
    // },
    // {
    //   title: "Group Code",
    //   dataIndex: "maNhom",
    //   key: "maNhom",
    // },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle" className="cursor-pointer">
          <DrawerEnrollCourseByUser/>
          <DrawerEditUser editUserInfo={record} />
          <DeleteOutlined
            className="text-red-600"
            onClick={() => {
              // dispatch(setDeleteUser(record.taiKhoan));
              handleDeleteUser(record.taiKhoan);
            }}
          />
        </Space>
      ),
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {};
  const handleDeleteUser = async (taiKhoan) => {
    console.log("taiKhoan", taiKhoan);
    try {
      await https.delete(
        `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
      );
      dispatch(fetchAdminUser());
      message.success("The user has been successfully deleted");
    } catch (error) {
      console.log("🚀 ~ handleDelete ~ error:", error);
      message.error(error.response.data);
    }
  };
  const onSearch = (value) => {
    dispatch(fetchAdminUser(value));
    return console.log("value", value);
  };
  return (
    <>
      <div className="flex gap-3 mb-4 mx-auto" style={{ width: "97.5%" }}>
        <DrawerAddUser />
        <Search
          className="items-center flex"
          placeholder="Search user..."
          onSearch={onSearch}
          enterButton
        />
      </div>
      <Table
        columns={columns}
        dataSource={userList}
        onChange={onChange}
        className="mt-2 adminUserPage"
      />
    </>
  );
}
