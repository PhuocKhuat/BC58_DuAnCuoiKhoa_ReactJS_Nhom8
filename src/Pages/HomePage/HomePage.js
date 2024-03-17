import React from "react";
import "./styleHome.css";
import Slider from "./Slider/Slider";
import Statistics from "./Statistics/Statistics";
import CoursesList from "./CoursesList/CoursesList";
import Overview from "./Overview/Overview";
import Feedback from "./Feedback/Feedback";
import NewPost from "../NewPost/NewPost";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "../../Components/Footer/Footer";

export default function HomePage() {
  return (
    <div className="homepage">
      <Parallax>
        <Slider />
        <ParallaxLayer speed={0.25} offset={0.9}>
          <Overview />
        </ParallaxLayer>
        <ParallaxLayer speed={0.35} offset={2}>
          <Statistics />
        </ParallaxLayer>
        <CoursesList />
        <ParallaxLayer speed={0.45} offset={4.15}>
          <Feedback />
        </ParallaxLayer>
        <NewPost />
        <Footer />
      </Parallax>
    </div>
  );
}
