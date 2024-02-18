import React, { useEffect } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setDeleteCourse, setInfoUser } from "../../Redux/personalSlice";
import { handleHuyGhiDanh } from "../../Redux/userRegistrationSlice";
import { https } from "../../Services/api";

export default function ModalDelete({ course }) {
  // console.log("🚀 ~ ModalDelete ~ course:", course.maKhoaHoc)
  useEffect(() => {
    fetchChiTietKhoaHoc();
  }, []);
  const fetchChiTietKhoaHoc = ()=>{
    https
      .post("/api/QuanLyNguoiDung/ThongTinTaiKhoan")
      .then((res) => {
        console.log(res.data);
        dispatch(setInfoUser(res.data));
        
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const dispatch = useDispatch();
  return (
    <div
      className="modal fade modalDelete"
      id="exampleModal"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              <ExclamationCircleOutlined />
            </h1>
          </div>
          <div className="modal-body">
            <h1 className="text-center text-3xl font-medium mb-4">
              Are you sure ?
            </h1>
            <p className="text-center text-xl">
              You won't be able to revert this!
            </p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary btnDeleteCourse"
              data-bs-dismiss="modal"
              onClick={() => {
                dispatch(handleHuyGhiDanh(course.maKhoaHoc));
                dispatch(setDeleteCourse(course.maKhoaHoc));
                fetchChiTietKhoaHoc();
              }}
            >
              Yes, delete it !
            </button>
            <button
              type="button"
              className="btn btn-secondary btnCancelCourses"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
