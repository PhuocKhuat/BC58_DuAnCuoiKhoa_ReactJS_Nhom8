import React from "react";
import CourseDetail from "./CourseDetail/CourseDetail";
import ParticipateObject from "./ParticipateObject/ParticipateObject";
import TargetParticipate from "./TargetParticipate/TargetParticipate";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "../../Components/Footer/Footer";

export default function CourseCatalog() {
  return (
    <div>
      <Parallax className="parallaxTargetParticipate">
        <ParallaxLayer speed={0.25} offset={0}>
          <CourseDetail />
        </ParallaxLayer>
        <ParallaxLayer speed={0.35} className="parallaxPObject">
          <ParticipateObject />
        </ParallaxLayer>
          <TargetParticipate/>
          <Footer/>
      </Parallax>
    </div>
  );
}
