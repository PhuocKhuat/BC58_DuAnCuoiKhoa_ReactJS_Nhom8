import React from "react";
import Course from "./Course/Course";
import Schedule from "./Schedule/Schedule";
import CourseOfPage from "./Course/CourseOfPage";
import "./Course/styleCourse.css";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "../../Components/Footer/Footer";

export default function CourseAll() {
  return (
    <>
      <Parallax>
        <ParallaxLayer speed={0.25}>
          <Course />
        </ParallaxLayer>
        <CourseOfPage />
          <Schedule />
        <Footer/>
      </Parallax>
    </>
  );
}
