import React, { useState } from "react";
import { Button, Modal } from "antd";
import { FastField, Form, Formik } from "formik";
import { useSelector } from "react-redux";
import InputFlied from "../../CustomFlied/InputFlied";

const Modals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { infoUser } = useSelector(state => state.personalSlice);
  // console.log("🚀 ~ infoUser:", infoUser);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleUpdate = () => {};
  return (
    <div className="modals">
      <Button type="primary" className="btnModals" onClick={showModal}>
        <p>Personal Infomation</p>
      </Button>
      <Modal
        title="Edit personal information"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Formik initialValues={infoUser}>
          {(formikProps) => {
            const { values, errors, touched } = formikProps;
            console.log("🚀 ~ Modals ~ touched:", touched)
            console.log("🚀 ~ Modals ~ errors:", errors)
            console.log("🚀 ~ Modals ~ values:", values)
            return (
              <Form className="modalForm">
                <FastField name="hoTen" type="text" component={InputFlied} label="Full Name:" placeholder="Edit your full name" />

                <div className="flex flex-col">
                  <label>Password:</label>
                  <input type="password" placeholder="Edit your password" />
                </div>
                <div className="flex flex-col">
                  <label>Email:</label>
                  <input type="email" placeholder="Edit your email" />
                </div>
                <div className="flex flex-col">
                  <label>Phone Number:</label>
                  <input type="number" placeholder="Edit your phone number" />
                </div>
                <Button onClick={handleUpdate} className="btnUpdate">
                  Update
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </div>
  );
};
export default Modals;
