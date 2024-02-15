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

export default function Course() {
  const renderPaginatedCourseList = () => {
    return <div className="py-8 px-4 lg:w-1/3">
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
            CATEGORY
          </h2>
          <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
            The 400 Blows
          </h1>
          <p className="leading-relaxed mb-5">
            Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
            microdosing tousled waistcoat.
          </p>
          <a className="inline-flex items-center">
            <img
              alt="blog"
              src="https://dummyimage.com/103x103"
              className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
            />
            <span className="flex-grow flex flex-col pl-3">
              <span className="title-font font-medium text-gray-900">
                Alper Kamu
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>;
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
            <p className="text-base">Course</p>
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
          <div className=" px-5 py-24 mx-auto">
            <div className="flex flex-wrap -mx-4 -my-8">
              {renderPaginatedCourseList()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
