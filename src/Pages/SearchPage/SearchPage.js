import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FieldTimeOutlined,
  CalendarOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { Checkbox, Tooltip } from "antd";
import { NavLink } from "react-router-dom";
import { fetchCoursesList } from "../../Redux/personalSliceThunk";
import "./styleSearchPage.css";

export default function SearchPage() {
  const { coursesList } = useSelector((state) => state.personalSliceThunk);
  const { catalog } = useSelector((state) => state.headerSlice);
  //   console.log("🚀 ~ SearchPage ~ catalog:", catalog)
  //   console.log("🚀 ~ SearchPage ~ coursesList:", coursesList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoursesList());
  }, []);
  const renderSearchCourseList = () => {
    return coursesList.map((course, index) => (
      <NavLink to={`/detail/${course.maKhoaHoc}`}>
        <div className="mb-5 p-3 courseBorder" key={index}>
          <div className="lg:w-11/12 flex w-4/5 flex-wrap">
            <img
              alt="imageCourses"
              className="lg:w-1/2 w-1/3 h-64 object-cover object-center rounded"
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
                <div className="flex space-x-5">
                  <div className="flex items-center space-x-2 text-base">
                    <FieldTimeOutlined className="text-yellow-400" />
                    <span className="mr-3 text-black">
                      {course.luotXem} hours
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarOutlined className="text-red-400" />
                    <span className="mr-3 text-black">{course.ngayTao}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <BarChartOutlined className="text-blue-400" />
                    <span className="mr-3 text-black">All level</span>
                  </div>
                </div>
              </div>
              <div className="flex">
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
              <div className="flex justify-between items-center">
                <span className="title-font font-medium text-xl text-gray-900">
                  $1.200
                </span>
                <NavLink className="text-indigo-500 inline-flex items-center btnLearnMore">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 arrow"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    )) 
  };
  const renderFilterCourse = () => {
    return coursesList.map((course, index) => (
      <li className="flex items-center" key={index}>
        <Checkbox value={course.tenKhoaHoc}>{course.tenKhoaHoc}</Checkbox>
      </li>
    ));
  };
  const onChangeFilterCourse = (checkedValues) => {
    dispatch(fetchCoursesList(checkedValues.toString()));
    console.log("checked = ", typeof checkedValues);
  };

  return (
    <div className="searchPage text-gray-600 body-font overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-3 mt-24">
            <div className="flex items-center justify-center p-4">
              <div
                id="dropdown"
                className="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700 scrollFilter"
              >
                <h3 className="mb-3 font-bold text-gray-900 dark:text-white text-xl">
                  Category
                </h3>
                <h6 className="mb-3 text-base font-medium text-gray-900 dark:text-white">
                  Courses
                </h6>
                <Checkbox.Group
                  style={{
                    width: "100%",
                  }}
                  onChange={onChangeFilterCourse}
                >
                  <ul
                    className="space-y-2 text-sm"
                    aria-labelledby="dropdownDefault"
                  >
                    {renderFilterCourse()}
                  </ul>
                </Checkbox.Group>
              </div>
            </div>
          </div>
          <div
            className="m-5 col-span-9"
          >
            <h2 className="mb-9 text-xl font-bold">Showing {coursesList.length}  results</h2>
            <div className="overflow-y-scroll" style={{height: "500px", background: "white"}}>{renderSearchCourseList()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
