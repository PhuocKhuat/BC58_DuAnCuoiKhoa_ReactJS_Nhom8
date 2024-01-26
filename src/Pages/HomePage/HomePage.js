import React from "react";
import "./styleHome.css";
import Lottie from "lottie-react";
import bgAnimateLearing from "./bgAnimateLearning.json"

export default function HomePage() {
  return (
    <div className="container home">
      <div className="flex sliderHome">
        <div className="sloganBox">
          <div className="triangleTopLeft"></div>
          <div className="smallBox smallBoxTopLeft"></div>
          <div className="smallBox smallBoxTopRight"></div>
          <div className="smallBox smallBoxRightBottom"></div>
          <div className="smallBox smallBoxRightBottom doubleBox"></div>
          <div className="sloganContainer">
            <div>
              <img alt="" className="sliderPlaneImg" src="/img/paperLane.png" />
            </div>
            <div className="mt-28">
              <h1>Welcome</h1>
              <h1>to E-Learing</h1>
              <h1>Environment</h1>
            </div>
          </div>
        </div>
        <div>
        <Lottie animationData={bgAnimateLearing} loop={true} />;
        </div>
      </div>
    </div>
  );
}
