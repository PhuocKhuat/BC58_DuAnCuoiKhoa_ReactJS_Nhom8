import React from "react";
import "./styleTargetParticipate.css";
import { ApiOutlined, BookOutlined, SettingOutlined, CodeOutlined, QuestionCircleOutlined, CodepenOutlined } from "@ant-design/icons";
import Lottie from "lottie-react";
import Target from './Target.json';

export default function TargetParticipate() {
  return (
    <div className="text-gray-600 body-font targetParticipate">
      <div className="container px-5 py-20 mx-auto">
        <div className="text-center">
          <h1 className="sm:text-3xl titleTarget font-bold text-center title-font text-white mb-4">
            TARGET
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          <Lottie animationData={Target} loop={true} />
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center frameContainerLogo">
              <ApiOutlined className="text-indigo-500 w-12 h-12 ps-2 rounded-full border bg-slate-200 text-3xl flex-shrink-0 mr-4 hoverLogo" />
              <span className="title-font font-medium">
                Enough skills to apply immediately to companies recruiting Dev
                with salary from 8-16 million/month
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center frameContainerLogo">
              <BookOutlined className="text-indigo-500 w-12 h-12 ps-2 rounded-full border bg-slate-200 text-3xl flex-shrink-0 mr-4 hoverLogo" />
              <span className="title-font font-medium">
                Master the methods so that your skills are always strong and
                your knowledge is always updated
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center frameContainerLogo">
              <SettingOutlined className="text-indigo-500 w-12 h-12 ps-2 rounded-full border bg-slate-200 text-3xl flex-shrink-0 mr-4 hoverLogo" />
              <span className="title-font font-medium">
                Practice and deeply understand programming tools/ Teamwork and
                soft skills
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center frameContainerLogo">
              <CodeOutlined className="text-indigo-500 w-12 h-12 ps-2 rounded-full border bg-slate-200 text-3xl flex-shrink-0 mr-4 hoverLogo" />
              <span className="title-font font-medium">
                Understand the qualities of a professional Full-Stack Developer
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center frameContainerLogo">
              <QuestionCircleOutlined className="text-indigo-500 w-12 h-12 ps-2 rounded-full border bg-slate-200 text-3xl flex-shrink-0 mr-4 hoverLogo" />
              <span className="title-font font-medium">
              Master and practice coding techniques, analytical and problem-solving skills
              </span>
            </div>
          </div>
          <div className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center frameContainerLogo">
              <CodepenOutlined className="text-indigo-500 w-12 h-12 ps-2 rounded-full border bg-slate-200 text-3xl flex-shrink-0 mr-4 hoverLogo" />
              <span className="title-font font-medium">
                Understand and master the necessary skills related to the Fullstack Programming profession
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4">
        <button className="flex mt-16 text-white bg-indigo-500 border-0 py-4 px-5 focus:outline-none hover:bg-indigo-600 rounded text-base btnRegister">
          Register now
        </button>
        <button className="flex mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-base pt-4 btnInbox">
          Inbox for 1-1 consultation
        </button>
        </div>
      </div>
    </div>
  );
}
