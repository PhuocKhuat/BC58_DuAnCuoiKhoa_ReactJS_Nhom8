import React from "react";
import {ExclamationCircleOutlined} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setDeleteCourse } from "../../Redux/personalSlice";

export default function ModalDelete({course}) {
    console.log("🚀 ~ ModalDelete ~ course:", course.maKhoaHoc)
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
            <h1 className="text-center text-3xl font-medium mb-4">Are you sure ?</h1>
            <p className="text-center text-xl">You won't be able to revert this!</p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary btnDeleteCourse" data-bs-dismiss="modal" onClick={()=>{
               dispatch(setDeleteCourse(course.maKhoaHoc))
            }}>
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
