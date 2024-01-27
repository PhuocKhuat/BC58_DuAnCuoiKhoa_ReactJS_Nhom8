import React from "react";
import CountUp from "react-countup";
import './styleStatistics.css';

export default function Statistics() {
  return (
     <div className="boxNumberColor">
     <div className="grid grid-cols-4 container">
       <div className="boxNumber">
         <div>
           <img className="imgStatistical" alt="" src="/img/students.png" />
         </div>
         <div>
           <span className="textNumber">
           <CountUp start={0} end={900} duration={2} delay={0}/>
           </span>
         </div>
         <div>
           <p className="font-medium">Students</p>
         </div>
       </div>
       <div className="boxNumber">
         <div>
           <img className="imgStatistical" alt="" src="/img/timetable.png" />
         </div>
         <div>
           <span className="textNumber">
           <CountUp start={0} end={1000} duration={2} delay={0}/>
           </span>
         </div>
         <div>
           <p className="font-medium">Courses</p>
         </div>
       </div>
       <div className="boxNumber">
         <div>
           <img className="imgStatistical" alt="" src="/img/hourglass.png" />
         </div>
         <div>
           <span className="textNumber">
               <CountUp start={0} end={33200} duration={2} delay={0}/>
           </span>
         </div>
         <div>
           <p className="font-medium">Hour of study</p>
         </div>
       </div>
       <div className="boxNumber">
         <div>
           <img className="imgStatistical" alt="" src="/img/teacher.png" />
         </div>
         <div>
           <span className="textNumber">
           <CountUp start={0} end={400} duration={2} delay={0}/>
           </span>
         </div>
         <div>
           <p className="font-medium">Teachers</p>
         </div>
       </div>
     </div>
   </div>
  );
}
