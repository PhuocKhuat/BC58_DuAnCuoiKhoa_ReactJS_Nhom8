import { Tooltip } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPaginationCourse } from "../../../Redux/courseSlice";

export default function CourseOfPage() {
  const { paginationCourse } = useSelector((state) => state.courseSlice);
  // console.log("🚀 ~ CourseOfPage ~ paginationCourse:", paginationCourse)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchPaginationCourse());
  },[]);
  return paginationCourse.items ? paginationCourse.items.map((course, index) => (
    <div className="py-8 px-3 frameCourse bg-slate-200" key={index}>
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
          <div className="flex justify-between items-center">
            <Tooltip title={course.tenKhoaHoc}>
              <h1 className="title-font text-xl font-medium text-gray-900 mb-3 truncate">
                {course.tenKhoaHoc}
              </h1>
            </Tooltip>
            <img
              alt={`img ${course.biDanh}`}
              src={course.hinhAnh}
              className="w-20 h-10 object-cover me-3 mb-3"
            />
          </div>
          <Tooltip title={course.moTa}>
            <p
              className="leading-relaxed mb-3 truncate"
              style={{ width: "290px" }}
            >
              {course.moTa}
            </p>
          </Tooltip>
          <span className="inline-flex items-center">
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
          </span>
        </div>
      </div>
      <div className="paginationCourseOverlay"></div>
    </div>
  )) : ""
}
