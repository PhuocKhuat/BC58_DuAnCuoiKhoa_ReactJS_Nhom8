import Lottie from "lottie-react";
import React from "react";
import bgAnimateLearing from "./bgAnimateLearning.json";
import "./styleSlider.css";

export default function Slider() {
  return (
    <div className="slider">
      <div className="container">
        <div className="grid grid-cols-12 sliderHome mt-10">
          <div className="col-span-6 sloganBox">
            <div className="triangleTopLeft"></div>
            <div className="smallBox smallBoxTopLeft"></div>
            <div className="smallBox smallBoxTopRight"></div>
            <div className="smallBox smallBoxRightBottom"></div>
            <div className="smallBox smallBoxRightBottom doubleBox"></div>
            <div className="sloganContainer">
              <div>
                <img
                  alt=""
                  className="sliderPlaneImg"
                  src="/img/paperLane.png"
                />
              </div>
              <div className="mt-28 titleOverview">
                <h1>Welcome</h1>
                <h1>to E-Learing</h1>
                <h1>Environment</h1>
              </div>
            </div>
          </div>
          <div className="imgLottie col-span-6">
            <Lottie animationData={bgAnimateLearing} loop={true} className="svgLottie" />
          </div>
        </div>
      </div>
    </div>
  );
}
