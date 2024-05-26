import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPaginationCourse } from "../../../Redux/courseSlice";
import { NavLink } from "react-router-dom";
import "./styleCourse.css";
import Pagination from "../Pagination/Pagination";

export default function CourseOfPage() {
  const { paginationCourse } = useSelector((state) => state.courseSlice);
  // console.log("🚀 ~ CourseOfPage ~ paginationCourse:", paginationCourse)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPaginationCourse());
  }, []);
  const renderPaginationCourse = () =>
    paginationCourse.items
      ? paginationCourse.items.map((course, index) => (
          <NavLink
            to={`/detail/${course.maKhoaHoc}`}
            className="py-8 px-3 frameCourse bg-slate-200"
            key={index}
          >
            <div className="h-full flex items-start">
              <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
                <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
                  Jul
                </span>
                <span className="font-medium text-lg text-gray-800 title-font leading-none">
                  18
                </span>
              </div>
              <div className="flex-grow pl-6">
                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                  {course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
                </h2>
                <div className="courseOfPageHeader justify-between items-center">
                  <h1 className="title-font text-xl font-medium text-gray-900 mb-3 truncate titleCourseOfPage">
                    {course.tenKhoaHoc}
                  </h1>
                  <img
                    alt={`img ${course.biDanh}`}
                    src={course.hinhAnh}
                    className="w-20 h-10 object-cover me-3 mb-3 imgCourseOfPage"
                  />
                </div>
                <div>
                  <p
                    className="leading-relaxed mb-3 truncate moTaCourseOfPage"
                  >
                    {course.moTa}
                  </p>
                </div>
                <div className="inline-flex justify-between">
                  <div className="footerCourseOfPage items-center">
                    <img
                      alt="imageLecture"
                      src="/img/student3.jpg"
                      className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-3">
                      <span className="title-font font-medium text-gray-900">
                        {course.nguoiTao.hoTen}
                      </span>
                    </span>
                  </div>
                  <div className="btnLearnMore">
                    <p className="mt-3 text-indigo-500 inline-flex items-center btnLearnMores">
                      Learn More
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 ml-2 arrows"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="paginationCourseOverlay"></div>
          </NavLink>
        ))
      : "";
  return (
    <div className="body-font courseOfPage">
      <div className="container pt-16 pb-24">
        <div className="text-gray-600">
          <div>
            <h3 className="mb-4 rounded-3xl bg-yellow-100 p-3 w-36 text-xl titlePaginationCourse">
              Course List
            </h3>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 space-x-2 space-y-3">
          {renderPaginationCourse()}
        </div>
        <Pagination/>
      </div>
    </div>
  );
}
