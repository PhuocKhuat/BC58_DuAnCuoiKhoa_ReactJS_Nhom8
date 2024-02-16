import React from "react";
import {
  LaptopOutlined,
  CameraOutlined,
  BgColorsOutlined,
  BookOutlined,
  YoutubeOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import "./styleCourse.css";
import Pagination from "../Pagination/Pagination";
import CourseOfPage from "./CourseOfPage";

export default function Course() {
  const renderPaginatedCourseList = () => {
    return <CourseOfPage />
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
          <div className="py-3">
            <div>
              <h3 className="mb-5 rounded-3xl bg-yellow-100 p-3 w-36 text-xl titlePaginationCourse">
                Course List
              </h3>
              <div className="flex flex-wrap -mx-4 -my-8 gap-3">
                {renderPaginatedCourseList()}
              </div>
              <Pagination/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
