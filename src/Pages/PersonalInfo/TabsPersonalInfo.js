import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import React from "react";
import PersonalInfo from "./PersonalInfo";
import MyCourses from "./MyCourses";
import { Parallax } from "@react-spring/parallax";
import Footer from "../../Components/Footer/Footer";

export default function TabsPersonalInfo() {
  return (
    <Parallax>
    <Tabs defaultActiveKey="1" className="container tabsPersonalInfo">
      <TabPane tab={<span>Personal infomation</span>} key="1">
        <PersonalInfo />
      </TabPane>
      <TabPane tab={<span>My courses</span>} key="2" className="tabMyCourse">
        <MyCourses />
      </TabPane>
    </Tabs>
    <Footer/>
    </Parallax>
  );
}
