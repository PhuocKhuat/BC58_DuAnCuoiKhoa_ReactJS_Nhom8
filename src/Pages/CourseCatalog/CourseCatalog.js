import React from "react";
import CourseDetail from "./CourseDetail/CourseDetail";
import ParticipateObject from "./ParticipateObject/ParticipateObject";
import TargetParticipate from "./TargetParticipate/TargetParticipate";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "../../Components/Footer/Footer";

export default function CourseCatalog() {
  return (
    <div>
      <Parallax>
        <ParallaxLayer speed={0.25} offset={0}>
          <CourseDetail />
        </ParallaxLayer>
        <ParallaxLayer speed={0.35}>
          <ParticipateObject />
        </ParallaxLayer>
          <TargetParticipate/>
          <Footer/>
      </Parallax>
    </div>
  );
}
