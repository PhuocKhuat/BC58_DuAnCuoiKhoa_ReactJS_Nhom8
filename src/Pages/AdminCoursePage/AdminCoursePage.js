import React, { useEffect } from "react";
import { Space, Table, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoursesList } from "../../Redux/personalSliceThunk";
import './styleAdminCoursePage.css';
import { DeleteOutlined } from "@ant-design/icons";
import DrawerEditCourse from "../../Drawer/DrawerEditCourse/DrawerEditCourse";
import { https } from "../../Services/api";

const AdminCoursePage = () => {
 const { coursesList } = useSelector(state => state.personalSliceThunk);
 const dispatch = useDispatch();
//  console.log("🚀 ~ AdminCoursePage ~ userList:", coursesList)
 useEffect(()=>{
   dispatch(fetchCoursesList());
 },[]);
 const handleDeleteCourse = async(maKhoaHoc)=>{
  try {
    await https.delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`)
    dispatch(fetchCoursesList())
    message.success("Deleted course successfully");
  } catch (error) {
    console.log("🚀 ~ handleDeleteCourse ~ error:", error)
    message.error(error.response.data);
  } 
 }
 const columns = [
  {
    title: "Course code",
    dataIndex: "maKhoaHoc",
    key: "maKhoaHoc",
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
    ],
    onFilter: (value, record) => record.maKhoaHoc.indexOf(value) === 0,
    sorter: (a, b) => a.maKhoaHoc.length - b.maKhoaHoc.length,
    sortDirections: ["descend"],
  },
  {
    title: "Aliases",
    dataIndex: "biDanh",
    key: "biDanh",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.biDanh - b.biDanh,
  },
  {
    title: "Course name",
    dataIndex: "tenKhoaHoc",
    filters: [
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
    onFilter: (value, record) => record.tenKhoaHoc.indexOf(value) === 0,
    sorter: (a, b) => a.tenKhoaHoc.length - b.tenKhoaHoc.length,
    sortDirections: ["descend"],
  },
  {
    title: "Description",
    dataIndex: "moTa",
    key: "moTa",
  },
  {
    title: "Views",
    dataIndex: "luotXem",
    key: "luotXem",
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
    ],
    onFilter: (value, record) => record.luotXem.indexOf(value) === 0,
    sorter: (a, b) => a.luotXem - b.luotXem,
    sortDirections: ["descend"],
  },
  {
    title: "Image",
    dataIndex: "hinhAnh",
    key: "hinhAnh",
    render: (_, record)=> (
      <img alt="hinhAnhKhoaHoc" src={record.hinhAnh}/>
    )
  },
  {
    title: "Group Code",
    dataIndex: "maNhom",
    key: "maNhom",
    filters: [
      {
        text: "GP01",
        value: "GP01",
      },
      {
        text: "GP02",
        value: "GP02",
      },
      {
        text: "GP03",
        value: "GP03",
      },
      {
        text: "GP04",
        value: "GP04",
      },
      {
        text: "GP05",
        value: "GP05",
      },
      {
        text: "Design",
        value: "GP06",
      },
      {
        text: "DiDong",
        value: "GP07",
      },
      {
        text: "FrontEnd",
        value: "GP08",
      },
      {
        text: "GP09",
        value: "GP09",
      },
      {
        text: "GP10",
        value: "GP10",
      },
    ],
    onFilter: (value, record) => record.maNhom.indexOf(value) === 0,
  },
  {
    title: "Date created",
    dataIndex: "ngayTao",
    key: "ngayTao",
  },
  {
    title: "Course Catalog",
    dataIndex: "danhMucKhoaHoc.maDanhMucKhoahoc",
    key: "danhMucKhoaHoc.maDanhMucKhoahoc",
    filters: [
      {
        text: "BackEnd",
        value: "BackEnd",
      },
      {
        text: "Design",
        value: "Design",
      },
      {
        text: "DiDong",
        value: "DiDong",
      },
      {
        text: "FrontEnd",
        value: "FrontEnd",
      },
      {
        text: "FullStack",
        value: "FullStack",
      },
      {
        text: "TuDuy",
        value: "TuDuy",
      },
    ],
    onFilter: (value, record) => record.danhMucKhoaHoc.maDanhMucKhoahoc.indexOf(value) === 0,
    render: (_, record)=> <p>{record.danhMucKhoaHoc.maDanhMucKhoahoc}</p>
  },
  {
    title: "Creator account",
    dataIndex: "nguoiTao.taiKhoan",
    key: "nguoiTao.taiKhoan",
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
    onFilter: (value, record) => record.nguoiTao.taiKhoan.indexOf(value) === 0,
    render: (_, record)=> <p>{record.nguoiTao.taiKhoan}</p>
  },
  {
    title: "Action",
    key: "action",
    render: (_, record)=>(
      <Space>
        <DrawerEditCourse/>
        <DeleteOutlined className="text-red-600" onClick={()=>{
          handleDeleteCourse(record.maKhoaHoc)
        }}/>
      </Space>
    )
  }
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};
 return <Table columns={columns} dataSource={coursesList} onChange={onChange} />
};
export default AdminCoursePage;
