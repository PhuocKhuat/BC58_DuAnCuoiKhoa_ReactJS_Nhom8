import React from "react";
import "./styleHome.css";
import Slider from "./Slider/Slider";
import Statistics from "./Statistics/Statistics";
import CoursesList from "./CoursesList/CoursesList";

export default function HomePage() {
  return (
    <div className="">
      <Slider/>
      <Statistics/>
      <CoursesList/>
    </div>
  );
}
