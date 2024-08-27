import React from "react";
import CountUp from "react-countup";
import "./styleStatistics.css";
import imgSta1 from "../../../img/statistics-1a.png";
import imgSta2 from "../../../img/statistics-2a.jpg";
import imgSta3 from "../../../img/statistics-3.jpg";
import imgSta4 from "../../../img/statistics-4.jpg";

export default function Statistics() {
  return (
    <div className="boxNumberColor statistic">
      <div className="container">
        <h1 className="titleStatistic font-bold text-center">
          E-LEARNING - TRAINING PROGRAMMING ACCORDING TO THE PROJECT ROADMAP
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-center pb-8">
          Statistics through numbers
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4">
          <div className="boxNumber">
            <div>
              <img className="imgStatistical" alt="" src={imgSta1} />
            </div>
            <div>
              <span className="textNumber">
                <CountUp start={0} end={900} duration={2} delay={0} />
              </span>
            </div>
            <div>
              <p className="font-medium">Students</p>
            </div>
          </div>
          <div className="boxNumber">
            <div>
              <img className="imgStatistical" alt="" src={imgSta2} />
            </div>
            <div>
              <span className="textNumber">
                <CountUp start={0} end={1000} duration={2} delay={0} />
              </span>
            </div>
            <div>
              <p className="font-medium">Courses</p>
            </div>
          </div>
          <div className="boxNumber">
            <div>
              <img className="imgStatistical" alt="" src={imgSta3} />
            </div>
            <div>
              <span className="textNumber">
                <CountUp start={0} end={33200} duration={2} delay={0} />
              </span>
            </div>
            <div>
              <p className="font-medium">Hour of study</p>
            </div>
          </div>
          <div className="boxNumber">
            <div>
              <img className="imgStatistical" alt="" src={imgSta4} />
            </div>
            <div>
              <span className="textNumber">
                <CountUp start={0} end={400} duration={2} delay={0} />
              </span>
            </div>
            <div>
              <p className="font-medium">Teachers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
