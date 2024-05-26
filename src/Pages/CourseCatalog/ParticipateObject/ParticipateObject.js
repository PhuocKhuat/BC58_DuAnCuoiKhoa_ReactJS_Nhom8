import React from "react";
import "./styleParticipate.css";

export default function ParticipateObject() {
  return (
    <div className="text-gray-600 body-font participateObject">
      <div className="container pt-16 pb-24">
        <div className="text-center font-bold text-white titleParticipate mb-5">
          <h3>PARTICIPATE OBJECT</h3>
        </div>
        <div className="flex items-center bgParticipate lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img
              alt="careerChange"
              src="/img/common-student-4.jpg"
              className="h-32 w-32 rounded-full"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              People who want to change careers
            </h2>
            <p className="leading-relaxed text-base">
              You are an Electronics, Mechatronics, Economics, Banking...
              employee who wants to change careers and this is the time you want
              to join again from the beginning.
            </p>
          </div>
        </div>
        <div className="flex items-center bgParticipate lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              IT students
            </h2>
            <p className="leading-relaxed text-base">
              You are a 1st, 2nd, 3rd year IT student who wants to consolidate
              and practice more knowledge to support your studies and career
              orientation after graduation.
            </p>
          </div>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img
              alt="ITStudent"
              src="/img/common-student-2.jpg"
              className="h-32 w-32 rounded-full"
            />
          </div>
        </div>
        <div className="flex items-center bgParticipate lg:w-3/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img
              alt="graduatedStudent"
              src="/img/common-student-7.jpg"
              className="h-32 w-32 rounded-full"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Students about to or have graduated
            </h2>
            <p className="leading-relaxed text-base">
              You are in your final year of study or have graduated and want to
              have skills that match employers' requirements as well as connect
              with businesses after graduation.
            </p>
          </div>
        </div>
        <div className="flex items-center bgParticipate lg:w-3/5 mx-auto sm:flex-row flex-col">
          <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center sm:ml-10 justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <img
              alt="graduatedStudent"
              src="/img/enterprise.jpg"
              className="h-32 w-32 rounded-full"
            />
          </div>
          <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              Businesses and project owners
            </h2>
            <p className="leading-relaxed text-base">
              Startups and project owners want to learn programming to recruit
              and build their own programming team to develop the company's
              systems and products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
