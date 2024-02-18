import React from 'react'
import { Space, Table } from 'antd'
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";

export default function TableCourseAwait() {
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
                //   handleGhiDanhUserByCourse(maKhoaHoc, record.taiKhoan);
                }}
                className="text-green-800"
              />
              <DeleteOutlined
                onClick={() => {
                //   handleDeleteUserByCourse(maKhoaHoc, record.taiKhoan);
                }}
                className="text-red-600"
              />
            </Space>
          ),
        },
      ];
  return (
    <Table columns={columns} />
  )
}
