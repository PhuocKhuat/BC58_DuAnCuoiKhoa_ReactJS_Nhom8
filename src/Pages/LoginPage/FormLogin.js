import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, message } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { https } from "../../Services/api";
import { useDispatch, useSelector } from "react-redux";
import { setLoginFB, setUser } from "../../Redux/headerSlice";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";

const FormLogin = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const { profile } = useSelector((state) => state.headerSlice);
  const onFinish = (values) => {
    console.log("Success: ", values);
    https
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((res) => {
        // console.log(res);
        navigate("/");
        message.success("Logged in successfully");
        dispatch(setUser(res.data));
        localStorage.setItem("USER_INFO", JSON.stringify(res.data));
      })
      .catch((err) => {
        // console.log(err);
        message.error("Login failed");
      });
  };
  const onFinishFailed = (values) => {
    console.log("Error: ", values);
  };
  return (
    <div className="formLogin">
      <div>
        <h2 className="title mt-24">Welcome to E_Learning</h2>
      </div>
      <div className="formDNhap">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            name="taiKhoan"
            className="formUser"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="matKhau"
            className="formUser"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>
          <Form.Item className="flex justify-start">
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button textLogin"
            >
              <span className="relative bottom-2">Log in</span>
            </Button>
          </Form.Item>
          {!profile ? (
            <LoginSocialFacebook
              appId="1488191668439263"
              onResolve={(response) => {
                // console.log("🚀 ~ FormLogin ~ response:", response);
                dispatch(setLoginFB(response.data));
                localStorage.setItem("LOGIN_FACEBOOK", JSON.stringify(response.data));
                navigate("/");
              }}
              onReject={(error) => {
                console.log("🚀 ~ FormLogin ~ error:", error);
              }}
            >
              <FacebookLoginButton />
            </LoginSocialFacebook>
          ) : (
            ""
          )}
          Or <NavLink to="/signup">register now!</NavLink>
        </Form>
      </div>
    </div>
  );
};
export default FormLogin;
