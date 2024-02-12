import React from "react";
import { UserOutlined, WalletOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { NavLink, Outlet } from "react-router-dom";
import Search from "antd/es/input/Search";
import "./styleAdminLayout.css";
import DrawerAddUser from "../../Drawer/DrawerAddUser/DrawerAddUser";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdminUser, setValid } from "../../Redux/adminUserSliceThunk";

const { Header, Content, Sider } = Layout;

const AdminLayout = () => {
  const { valid } = useSelector(state => state.adminUserSliceThunk);
  // console.log("🚀 ~ AdminLayout ~ valid:", valid);
  const dispatch = useDispatch();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const onSearch = (value) => {
    dispatch(fetchAdminUser(value));
    return console.log("value", value);
  };
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
          <div className="flex gap-3 mt-4 mx-auto" style={{ width: "97.5%" }}>
            <DrawerAddUser />
            <Search
              className="items-center flex"
              placeholder="search user"
              onSearch={onSearch}
              enterButton
            />
          </div>
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
