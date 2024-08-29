import React from "react";
import CourseDetail from "./CourseDetail/CourseDetail";
import ParticipateObject from "./ParticipateObject/ParticipateObject";
import TargetParticipate from "./TargetParticipate/TargetParticipate";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "../../Components/Footer/Footer";
import CourseOutputs from "../DetailPage/CoursesOutput/CoursesOutput";

export default function CourseCatalog() {
  return (
    <div className="h-[1000px]">
      <Parallax>
        <ParallaxLayer speed={0.25} offset={0}>
          <CourseDetail />
        </ParallaxLayer>
        <ParallaxLayer speed={0.35} className="parallaxPObject">
          <ParticipateObject />
        </ParallaxLayer>
        <TargetParticipate />
        <ParallaxLayer speed={0.35} offset={4}>
          <div className="courseOutputCourseCatalog">
            <CourseOutputs />
          </div>
        </ParallaxLayer>
        <div className="footerCourseCatalog">
          <Footer />
        </div>
      </Parallax>
    </div>
  );
}
