import { Space, Table, message } from "antd";
import React from "react";
import { CheckOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { setDuplicatedCourse } from "../../Redux/courseRegistrationSlice";

export default function TableCourseNotRegister({
  taiKhoan,
  handleRegisterCourseByUser,
}) {
  const { courseListNotRegister, courseListRegistered } = useSelector(
    (state) => state.courseRegistrationSlice
  );
  const dispatch = useDispatch();
  // console.log("🚀 ~ TableCourseNotRegister ~ courseListNotRegister:", courseListNotRegister)
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
              let cloneArray = [...courseListRegistered];
              let indexCourse = cloneArray.findIndex(
                (course) => course.maKhoaHoc === record.maKhoaHoc
              );
              if (indexCourse === -1) {
                handleRegisterCourseByUser(record.maKhoaHoc, taiKhoan);
              } else {
                message.error("Duplicate course");
              }
              dispatch(setDuplicatedCourse(cloneArray));
            }}
            className="text-green-800"
          />
        </Space>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      dataSource={courseListNotRegister}
      pagination={{
        pageSize: 2,
      }}
    />
  );
}
