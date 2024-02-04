import React, { useEffect } from "react";
import Modals from "./Modals";
import "./stylePersonalInfo.css";
import { https } from "../../Services/api";
import { useDispatch, useSelector } from "react-redux";
import { setInfoUser } from "../../Redux/personalSlice";

export default function PersonalInfo() {
  const { infoUser } = useSelector((state) => state.personalSlice);
  console.log("🚀 ~ PersonalInfo ~ infoUser:", infoUser);
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
    <section className="text-gray-600 body-font">
      <div className="mb-5 sflex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="flex flex-col sm:flex-row mt-10">
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
              <div className="leading-relaxed text-lg mb-4 flex justify-between">
                <div>
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
                      <strong>Phone number: </strong>{" "}
                      <span>{infoUser.soDT}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <p>
                      <strong>Account: </strong>{" "}
                      <span>{infoUser.taiKhoan}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Group code: </strong>{" "}
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
              <a className="text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
