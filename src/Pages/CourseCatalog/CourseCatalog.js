import React, { useEffect } from "react";
import {
  LaptopOutlined,
  FieldTimeOutlined,
  ScheduleOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import "./styleCourseCatalog.css";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "antd";
import { fetchCourseCatalog } from "../../Redux/searchCatalogThunk";

export default function CourseCatalog() {
  // const { courseCatalogById } = useSelector(
  //   (state) => state.courseCatalogSlice
  // );
  const { courseCatalogById } = useSelector(
    (state) => state.searchCatalogThunk
  );
  console.log("🚀 ~ CourseCatalog ~ courseCatalogById:", courseCatalogById);
  const { idMaDanhMuc } = useParams();
  const dispatch = useDispatch();
  // console.log("🚀 ~ CourseCatalog ~ idMaDanhMuc:", idMaDanhMuc)
  useEffect(() => {
    // https
    //   .get(
    //     `/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${idMaDanhMuc}&MaNhom=GP09`
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     dispatch(setCourseCatalogById(res.data));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    dispatch(fetchCourseCatalog(idMaDanhMuc));
  }, []);
  const rednerCourseCatalog = () =>
    courseCatalogById.map((course, index) => (
      <NavLink
        to={`/detail/${course.maKhoaHoc}`}
        className="p-4 md:w-full flex borderCourse"
        key={index}
      >
        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
          <img alt="img course" src={course.hinhAnh} />
        </div>
        <div className="flex-grow pl-6 h-36 truncate">
          <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
            {course.tenKhoaHoc}
          </h2>
          <p className="leading-relaxed text-base">{course.moTa}</p>
          <div className="flex gap-2 mt-2">
            <div className="flex gap-1">
              <span className="text-yellow-400">
                <FieldTimeOutlined />
              </span>
              <strong>144 hours</strong>
            </div>
            <div className="flex gap-1">
              <span className="text-red-400">
                <ScheduleOutlined />
              </span>
              <strong>24 weeks</strong>
            </div>
            <div className="flex gap-1">
              <span className="text-blue-400">
                <BarChartOutlined />
              </span>
              <strong>All</strong>
            </div>
          </div>
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
        <div className="courseOverlay"></div>
      </NavLink>
    ));
  const renderTitleCatalog = () =>
    courseCatalogById.map((title, index) =>
      index === 0 ? (
        <strong
          className="titleCourseCatalog flex p-2 gap-2 rounded-2xl"
          key={index}
        >
          <span className="text-yellow-400">
            <LaptopOutlined />
          </span>
          <h3>{title.danhMucKhoaHoc.maDanhMucKhoahoc}</h3>
        </strong>
      ) : (
        ""
      )
    );
  return (
    <div className="text-gray-600 body-font courseCatalog mb-4">
      <div className="container py-10">
        <h1
          className="sm:text-3xl text-2xl title-font text-center text-gray-900 mb-3 uppercase font-bold"
          style={{ letterSpacing: "2px" }}
        >
          <span>Courses Catalog</span>
          <br className="hidden sm:block" />
          <span className="text-base">
            {" "}
            Please select the course you desire
          </span>
        </h1>
        <div>
          <div className="flex gap-2 text-xl mb-10">{renderTitleCatalog()}</div>
          <div className="grid grid-cols-3 sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 gap-3">
            {rednerCourseCatalog()}
          </div>
        </div>
      </div>
    </div>
  );
}
