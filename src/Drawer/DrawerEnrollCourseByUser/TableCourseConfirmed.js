import { Space, Table } from 'antd';
import React from 'react'
import { DeleteOutlined } from "@ant-design/icons";
import { useSelector } from 'react-redux';

export default function TableCourseConfirmed({taiKhoan, handleCancelRegisterCourseByUser}) {
    const { courseListRegistered } = useSelector(state => state.courseRegistrationSlice);
    // console.log("🚀 ~ TableCourseConfirmed ~ courseListRegistered:", courseListRegistered)
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
              <DeleteOutlined
                onClick={() => {
                    handleCancelRegisterCourseByUser(record.maKhoaHoc, taiKhoan)
                }}
                className="text-red-600"
              />
            </Space>
          ),
        },
      ];
  return (
    <Table columns={columns} pagination={{
      pageSize:2,
  }} dataSource={courseListRegistered}/>
  )
}
