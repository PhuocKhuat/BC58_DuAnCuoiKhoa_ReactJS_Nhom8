import React, { useState } from 'react';
import { Button, Modal } from 'antd';
const Modals = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='modals'>
      <Button type="primary" className="btnModals" onClick={showModal}>
        Personal Infomation
      </Button>
      <Modal title="Edit personal information" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form className='modalForm'>
          <div className='flex flex-col'>
            <label>Full Name:</label>
            <input type='text' placeholder='Edit your full name'/>
          </div>
          <div className='flex flex-col'>
            <label>Password:</label>
            <input type='password' placeholder='Edit your password'/>
          </div>
          <div className='flex flex-col'>
            <label>Email:</label>
            <input type='email' placeholder='Edit your email'/>
          </div>
          <div className='flex flex-col'>
            <label>Phone Number:</label>
            <input type='number' placeholder='Edit your phone number'/>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default Modals;