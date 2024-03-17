import React from "react";
import CountDownEvent from "./CountDownEvent/CountDownEvent";
import StartUpEvent from "./StartUpEvent/StartUpEvent";
import CoCreator from "./CoCreator/CoCreator";
import Sponsors from "./Sponsors/Sponsors";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "../../Components/Footer/Footer";


export default function EventPage() {
  return (
    <>
      <Parallax>
        <CountDownEvent />
        <ParallaxLayer speed={0.25}>
          <StartUpEvent />
        </ParallaxLayer>
          <CoCreator />
          <Sponsors />
        <Footer />
      </Parallax>
    </>
  );
}
