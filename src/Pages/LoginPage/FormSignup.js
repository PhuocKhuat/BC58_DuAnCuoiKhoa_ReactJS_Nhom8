import React from "react";
import {
  LockOutlined,
  UserOutlined,
  PhoneOutlined,
  MailOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Select, message } from "antd";
import { Option } from "antd/es/mentions";
import "./style.css";
import { https } from "../../Services/api";
import { NavLink, useNavigate } from "react-router-dom";

const FormSignUp = () => {
  let navigate = useNavigate();
  const onFinish = (values) => {
    https
      .post("/api/QuanLyNguoiDung/DangKy", values)
      .then((res) => {
        // console.log(res);
        message.success("Sign up success");
        navigate("/account");
      })
      .catch((err) => {
        // console.log(err);
        message.error("Registration failed");
      });
    console.log("Success: ", values);
  };
  const onFinishFailed = (values) => {
    console.log("Error: ", values);
  };
  return (
    <div className="formSignUp">
      <div>
        <h2 className="title mt-24">Create your E-learing account</h2>
      </div>
      <div className="formDky">
        <Form
          name="normal_login"
          className="login-form"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Account"
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your account!",
              },
            ]}
          >
            <Input
              prefix={
                <UserOutlined className="site-form-item-icon truongDuLieu" />
              }
              placeholder="Account"
            />
          </Form.Item>
          <Form.Item
            label="Full Name"
            name="hoTen"
            className="fullName"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input
              prefix={
                <FileTextOutlined className="site-form-item-icon truongDuLieu" />
              }
              placeholder="Full name"
            />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="soDT"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              prefix={
                <PhoneOutlined className="site-form-item-icon truongDuLieu" />
              }
              placeholder="Phone Number"
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              prefix={
                <MailOutlined className="site-form-item-icon truongDuLieu" />
              }
              type="email"
              placeholder="Email"
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            dependencies={["password"]}
          >
            <Input
              prefix={
                <LockOutlined className="site-form-item-icon truongDuLieu" />
              }
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            label="Group Code"
            name="maNhom"
            rules={[
              {
                required: true,
                message: "Please input your group code!",
              },
            ]}
          >
            <Select placeholder="Group Code">
              <Option value="GP01">GP01</Option>
              <Option value="GP02">GP02</Option>
              <Option value="GP03">GP03</Option>
              <Option value="GP04">GP04</Option>
              <Option value="GP05">GP05</Option>
              <Option value="GP06">GP06</Option>
              <Option value="GP07">GP07</Option>
              <Option value="GP08">GP08</Option>
              <Option value="GP09">GP09</Option>
              <Option value="GP10">GP10</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item className="flex justify-center">
            <Button htmlType="submit" className="login-form-button">
              <span className="textSignUp">Sign Up</span>
            </Button>
          </Form.Item>
          <br />
          Or Already member? <NavLink to="/account">Login</NavLink> here!
        </Form>
      </div>
    </div>
  );
};
export default FormSignUp;
