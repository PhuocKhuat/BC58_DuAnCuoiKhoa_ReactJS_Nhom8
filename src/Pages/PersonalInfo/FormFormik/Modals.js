import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Field, Form, Formik, useFormik } from "formik";
import { https } from "../../../Services/api";
import { useDispatch } from "react-redux";
import { setUpdateForm } from "../../../Redux/personalSlice";
import { updateValidate } from "../../../Validation/updateValidate";

const Modals = ({ infoUser }) => {
  console.log("🚀 ~ Modals ~ infoUser:", infoUser);
  const saveForm = () => {
    const storeValues = localStorage.getItem("FORM_USER");
    if (!storeValues) {
      return {
        hoTen: "",
        matKhau: "",
        email: "",
        soDT: "",
        taiKhoan: "",
        maNhom: "",
        maLoaiNguoiDung: "",
      };
    }
    return JSON.parse(storeValues);
  };
  const initialValues = saveForm();
  const { handleChange, values, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: updateValidate,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  React.useEffect(() => {
    localStorage.setItem("FORM_USER", JSON.stringify(values));
  }, [values]);
  React.useEffect(() => {
    localStorage.setItem("FORM_USER_UPDATE_ERROR", JSON.stringify(errors));
  }, [errors]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleUpdate = (infoUsers) => {
    console.log("🚀 ~ handleUpdate ~ infoUsers:", infoUsers);
    https
      .put("/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", infoUsers)
      .then((res) => {
        console.log(res);
        dispatch(setUpdateForm(res.data));
        setIsModalOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div className="modals">
      <Button
        type="primary"
        className="btnModals"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          values.hoTen = infoUser.hoTen;
          values.matKhau = infoUser.matKhau;
          values.email = infoUser.email;
          values.soDT = infoUser.soDT;
          values.taiKhoan = infoUser.taiKhoan;
          values.maNhom = infoUser.maNhom;
          values.maLoaiNguoiDung = infoUser.maLoaiNguoiDung;
          showModal();
        }}
      >
        <p>Personal Infomation</p>
      </Button>
      <div
        title="Edit personal information"
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content contentModalUser">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit personal information
              </h1>
              <button
                type="button"
                className="btn-close btnClose p-3"
                data-bs-dismiss="modal"
                aria-label="Close"
              >X</button>
            </div>
            <div className="modal-body">
              <Formik
                initialValues={initialValues}
                validationSchema={updateValidate}
              >
                <Form className="modalForm" onSubmit={handleSubmit}>
                  <div className="flex flex-col text-left">
                    <label>Full Name:</label>
                    <Field
                      name="hoTen"
                      type="text"
                      placeholder="Edit your full name"
                      value={values.hoTen}
                      onChange={handleChange}
                    />
                    {errors.hoTen && <p>{errors.hoTen}</p>}
                  </div>
                  <div className="flex flex-col text-left">
                    <label>Password:</label>
                    <Field
                      name="matKhau"
                      type="password"
                      placeholder="Edit your password"
                      value={values.matKhau}
                      onChange={handleChange}
                    />
                    {errors.matKhau && <p>{errors.matKhau}</p>}
                  </div>
                  <div className="flex flex-col text-left">
                    <label>Email:</label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Edit your email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </div>
                  <div className="flex flex-col text-left">
                    <label>Phone Number:</label>
                    <Field
                      name="soDT"
                      type="text"
                      placeholder="Edit your phone number"
                      value={values.soDT}
                      onChange={handleChange}
                    />
                    {errors.soDT && <p>{errors.soDT}</p>}
                  </div>
                </Form>
              </Formik>
            </div>
            <div className="modal-footer flex justify-start">
              {errors.hoTen || errors.matKhau || errors.email || errors.soDT ? (
                <button
                  className="btnUpdate cursor-not-allowed font-bold"
                  disabled
                >
                  Update
                </button>
              ) : (
                <button
                  type="submit"
                  onClick={() => {
                    handleUpdate(values);
                  }}
                  className="btnUpdate"
                  data-bs-dismiss="modal" 
                >
                  Update
                </button>
              )}
              <button
                type="button"
                className="btnClose"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modals;
