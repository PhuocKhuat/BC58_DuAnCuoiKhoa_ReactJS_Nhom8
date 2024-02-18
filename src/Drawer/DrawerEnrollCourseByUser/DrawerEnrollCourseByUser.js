import React, { useState } from "react";
import { LoginOutlined } from "@ant-design/icons";
import { Button, Drawer, Space } from "antd";
import "./styleDrawerEnrollCourseByUser.css";

const DrawerEnrollCourseByUser = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <LoginOutlined className="text-green-500" onClick={showDrawer} />
      <Drawer
        title="Create a new account"
        width={720}
        onClose={onClose}
        open={open}
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button onClick={onClose} type="primary">
              Register
            </Button>
          </Space>
        }
      >
        <div>
            <div className="mb-3">
                <h3 className="text-lg font-bold text-black">Course is awaiting confirmation</h3>
            </div>
            <div>

            </div>
            <div className="mb-3">
                <h3 className="text-lg font-bold text-black">The course has been registered</h3>
            </div>
            <div>

            </div>
        </div>
      </Drawer>
    </>
  );
};
export default DrawerEnrollCourseByUser;
