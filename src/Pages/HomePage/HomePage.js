import React from "react";
import "./styleHome.css";
import Slider from "./Slider/Slider";
import Statistics from "./Statistics/Statistics";
import CoursesList from "./CoursesList/CoursesList";
import Overview from "./Overview/Overview";

export default function HomePage() {
  return (
    <div className="">
      <Slider/>
      <Overview/>
      <Statistics/>
      <CoursesList/>
    </div>
  );
}
