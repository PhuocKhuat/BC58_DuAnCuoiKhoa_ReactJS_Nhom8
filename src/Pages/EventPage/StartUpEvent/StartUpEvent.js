import Lottie from "lottie-react";
import React from "react";
import StartUpAnimation from "./StartUpAnimation.json";

export default function StartUpEvent() {
  return (
    <div className="startUpEvent">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <Lottie animationData={StartUpAnimation} loop={true} />
          </div>
          <div className="col-span-6">
            <div>
              <h3>TECHNOLOGY EVENT FOR STARTUPS</h3>
            </div>
            <div>
              <h5>Where great ideas converge</h5>
            </div>
            <div>
              <p>
                Innovatube Frontier Summit (IFS) is the first event in Vietnam
                focusing on all four typical fields of pioneering technology,
                including Artificial Intelligence (Artificial Intelligence),
                Internet of Things (Internet of Things). , Blockchain
                (Blockchain) and Augmented Reality/Virtual Reality (Augmented
                Reality/Virtual Reality)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
