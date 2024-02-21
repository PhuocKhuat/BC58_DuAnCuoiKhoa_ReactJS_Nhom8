import React from "react";
import CountDownEvent from "./CountDownEvent/CountDownEvent";
import StartUpEvent from "./StartUpEvent/StartUpEvent";
import CoCreator from "./CoCreator/CoCreator";
import Sponsors from "./Sponsors/Sponsors";

export default function EventPage() {
  return (
    <>
      <CountDownEvent/>
      <StartUpEvent/>
      <CoCreator/>
      <Sponsors/>
    </>
  );
}
