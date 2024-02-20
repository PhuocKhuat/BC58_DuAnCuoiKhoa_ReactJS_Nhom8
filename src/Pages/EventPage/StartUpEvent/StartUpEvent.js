import Lottie from "lottie-react";
import React from "react";
import StartUpAnimation from "./StartUpAnimation.json";
import { Button } from "antd";
import './styleStartUpEvent.css';

export default function StartUpEvent() {
  return (
    <div className="text-gray-600 body-font startUpEvent">
      <div className="container flex flex-wrap pt-8 pb-14 items-center">
        <div className="md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
          <Lottie animationData={StartUpAnimation} loop={true} />
        </div>
        <div className="flex flex-col md:w-1/2 md:pl-12 bgTechStartUp">
          <div>
            <h3 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-purple-900">
              TECHNOLOGY EVENT FOR STARTUPS
            </h3>
          </div>
          <div>
            <h5 className="mb-2 text-black font-medium">Where great ideas converge</h5>
          </div>
          <div>
            <p className="leading-relaxed text-base text-white">
              Innovatube Frontier Summit (IFS) is the first event in Vietnam
              focusing on all four typical fields of pioneering technology,
              including Artificial Intelligence (Artificial Intelligence),
              Internet of Things (Internet of Things). , Blockchain (Blockchain)
              and Augmented Reality/Virtual Reality (Augmented Reality/Virtual
              Reality)
            </p>
          </div>
          <div className="flex mt-3 space-x-4">
            <Button className="btnParticipate">Participate</Button>
            <Button className="btnLearnMore">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
