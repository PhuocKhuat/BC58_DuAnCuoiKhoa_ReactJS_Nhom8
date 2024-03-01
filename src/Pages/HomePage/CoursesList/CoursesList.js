import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./styleCoursesList.css";
import { NavLink } from "react-router-dom";
import { Tooltip } from "antd";
import { fetchCoursesList } from "../../../Redux/personalSliceThunk";

export default function CoursesList() {
  const dispatch = useDispatch();
  const { coursesList } = useSelector((state) => state.personalSliceThunk);
  // console.log("🚀 ~ CoursesList ~ CoursesList:", coursesList);
  useEffect(() => {
    dispatch(fetchCoursesList());
  }, []);
  const renderCoursesList = () => {
    return coursesList.map((course, index) => (
      <NavLink
        to={`/detail/${course.maKhoaHoc}`}
        className="text-gray-600 body-font overflow-hidden"
        key={index}
      >
        <div className="courseDesc mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="p-8 flex md:flex-nowrap space-x-5">
              <div className="md:w-28 md:mb-0 mb-6 flex-shrink-0 flex flex-col mt-2">
                <span className="font-semibold title-font text-gray-700">
                  <img
                    alt={course.biDanh}
                    src={course.hinhAnh}
                    className="w-14"
                  />
                </span>
                <span className="mt-1 text-gray-500 text-sm">
                  {course.ngayTao}
                </span>
              </div>
              <div className="md:flex-grow truncate h-28">
                <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-900 title-font mb-2">
                  {course.tenKhoaHoc}
                </h2>
                <Tooltip title={course.moTa}>
                  <p className="leading-relaxed courseMoTa text-gray-400 h-4">
                    {course.moTa}
                  </p>
                </Tooltip>
                <NavLink className="text-indigo-500 inline-flex items-center mt-4 btnLearnMore">
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
    ));
  };
  const renderListPopularCourses = () => {
    return coursesList.slice(6, 10).map((courses, index) => (
      <NavLink
        to={`/detail/${courses.maKhoaHoc}`}
        class="text-gray-600 body-font"
        key={index}
      >
        <div className="px-3">
          <div>
            <div className="p-4 paddingPopularCourse">
              <div className="hoverBorder border border-gray-200 p-6 rounded-lg flex justify-evenly space-x-4 relative">
                <div className="divImgPopular inline-flex items-center justify-center rounded-full bg-indigo-100 mb-4">
                  <div className="popular">
                    <span>Popular</span>
                  </div>
                  <img
                    alt="hình ảnh khoá học phổ biến"
                    src={courses.hinhAnh}
                    className="imgPopular"
                  />
                </div>
                <div className="h-28 overflow-hidden">
                  <h2 className="text-lg font-bold title-font mb-2 text-black">
                    {courses.tenKhoaHoc}
                  </h2>
                  <p className="leading-relaxed text-base text-white ">{courses.moTa}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    ));
  };
  return (
    <div className="courseList">
      <div className="container">
        <h1 className="exploreTitle font-bold pb-9  text-white text-center uppercase">
          Explore E-learing courses
        </h1>
        <div className="grid grid-cols-12 frameCourse">
          <div className="bgCourseList col-span-8">
            <h3 className="text-xl text-white font-bold bgCourse ">
              E-learning's courses
            </h3>
            {renderCoursesList()}
          </div>
          <div className="col-span-4">{renderListPopularCourses()}</div>
        </div>
      </div>
    </div>
  );
}
