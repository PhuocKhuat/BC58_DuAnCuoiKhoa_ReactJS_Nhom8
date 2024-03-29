import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FieldTimeOutlined,
  CalendarOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { Tooltip } from "antd";
import Search from "antd/es/input/Search";
import { setSearchForm } from "../../Redux/personalSlice";
import ModalDelete from "./ModalDelete";

export default function MyCourses() {
  const { coursesList } = useSelector((state) => state.personalSlice);
  const dispatch = useDispatch();
  const renderRegisterCourses = () =>
    coursesList.map((course, index) => (
      <div className="pt-4 mb-5" key={index}>
        <div className="lg:w-4/5 flex mx-auto w-4/5 flex-wrap">
          <img
            alt="imageCourses"
            className="lg:w-1/2 w-full lg:h-52 h-64 object-cover object-center rounded"
            src={course.hinhAnh}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:pb-6 mt-0 lg:mt-0">
            <h1 className="text-gray-900 text-2xl title-font font-medium mb-2">
              {course.tenKhoaHoc}
            </h1>
            <Tooltip title={course.moTa}>
              <p className="leading-relaxed truncate">{course.moTa}</p>
            </Tooltip>
            <div className="flex items-center border-b-2 border-gray-100 my-2">
              <div className="flex-wrap flex space-x-5">
                <div className="space-x-2 text-base">
                  <FieldTimeOutlined className="text-yellow-400" />
                  <span className="mr-3 text-black">
                    {course.luotXem} hours
                  </span>
                </div>
                <div className="space-x-2">
                  <CalendarOutlined className="text-red-400" />
                  <span className="mr-3 text-black">{course.ngayTao}</span>
                </div>
                <div className="space-x-2">
                  <BarChartOutlined className="text-blue-400" />
                  <span className="mr-3 text-black">All level</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap">
              <span className="flex items-center">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 text-indigo-500"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="text-gray-600 ml-3">4 Reviews</span>
              </span>
              <span className="flex items-center space-x-2 ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <p>
                  <img
                    className="imgLectures"
                    alt="giangVien"
                    src="/img/student3.jpg"
                  />
                </p>
                <p>
                  <p>{course.nguoiTao.hoTen}</p>
                  <p>Lecture</p>
                </p>
              </span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-xl text-gray-900">
                $1.200
              </span>
              <button
                className="flex ml-auto text-white border-0 py-2 px-6 focus:outline-none rounded btnCancelCourse"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Cancel Course
              </button>
              <ModalDelete course={course}/>  
            </div>
          </div>
        </div>
      </div>
    ));
    const onSearch = (value) => {
      // console.log("🚀 ~ onSearch ~ value:", value)
      dispatch(setSearchForm(value))
    };
    const handleSubmit = (e)=>{
      e.preventDefault();
    }
  return (
    <div className="text-gray-600 body-font overflow-hidden myCourses mt-3">
      <div className="block sm:flex justify-between items-center mb-4">
        <div>
          <h3 className="text-xl text-black uppercase font-bold">My courses</h3>
        </div>
        <form className="searchFormPersonal" onSubmit={handleSubmit}>
          <Search
            placeholder="Search courses..."
            onSearch={onSearch}
            enterButton
          />
        </form>
      </div>
      <div className="overflow-y-scroll h-96 mb-5">
        {renderRegisterCourses()}
      </div>
    </div>
  );
}
