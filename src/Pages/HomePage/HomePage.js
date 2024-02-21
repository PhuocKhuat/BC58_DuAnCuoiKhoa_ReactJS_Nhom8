import React from "react";
import "./styleHome.css";
import Slider from "./Slider/Slider";
import Statistics from "./Statistics/Statistics";
import CoursesList from "./CoursesList/CoursesList";
import Overview from "./Overview/Overview";
import Feedback from "./Feedback/Feedback";
import NewPost from "../NewPost/NewPost";

export default function HomePage() {
  return (
    <div>
      <Slider/>
      <Overview/>
      <Statistics/>
      <CoursesList/>
      <Feedback/>
      <NewPost/>
    </div>
  );
}
