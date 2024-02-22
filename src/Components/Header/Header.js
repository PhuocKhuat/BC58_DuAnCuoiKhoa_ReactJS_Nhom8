import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./styleHeader.css";
import HeaderAbove from "./HeaderAbove";
import Search from "antd/es/input/Search";
import { fetchCoursesList } from "../../Redux/personalSliceThunk";
import { https } from "../../Services/api";
import {
  setCatalog,
  setIsHovering,
  // setSearchCourse,
} from "../../Redux/headerSlice";

export default function Header() {
  const { user, catalog, isHovering } = useSelector(
    (state) => state.headerSlice
  );
  const navigate = useNavigate();
  // console.log("🚀 ~ Header ~ searchCourse:", searchCourse)
  // console.log("🚀 ~ Header ~ coursesList:", coursesList)
  // console.log("🚀 ~ Header ~ isHovering:", isHovering);
  // console.log("🚀 ~ Header ~ catalog:", catalog)
  // console.log("🚀 ~ Header ~ taiKhoan:", user);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchCourseCatalog();
  }, []);
  const fetchCourseCatalog = async () => {
    try {
      let res = await https.get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc");
      dispatch(setCatalog(res.data));
    } catch (error) {
      console.log(error);
    }
  };
  const renderCatalog = () =>
    catalog.map((item, index) => (
      <li key={index}>
        <NavLink to={`/coursecatalog/${item.maDanhMuc}`} onClick={()=>{
          window.location.href(`/coursecatalog/${item.maDanhMuc}`)
        }}
        >
          {item.tenDanhMuc}
        </NavLink>
      </li>
    ));
  const renderMenu = () => {
    if (user) {
      return (
        <>
          <div>
            <NavLink onClick={()=>{
              navigate("/personalInfo");
              window.location.reload();
            }} className="userInfo">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </NavLink>
          </div>
          <div>
            <NavLink
              className="flex items-center btnLogOut"
              onClick={handleLogOut}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 me-2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
              Log Out
            </NavLink>
          </div>
        </>
      );
    }
    return (
      <>
        <NavLink to="/login" className="flex btnLogIn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <span>Log In</span>
        </NavLink>
        <NavLink to="/signup" className="flex space-x-2 btnSignUp">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <span>Sign up</span>
        </NavLink>
      </>
    );
  };
  const handleLogOut = () => {
    localStorage.removeItem("USER_INFO");
    window.location.reload();
  };
  const onSearch = async (value) => {
    // console.log("🚀 ~ onSearch ~ value:", typeof value)
    await navigate("/searchcourse");
    await dispatch(fetchCoursesList(value));
    // dispatch(setSearchCourse(true));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // const handleCourseCatalog = async (maDanhMuc)=>{

  // }
  return (
    <div>
      <HeaderAbove />
      <div
        className="bg-black header text-sm text-white
    font-semibold"
      >
        <div className="container flex justify-between pt-3">
          <div className="flex space-x-3 uppercase">
            <div className="cursor-pointer">
              <a href="/" className="flex space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="computer absolute"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>
                <span>E-Learning</span>
              </a>
            </div>
            <form onSubmit={handleSubmit}>
              <Search
                placeholder="Search courses..."
                onSearch={onSearch}
                enterButton={true}
              />
            </form>
          </div>
          <div className="uppercase cursor-pointer items-center">
            <ul className="flex space-x-5">
              <li
                className="flex relative h-20 transition-all"
                onMouseEnter={() => {
                  dispatch(setIsHovering(true));
                }}
                onMouseLeave={() => {
                  dispatch(setIsHovering(false));
                }}
              >
                <span className="catalogHeader catalogHover">Category</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
                <ul
                  className={`absolute top-6 z-50 space-y-4 catalogUl p-3 ${
                    isHovering ? "" : "hidden"
                  }`}
                >
                  {renderCatalog()}
                </ul>
              </li>
              <li>
                <NavLink className="catalogHeader" to="/course">Course</NavLink>
              </li>
              <li>
                <NavLink className="catalogHeader" to="/event">Event</NavLink>
              </li>
              <li>
                <span className="catalogHeader">Information</span>
              </li>
            </ul>
          </div>
          <div className="flex space-x-3 items-center mb-14">
            {renderMenu()}
          </div>
        </div>
      </div>
    </div>
  );
}
