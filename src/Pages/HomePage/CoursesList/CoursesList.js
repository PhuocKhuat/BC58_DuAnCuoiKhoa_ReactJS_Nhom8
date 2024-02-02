import React, { useEffect } from "react";
import { https } from "../../../Services/api";
import { useDispatch, useSelector } from "react-redux";
import { setCoursesList } from "../../../Redux/homeSlice";
import "./styleCoursesList.css";
import { NavLink } from "react-router-dom";
import { Tooltip } from "antd";

export default function CoursesList() {
  const dispatch = useDispatch();
  const { coursesList } = useSelector((state) => state.homeSlice);
  //   console.log("🚀 ~ CoursesList ~ CoursesList:", coursesList);
  useEffect(() => {
    https
      .get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09")
      .then((res) => {
        // console.log(res.data);
        dispatch(setCoursesList(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderCoursesList = () => {
    return coursesList.map((course, index) => (
      <section className="text-gray-600 body-font overflow-hidden" key={index}>
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
                <span className="mt-1 text-gray-500 text-sm">{course.ngayTao}</span>
              </div>
              <div className="md:flex-grow truncate h-28">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  {course.tenKhoaHoc}
                </h2>
                <Tooltip title={course.moTa}>
                <p className="leading-relaxed courseMoTa text-gray-400 h-4">
                  {course.moTa} 
                </p>
                </Tooltip>
                <NavLink to={`/detail/${course.maKhoaHoc}`} className="text-indigo-500 inline-flex items-center mt-4 btnLearnMore">
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
      </section>
    ));
  };
  return (
    <div className="courseList">
      <div className="container">
        <h1 className="exploreTitle font-bold pb-9  text-white text-center uppercase">Explore E-learing courses</h1>
        <div className="bgCourseList">
        <h3 className="text-xl text-white font-bold bgCourse ">E-learning's courses</h3>
        {renderCoursesList()}
        </div>
      </div>
    </div>
  );
}
