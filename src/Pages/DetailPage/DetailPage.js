import React, { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { https } from "../../Services/api";
import { useDispatch, useSelector } from "react-redux";
import { setDetail } from "../../Redux/detailSlice";
import { UserOutlined, CheckOutlined } from "@ant-design/icons";
import "./styleDetail.css";
import Swal from "sweetalert2";
import { fetchThongTinTaiKhoan, setAddCourse } from "../../Redux/personalSlice";

export default function DetailPage() {
  const { idKhoaHoc } = useParams();
  // console.log("🚀 ~ DetailPage ~ idKhoaHoc:", idKhoaHoc)
  const { detail } = useSelector((state) => state.detailSlice);
  // console.log("🚀 ~ DetailPage ~ detail:", detail)
  const dispatch = useDispatch();
  useEffect(() => {
    https
      .get(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${idKhoaHoc}`)
      .then((res) => {
        console.log(res.data);
        dispatch(setDetail(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleRegisterCourse = async (maKhoaHoc) => {
    const checkLogin = localStorage.getItem("USER_INFO");
    if (checkLogin) {
      const logged = JSON.parse(checkLogin);
      const objectRegisterCourse = {
        maKhoaHoc: maKhoaHoc,
        taiKhoan: logged.taiKhoan,
      };
      try {
        await https.post("/api/QuanLyKhoaHoc/DangKyKhoaHoc", objectRegisterCourse);
        dispatch(fetchThongTinTaiKhoan());
        Swal.fire({
          title: "Sign up success.",
          text: "If you want, go to your personal information page to check",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      } catch (error) {
        console.log("🚀 ~ handleRegisterCourse ~ error:", error);
      }
    }
  };
  return (
    <section className="text-gray-600 body-font detail">
      <div className="containerDetail">
        <div className="px-5 py-14 mx-auto flex flex-wrap justify-between">
          <div className="flex flex-col flex-wrap  -mb-10 lg:w-1/2 lg:text-left">
            <div className="flex flex-col mb-10 lg:items-start items-center">
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3 uppercase titleDetail">
                  {detail.tenKhoaHoc}
                </h2>
                <p className="leading-relaxed text-base">
                  {detail.moTa}
                  <br />
                  <br />
                  <p>
                    Đừng để những ước mơ, đam mê, mong muốn xây dựng sự nghiệp của riêng mình rơi vào tay người khác qua những câu hỏi của người này hay nhóm kia: CÓ NÊN HỌC LẬP TRÌNH KHÔNG? Lập trình là một xu hướng tất yếu, hãy bắt đầu ngay bây giờ, bạn có thể thay đổi nghề nghiệp, tăng thu nhập bằng cách làm freelancer hoặc ít nhất nó sẽ là kỹ năng rất cần thiết cho công việc của bạn sau này. lần tới. sắp tới. Khi mới học lập trình, bạn sẽ rất mất phương hướng, thiếu định hướng và đôi khi nản lòng vì không nhận được sự hỗ trợ kịp thời. Thời gian và sức trẻ của bạn rất quý giá, bạn cần một lộ trình thực tế, bài bản để nhanh chóng thay đổi nghề nghiệp của mình. E-Learning hiểu rõ điều này và đã có hơn 9.500+ người đăng ký học và có việc làm thông qua chương trình đào tạo Bootcamp Lập trình Front-End chuyên nghiệp từ Zero tại E-Learning.
                  </p>
                </p>
                <div className="mt-3 inline-flex items-center participateDetail">
                  <div className="grid grid-cols-2 space-x-5">
                    <div>
                      <div className="flex space-x-5 uppercase catalogHeader">
                        <UserOutlined />
                        <p>Who can participate?</p>
                      </div>
                      <div>
                        <ul>
                          <li className="space-x-1">
                            <CheckOutlined />
                            <span className="text-black">
                              New to programming, lacking direction and learning path.
                            </span>
                          </li>
                          <li className="space-x-1">
                            <CheckOutlined />
                            <span className="text-black">
                              Quit the industry to learn programming and change careers.
                            </span>
                          </li>
                          <li className="space-x-1">
                            <CheckOutlined />
                            <span className="text-black">
                              Completion of high school program (12/12).
                            </span>
                          </li>
                          <li className="space-x-1">
                            <CheckOutlined />
                            <span className="text-black">
                              Weak programming thinking, lost roots and want to learn to get a job.
                            </span>
                          </li>
                          <li className="space-x-1">
                            <CheckOutlined />
                            <span className="text-black">
                              Weak programming thinking, lost roots and want to learn to get a job
                            </span>
                          </li>
                          <li className="space-x-1">
                            <CheckOutlined />
                            <span className="text-black">
                              Add a job to earn extra income overtime
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <div className="flex uppercase space-x-5 catalogHeader">
                        <UserOutlined />
                        <p>Where to work after studying?</p>
                      </div>
                      <div>
                        <ul>
                          <li className="space-x-1">
                            <CheckOutlined />
                            <span className="text-black">
                              Applicable to all companies recruiting Front-End Dev for Fresher or Junior positions.
                            </span>
                          </li>
                          <li className="space-x-1">
                            <CheckOutlined />
                            <span className="text-black">
                              Outsourcing companies - software outsourcing.
                            </span>
                          </li>
                          <li className="space-x-1">
                            <CheckOutlined />
                            <span className="text-black">
                              Start-up company - startup.
                            </span>
                          </li>
                          <li className="space-x-1">
                            <CheckOutlined />
                            <span className="text-black">
                              Domestic and foreign companies and corporations...
                            </span>
                          </li>
                          <li className="space-x-1">
                            <CheckOutlined />
                            <span className="text-black">
                              You can apply immediately to Fresher and Junior
                              with a starting salary from 7 million to 15 million
                            </span>
                          </li>
                          <li className="space-x-1">
                            <CheckOutlined />
                            <span className="text-black">
                              Get freelance work building user interfaces for websites
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/5 w-full mb-10 lg:mb-0 rounded-lg">
            <div>
              <div className="detailRight">
                <div>
                  <img
                    alt="feature"
                    className="object-cover object-center h-full w-full imgDetail"
                    src={detail.hinhAnh}
                  />
                </div>
                <div className="borderBig"></div>
                <div className="borderSmall"></div>
              </div>
            </div>
            <div className="payCourseDetail p-4">
              <div className="coursesPrice">
                <p className="flex justify-end items-center text-3xl mb-4 font-bold priceCourseDetail">
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
                      d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <span>1.200</span>
                </p>
              </div>
              <NavLink
                className="btnRegisterCourse rounded py-2 px-14 flex justify-center text-white uppercase font-bold"
                onClick={() => {
                  if (localStorage.getItem("USER_INFO")) {
                    handleRegisterCourse(idKhoaHoc);
                    dispatch(setAddCourse(detail));
                  } else{
                    Swal.fire({
                    icon: "error",
                    title: "You are not logged in",
                    text: "Please visit the login page",
                    timer: 1500,
                    showConfirmButton: false,
                  });
                  }
                  
                }}
              >
                Register the course
              </NavLink>
              <div className="infoDetail">
                <ul>
                  <li className="flex justify-between items-center">
                    <p>
                      Course Name:{" "}
                      <span className="font-bold">{detail.tenKhoaHoc}</span>
                    </p>
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
                        d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                      />
                    </svg>
                  </li>
                  <li className="flex justify-between items-center">
                    <p>
                      Register:{" "}
                      <span className="font-bold">{detail.soLuongHocVien}</span>
                    </p>
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
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                      />
                    </svg>
                  </li>
                  <li className="flex justify-between items-center">
                    <p>
                      Lesson:{" "}
                      <span className="font-bold">{detail.luotXem}</span>
                    </p>
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
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </li>
                  <li className="flex justify-between items-center">
                    <p>
                      Video: <span className="font-bold">{detail.luotXem}</span>
                    </p>
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
                        d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                      />
                    </svg>
                  </li>
                  <li className="flex justify-between items-center">
                    <p>
                      Level: <span className="font-bold">Beginner</span>
                    </p>
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
                        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                      />
                    </svg>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 ">
          <div className="text-center pb-10">
            <h1 className="titleNDKHoc">
              100% PRACTICE TRAINING THROUGH 8 TOPICS & MORE THAN 25 PROJECTS
              FROM ZERO
            </h1>
            <h3>Learn according to the company's recruitment roadmap</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
            <div className="bgChuongTrinh">
              <div className="bgOverlay1"></div>
              <div className="mb-6">
                <div>
                  <img alt="" src="/img/html.png" className="imgChuongTrinh" />
                </div>
                <div>
                  <h3>
                    Topic 1: Front End career orientation, UI - UX foundation
                  </h3>
                </div>
                <div>
                  <span>Career orientation</span>
                  <span>Vocational skills</span>
                  <span>UI/UX</span>
                  <span>How to learn programming</span>
                  <span>Landing Page</span>
                </div>
              </div>
            </div>
            <div className="bgChuongTrinh">
              <div className="bgOverlay2"></div>
              <div className="mb-6">
                <div>
                  <img alt="" src="/img/css.jpg" className="imgChuongTrinh" />
                </div>
                <div>
                  <h3>
                    Topic 2: Front End career orientation, UI - UX foundation
                  </h3>
                </div>
                <div>
                  <span>Career orientation</span>
                  <span>Vocational skills</span>
                  <span>UI/UX</span>
                  <span>How to learn programming</span>
                  <span>Landing Page</span>
                </div>
              </div>
            </div>
            <div className="bgChuongTrinh">
              <div className="bgOverlay3"></div>
              <div className="mb-6">
                <div>
                  <img
                    alt=""
                    src="/img/boostraps.png"
                    className="imgChuongTrinh"
                  />
                </div>
                <div>
                  <h3>
                    Topic 3: Front End career orientation, UI - UX foundation
                  </h3>
                </div>
                <div>
                  <span>Career orientation</span>
                  <span>Vocational skills</span>
                  <span>UI/UX</span>
                  <span>How to learn programming</span>
                  <span>Landing Page</span>
                </div>
              </div>
            </div>
            <div className="bgChuongTrinh">
              <div className="bgOverlay4"></div>
              <div className="mb-6">
                <div>
                  <img
                    alt=""
                    src="/img/responsives.jpg"
                    className="imgChuongTrinh"
                  />
                </div>
                <div>
                  <h3>
                    Topic 4: Front End career orientation, UI - UX foundation
                  </h3>
                </div>
                <div>
                  <span>Career orientation</span>
                  <span>Vocational skills</span>
                  <span>UI/UX</span>
                  <span>How to learn programming</span>
                  <span>Landing Page</span>
                </div>
              </div>
            </div>
            <div className="bgChuongTrinh">
              <div className="bgOverlay5"></div>
              <div className="mb-6">
                <div>
                  <img alt="" src="/img/git.png" className="imgChuongTrinh" />
                </div>
                <div>
                  <h3>
                    Topic 5: Front End career orientation, UI - UX foundation
                  </h3>
                </div>
                <div>
                  <span>Career orientation</span>
                  <span>Vocational skills</span>
                  <span>UI/UX</span>
                  <span>How to learn programming</span>
                  <span>Landing Page</span>
                </div>
              </div>
            </div>
            <div className="bgChuongTrinh">
              <div className="bgOverlay6"></div>
              <div className="mb-6">
                <div>
                  <img alt="" src="/img/jS.jpg" className="imgChuongTrinh" />
                </div>
                <div>
                  <h3>
                    Topic 6: Front End career orientation, UI - UX foundation
                  </h3>
                </div>
                <div>
                  <span>Career orientation</span>
                  <span>Vocational skills</span>
                  <span>UI/UX</span>
                  <span>How to learn programming</span>
                  <span>Landing Page</span>
                </div>
              </div>
            </div>
            <div className="bgChuongTrinh">
              <div className="bgOverlay7"></div>
              <div className="mb-6">
                <div>
                  <img alt="" src="/img/APIs.jpg" className="imgChuongTrinh" />
                </div>
                <div>
                  <h3>
                    Topic 7: Front End career orientation, UI - UX foundation
                  </h3>
                </div>
                <div>
                  <span>Career orientation</span>
                  <span>Vocational skills</span>
                  <span>UI/UX</span>
                  <span>How to learn programming</span>
                  <span>Landing Page</span>
                </div>
              </div>
            </div>
            <div className="bgChuongTrinh">
              <div className="bgOverlay8"></div>
              <div className="mb-6">
                <div>
                  <img
                    alt=""
                    src="/img/reactJs.jpg"
                    className="imgChuongTrinh"
                  />
                </div>
                <div>
                  <h3>
                    Topic 8: Front End career orientation, UI - UX foundation
                  </h3>
                </div>
                <div>
                  <span>Career orientation</span>
                  <span>Vocational skills</span>
                  <span>UI/UX</span>
                  <span>How to learn programming</span>
                  <span>Landing Page</span>
                </div>
              </div>
            </div>
            <div className="bgChuongTrinh">
              <div className="bgOverlay9"></div>
              <div className="mb-6">
                <div>
                  <img
                    alt=""
                    src="/img/chudeFE4.png"
                    className="imgChuongTrinh"
                  />
                </div>
                <div>
                  <h3>
                    Topic 9: Front End career orientation, UI - UX foundation
                  </h3>
                </div>
                <div>
                  <span>Career orientation</span>
                  <span>Vocational skills</span>
                  <span>UI/UX</span>
                  <span>How to learn programming</span>
                  <span>Landing Page</span>
                </div>
              </div>
            </div>
            <div className="bgChuongTrinh">
              <div className="bgOverlay10"></div>
              <div className="mb-6">
                <div>
                  <img
                    alt=""
                    src="/img/chudeFE7.png"
                    className="imgChuongTrinh"
                  />
                </div>
                <div>
                  <h3>
                    Topic 10: Front End career orientation, UI - UX foundation
                  </h3>
                </div>
                <div>
                  <span>Career orientation</span>
                  <span>Vocational skills</span>
                  <span>UI/UX</span>
                  <span>How to learn programming</span>
                  <span>Landing Page</span>
                </div>
              </div>
            </div>
            <div className="bgChuongTrinh">
              <div className="bgOverlay11"></div>
              <div className="mb-6">
                <div>
                  <img
                    alt=""
                    src="/img/chudeFE14.png"
                    className="imgChuongTrinh"
                  />
                </div>
                <div>
                  <h3>
                    Topic 11: Front End career orientation, UI - UX foundation
                  </h3>
                </div>
                <div>
                  <span>Career orientation</span>
                  <span>Vocational skills</span>
                  <span>UI/UX</span>
                  <span>How to learn programming</span>
                  <span>Landing Page</span>
                </div>
              </div>
            </div>
            <div className="bgChuongTrinh">
              <div className="bgOverlay12"></div>
              <div className="mb-6">
                <div>
                  <img
                    alt=""
                    src="/img/chudeFE15.png"
                    className="imgChuongTrinh"
                  />
                </div>
                <div>
                  <h3>
                    Topic 12: Front End career orientation, UI - UX foundation
                  </h3>
                </div>
                <div>
                  <span>Career orientation</span>
                  <span>Vocational skills</span>
                  <span>UI/UX</span>
                  <span>How to learn programming</span>
                  <span>Landing Page</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
