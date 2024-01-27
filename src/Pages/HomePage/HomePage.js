import React from "react";
import "./styleHome.css";
import Slider from "./Slider/Slider";
import Statistics from "./Statistics/Statistics";

export default function HomePage() {
  return (
    <div className="">
      <Slider/>
      <Statistics/>
    </div>
  );
}
