import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import "./styleHeader.css";
import HeaderAbove from "./HeaderAbove";
import Search from "antd/es/input/Search";
import { fetchCoursesList } from "../../Redux/personalSliceThunk";
import { https } from "../../Services/api";
import { setCatalog, setIsHovering } from "../../Redux/headerSlice";
import { MenuFoldOutlined, CloseOutlined } from "@ant-design/icons";

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
  const navRef = useRef();
  useEffect(() => {
    fetchCourseCatalogs();
  }, []);
  const fetchCourseCatalogs = async () => {
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
        <NavLink to={`/coursecatalog/${item.maDanhMuc}`} onClick={showNavbar}>
          {item.tenDanhMuc}
        </NavLink>
      </li>
    ));
  const renderMenu = () => {
    if (user) {
      return (
        <>
          <div>
            <NavLink
              onClick={() => {
                navigate("/personalInfo");
                showNavbar();
                window.location.reload();
                window.scrollTo(0, 0);
              }}
              className="userInfo catalogHeaderUser"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
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
              className="flex items-center btnLogOut catalogHeaderUser"
              onClick={()=>{
                handleLogOut();
                showNavbar();
              }}
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
              <p className="hidden lg:block">Logout</p>
            </NavLink>
          </div>
        </>
      );
    }
    return (
      <>
        <NavLink to="/login" className="flex items-center btnLogIn catalogHeaderUser" onClick={()=>{
          window.scrollTo(0, 0);
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 hidden lg:block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <p className="md:w-2/3 w-44">Log In</p>
        </NavLink>
        <NavLink to="/signup" className="flex space-x-2 items-center btnSignUp catalogHeaderUser" onClick={()=>{
          window.scrollTo(0, 0)
        }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 hidden lg:block"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
          <span className="md:w-1/2 w-20">Sign up</span>
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
    await navigate(`/searchcourse/${value}`);
    await dispatch(fetchCoursesList(value));
    // dispatch(setSearchCourse(true));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <div>
      <HeaderAbove />
      <div
        className="header bg-black text-sm text-white
    font-semibold flex items-center"
      >
        <div className="container flex justify-between pt-3">
          <div className="flex space-x-3 uppercase logoHeader">
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
          </div>
          <nav
            ref={navRef}
            className="flex uppercase cursor-pointer items-center ms-0 lg:ms-3 mt-10"
          >
            <form onSubmit={handleSubmit} className="mb-14 formHeader lg:me-14">
              <Search
                placeholder="Search courses..."
                onSearch={onSearch}
                enterButton={true}
              />
            </form>
            <ul className="space-x-0 lg:space-x-5 ms-20 lg:ms-3 lg:me-48 block lg:flex text-lg lg:text-sm w-full lg:w-56">
              <li
                className="flex relative h-12 lg:h-20 transition-all"
                onMouseEnter={() => {
                  dispatch(setIsHovering(true));
                }}
                onMouseLeave={() => {
                  dispatch(setIsHovering(false));
                }}
              >
                <div className="catalogHeader catalogHover w-full lg:w-20">Category</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 me-3 lg:me-0"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
                <ul
                  className={`absolute top-10 left-28 lg:left-0 z-50 space-y-4 catalogUl p-3 ${
                    isHovering ? "" : "hidden"
                  }`}
                >
                  {renderCatalog()}
                </ul>
              </li>
              <li className="h-12 lg:h-0">
                <NavLink className="catalogHeader" to="/course" onClick={showNavbar}>
                  Course
                </NavLink>
              </li>
              <li className="h-12 lg:h-0">
                <NavLink className="catalogHeader" to="/event" onClick={showNavbar}>
                  Event
                </NavLink>
              </li>
            </ul>
            <div className="block lg:flex space-x-0 lg:space-x-3 items-center lg:ms-3 me-10 lg:me-0 space-y-5 lg:space-y-0 text-lg lg:text-sm w-4/5 lg:w-20 headerRight">
              {renderMenu()}
            </div>
            <CloseOutlined className="nav-close-btn nav-btn"onClick={showNavbar} />
          </nav>
        <MenuFoldOutlined
          onClick={showNavbar}
          className="nav-btn"
        />
        </div>
      </div>
    </div>
  );
}
