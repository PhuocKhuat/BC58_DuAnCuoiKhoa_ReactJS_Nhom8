import React, { useEffect } from "react";
import Modals from "./FormFormik/Modals";
import "./stylePersonalInfo.css";
import { https } from "../../Services/api";
import { useDispatch, useSelector } from "react-redux";
import { setInfoUser } from "../../Redux/personalSlice";
import { Progress } from "antd";
import {
  FieldTimeOutlined,
  BookOutlined,
  SwitcherOutlined,
  LayoutOutlined,
  BarChartOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
// import IndividualInfo from "../../ObjectClass/individualInfo";

// export const saveInforUser = () => {
//   const storeInfoUser = localStorage.getItem("UPDATE_USER");
//   if (storeInfoUser !== null) {
//     let info = JSON.parse(storeInfoUser);
//     return new IndividualInfo(info.hoTen, info.matKhau, info.email, info.soDT, info.taiKhoan, info.maNhom, info.maLoaiNguoiDung);
//   }
// };

export default function PersonalInfo() {
  const { infoUser } = useSelector((state) => state.personalSlice);
  // console.log("🚀 ~ PersonalInfo ~ infoUser:", infoUser);
  const dispatch = useDispatch();
  useEffect(() => {
    https
      .post("/api/QuanLyNguoiDung/ThongTinTaiKhoan")
      .then((res) => {
        console.log(res.data);
        dispatch(setInfoUser(res.data));
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="text-gray-600 body-font personalInfo">
      <div className="mb-5 sflex flex-col">
        <div className="">
          <div className="flex flex-col sm:flex-row mt-10 borderFrame">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-40 h-40 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <img
                  alt="img user"
                  src="/img/student2.jpg"
                  className="rounded-full"
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  David Cameroon
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                <p className="text-base mb-2">Front End programmer</p>
                <Modals />
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 sm:text-left">
              <div className="leading-relaxed text-lg mb-4 flex">
                <div className="space-y-3">
                  <div>
                    <p>
                      <strong>Full Name: </strong> <span>{infoUser.hoTen}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Email: </strong> <span>{infoUser.email}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Phone number: </strong>
                      <span>{infoUser?.soDT}</span>
                    </p>
                  </div>
                </div>
                <div className="space-y-3 ms-44">
                  <div>
                    <p>
                      <strong>Account: </strong>
                      <span>{infoUser.taiKhoan}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Group code: </strong>
                      <span>{infoUser.maNhom}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Object: </strong> <span>student</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h4 className="font-bold text-2xl text-black">MY SKILLS</h4>
                </div>
                <div>
                  <div className="grid grid-cols-12 space-x-5">
                    <div className="col-span-6">
                      <div className="flex items-center p-3 ps-0">
                        <p className="skillBtn skillBtnHtml">
                          <span>html</span>
                        </p>
                        <Progress
                          percent={100}
                          status="active"
                          strokeColor="#1677ff"
                          className="progressInfoHtml"
                          showInfo={false}
                          size={[300, 20]}
                        />
                      </div>
                      <div className="flex items-center p-3 ps-0">
                        <p className="skillBtn skillBtnCss">
                          <span>css</span>
                        </p>
                        <Progress
                          percent={85}
                          status="active"
                          strokeColor="#ff4560"
                          className="progressInfoCss"
                          showInfo={false}
                          size={[300, 20]}
                        />
                      </div>
                      <div className="flex items-center p-3 ps-0">
                        <p className="skillBtn skillBtnGit">
                          <span>Git</span>
                        </p>
                        <Progress
                          percent={90}
                          status="active"
                          strokeColor="#feb019"
                          className="progressInfoGit"
                          showInfo={false}
                          size={[300, 20]}
                        />
                      </div>
                      <div className="flex items-center p-3 ps-0">
                        <p className="skillBtn skillBtnJs">
                          <span>JS</span>
                        </p>
                        <Progress
                          percent={80}
                          status="active"
                          strokeColor="#00e396"
                          className="progressInfoJs"
                          showInfo={false}
                          size={[300, 20]}
                        />
                      </div>
                      <div className="flex items-center p-3 ps-0">
                        <p className="skillBtn skillBtnApi">
                          <span>API</span>
                        </p>
                        <Progress
                          percent={92}
                          status="active"
                          strokeColor="#775dd0"
                          className="progressInfoApi"
                          showInfo={false}
                          size={[300, 20]}
                        />
                      </div>
                    </div>
                    <div className="col-span-6">
                      <div className="flex items-center p-3 ps-0">
                        <p className="skillBtn skillBtnEs6">ES6</p>
                        <Progress
                          percent={75}
                          status="active"
                          strokeColor="#1677ff"
                          className="progressInfoEs6"
                          showInfo={false}
                          size={[300, 20]}
                        />
                      </div>
                      <div className="flex items-center p-3 ps-0">
                        <p className="skillBtn skillBtnReact">
                          <span>React</span>
                        </p>
                        <Progress
                          percent={98}
                          status="active"
                          strokeColor="#ff4560"
                          className="progressInfoReact"
                          showInfo={false}
                          size={[300, 20]}
                        />
                      </div>
                      <div className="flex items-center p-3 ps-0">
                        <p className="skillBtn skillBtnExpress">
                          <span>Express</span>
                        </p>
                        <Progress
                          percent={82}
                          status="active"
                          strokeColor="#feb019"
                          className="progressInfoExpress"
                          showInfo={false}
                          size={[300, 20]}
                        />
                      </div>
                      <div className="flex items-center p-3 ps-0">
                        <p className="skillBtn skillBtnNode">
                          <span>Node</span>
                        </p>
                        <Progress
                          percent={79}
                          status="active"
                          strokeColor="#00e396"
                          className="progressInfoNode"
                          showInfo={false}
                          size={[300, 20]}
                        />
                      </div>
                      <div className="flex items-center p-3 ps-0">
                        <p className="skillBtn skillBtnNest">
                          <span>Nest</span>
                        </p>
                        <Progress
                          percent={72}
                          strokeColor="#775dd0"
                          status="active"
                          className="progressInfoNest"
                          showInfo={false}
                          size={[300, 20]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h4 className="text-2xl font-bold mb-2 mt-1 text-black">
                    MY SCORES
                  </h4>
                </div>
                <div className="timeStudy grid grid-cols-3 space-x-3 space-y-3">
                  <div className="timeStudyItem space-x-2 ms-2 mt-2">
                    <FieldTimeOutlined />
                    <div>
                      <h6>Study of hours</h6>
                      <p>80</p>
                    </div>
                  </div>
                  <div className="timeStudyItem space-x-2">
                    <BookOutlined />
                    <div>
                      <h6>Lesson</h6>
                      <p>48</p>
                    </div>
                  </div>
                  <div className="timeStudyItem space-x-2">
                    <SwitcherOutlined />
                    <div>
                      <h6>Learning ability</h6>
                      <p>Good</p>
                    </div>
                  </div>
                  <div className="timeStudyItem space-x-2">
                    <LayoutOutlined />
                    <div>
                      <h6>Total score</h6>
                      <p>80</p>
                    </div>
                  </div>
                  <div className="timeStudyItem space-x-2">
                    <BarChartOutlined />
                    <div>
                      <h6>Study of hours</h6>
                      <p>80</p>
                    </div>
                  </div>
                  <div className="timeStudyItem space-x-2">
                    <FileProtectOutlined />
                    <div>
                      <h6>Exercise</h6>
                      <p>80</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
