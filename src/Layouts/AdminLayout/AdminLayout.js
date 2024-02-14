import React from "react";
import { UserOutlined, WalletOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import "./styleAdminLayout.css";

const { Header, Content, Sider } = Layout;

const AdminLayout = () => {
  // const { valid } = useSelector(state => state.adminUserSliceThunk);
  // console.log("🚀 ~ AdminLayout ~ valid:", valid);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  // info?.source
  return (
    <Layout className="adminLayout">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          style={{ marginTop: "85px" }}
        >
          <Menu.Item key="1" icon={<UserOutlined />}>
            <NavLink to="users" >User Management</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<WalletOutlined />}>
            <NavLink to="courses" >Course Management</NavLink>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            height: "100px",
          }}
        >
          
        </Header>
        <Content
          style={{
            margin: "24px 16px 0",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
