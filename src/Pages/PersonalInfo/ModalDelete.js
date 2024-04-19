import React from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import {
  fetchThongTinTaiKhoan,
  setDeleteCourse,
} from "../../Redux/personalSlice";
import { https } from "../../Services/api";
import Swal from "sweetalert2";
import { Modal } from "antd";

export default function ModalDelete({ course, isModalOpen, handleCancel }) {
  // console.log("🚀 ~ ModalDelete ~ course:", course.maKhoaHoc)

  const handleHuyGhiDanh = async (maKhoaHoc) => {
    const checkLogin = localStorage.getItem("USER_INFO");
    if (checkLogin) {
      const objectLogin = JSON.parse(checkLogin);
      const cancelCourse = {
        maKhoaHoc: maKhoaHoc,
        taiKhoan: objectLogin.taiKhoan,
      };
      try {
        await https.post("/api/QuanLyKhoaHoc/HuyGhiDanh", cancelCourse);
        dispatch(fetchThongTinTaiKhoan());
        Swal.fire({
          title: "Deleted successfully.",
          text: "If you want, please register new course ",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      } catch (error) {
        console.log("🚀 ~ handleHuyGhiDanh ~ error:", error)
      }
    }
  };

  const dispatch = useDispatch();
  return (
    <Modal
      className="modalDelete"
      open={isModalOpen}
      onCancel={handleCancel}
      footer
    >
      <div>
        <div>
          <div>
            <h1 className="fs-5 ms-48 mb-4">
              <ExclamationCircleOutlined className="logoInfo"/>
            </h1>
          </div>
          <div>
            <h1 className="text-center text-3xl font-medium mb-4">
              Are you sure ?
            </h1>
            <p className="text-center text-xl">
              You won't be able to revert this!
            </p>
          </div>
          <div className="mt-4 ms-28">
            <button
              type="button"
              className="btn btn-primary btnDeleteCourse"
              onClick={() => {
                handleHuyGhiDanh(course.maKhoaHoc);
                dispatch(setDeleteCourse(course.maKhoaHoc));
                handleCancel();
              }}
            >
              Yes, delete it !
            </button>
            <button
              type="button"
              className="btn btn-secondary btnCancelCourses ms-2"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}
