import React, { useEffect } from "react";
import {
  LaptopOutlined,
  CameraOutlined,
  BgColorsOutlined,
  BookOutlined,
  YoutubeOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import "./styleCourse.css";
import { https } from "../../Services/api";
import { useDispatch, useSelector } from "react-redux";
import { setPaginationCourse } from "../../Redux/courseSlice";
import { Tooltip } from "antd";

export default function Course() {
  const { paginationCourse } = useSelector((state) => state.courseSlice);
  const dispatch = useDispatch();
  // console.log("🚀 ~ Course ~ paginationCourse:", paginationCourse)
  useEffect(() => {
    https
      .get(
        "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=10&MaNhom=GP09"
      )
      .then((res) => {
        console.log(res);
        dispatch(setPaginationCourse(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const renderPaginatedCourseList = () => {
    return paginationCourse.items.map((course, index) => (
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
    ));
  };

  return (
    <div className="course">
      <div className="container py-10">
        <div>
          <div
            className="sm:text-3xl text-2xl title-font text-center text-gray-900 mb-3 uppercase font-bold"
            style={{ letterSpacing: "2px" }}
          >
            <h3 className="mb-2">Courses</h3>
            <p className="text-base">PLEASE SELECT THE COURSE YOU DESIRE</p>
          </div>
          <div className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto">
              <div className="flex flex-wrap -m-4">
                <div className="px-5 py-4 lg:w-1/3 md:w-1/2 w-full bgCourseList">
                  <div className="h-full rounded-lg overflow-hidden text-center relative text-white font-bold">
                    <h1 className="title-font sm:text-2xl text-xl mb-2">
                      Program
                    </h1>
                    <p style={{ fontSize: "40px" }}>
                      <LaptopOutlined />
                    </p>
                    <p className="text-2xl mt-2 font-medium">100</p>
                  </div>
                </div>
                <div className="px-5 py-4 lg:w-1/3 md:w-1/2 w-full bgCourseList">
                  <div className="h-full rounded-lg overflow-hidden text-center relative text-white font-bold">
                    <h1 className="title-font sm:text-2xl text-xl mb-2">
                      Creator
                    </h1>
                    <p style={{ fontSize: "40px" }}>
                      <CameraOutlined />
                    </p>
                    <p className="text-2xl mt-2 font-medium">40</p>
                  </div>
                </div>
                <div className="px-5 py-4 lg:w-1/3 md:w-1/2 w-full bgCourseList">
                  <div className="h-full rounded-lg overflow-hidden text-center relative text-white font-bold">
                    <h1 className="title-font sm:text-2xl text-xl mb-2">
                      Designer
                    </h1>
                    <p style={{ fontSize: "40px" }}>
                      <BgColorsOutlined />
                    </p>
                    <p className="text-2xl mt-2 font-medium">30</p>
                  </div>
                </div>
                <div className="px-5 py-4 lg:w-1/3 md:w-1/2 w-full bgCourseList">
                  <div className="h-full rounded-lg overflow-hidden text-center relative text-white font-bold">
                    <h1 className="title-font sm:text-2xl text-xl mb-2">
                      Lesson
                    </h1>
                    <p style={{ fontSize: "40px" }}>
                      <BookOutlined />
                    </p>
                    <p className="text-2xl mt-2 font-medium">110</p>
                  </div>
                </div>
                <div className="px-5 py-4 lg:w-1/3 md:w-1/2 w-full bgCourseList">
                  <div className="h-full rounded-lg overflow-hidden text-center relative text-white font-bold">
                    <h1 className="title-font sm:text-2xl text-xl mb-2">
                      Video
                    </h1>
                    <p style={{ fontSize: "40px" }}>
                      <YoutubeOutlined />
                    </p>
                    <p className="text-2xl mt-2 font-medium">1000</p>
                  </div>
                </div>
                <div className="px-5 py-4 lg:w-1/3 md:w-1/2 w-full bgCourseList">
                  <div className="h-full rounded-lg overflow-hidden text-center relative text-white font-bold">
                    <h1 className="title-font sm:text-2xl text-xl mb-2">
                      Field
                    </h1>
                    <p style={{ fontSize: "40px" }}>
                      <RadarChartOutlined />
                    </p>
                    <p className="text-2xl mt-2 font-medium">70</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-gray-600 body-font">
          <div className="py-16">
            <div>
              <h3 className="mb-5 rounded-3xl bg-yellow-100 p-3 w-36 text-xl titlePaginationCourse">
                Course List
              </h3>
              <div className="flex flex-wrap -mx-4 -my-8 gap-3">
                {renderPaginatedCourseList()}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
