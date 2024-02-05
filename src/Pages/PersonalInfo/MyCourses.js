import React from "react";
import { useSelector } from "react-redux";
import {
  FieldTimeOutlined,
  CalendarOutlined,
  BarChartOutlined,
} from "@ant-design/icons";

export default function MyCourses() {
  const { detail } = useSelector((state) => state.detailSlice);
//   console.log("🚀 ~ MyCourses ~ detail:", detail);
  const renderRegisterCourses = () => (
    <section className="text-gray-600 body-font overflow-hidden myCourses">
      <div className="flex justify-between">
        <div>
          <h3 className="text-xl text-black uppercase">My courses</h3>
        </div>
        <form>
          <input
            type="text"
            className="searchCoursesInfo"
            placeholder="Search courses..."
          ></input>
        </form>
      </div>
      <div className="py-5">
        <div className="lg:w-4/5 flex mx-auto w-4/5 flex-wrap">
          <img
            alt="imageCourses"
            className="lg:w-1/2 w-full lg:h-52 h-64 object-cover object-center rounded"
            src={detail.hinhAnh}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:pb-6 mt-0 lg:mt-0">
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-2">
              The Catcher in the Rye
            </h1>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric.
            </p>
            <div className="flex items-center border-b-2 border-gray-100 my-2">
              <div className="flex space-x-5">
                <div className="space-x-2 text-base">
                  <FieldTimeOutlined className="text-yellow-400" />
                  <span className="mr-3 text-black">48 hours</span>
                </div>
                <div className="space-x-2">
                  <CalendarOutlined className="text-red-400" />
                  <span className="mr-3 text-black">26-02-2024</span>
                </div>
                <div className="space-x-2">
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
                  <img  className="imgLectures" alt="giangVien" src="/img/student3.jpg" />
                </p>
                <p>
                    <span>John Browngood</span>
                </p>
              </span>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                $1.2
              </span>
              <button className="flex ml-auto text-white border-0 py-2 px-6 focus:outline-none rounded btnCancelCourse">
                Cancel Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  return <div>{renderRegisterCourses()}</div>;
}
