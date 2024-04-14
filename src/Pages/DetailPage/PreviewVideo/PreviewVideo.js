import React, { useState } from "react";
import "./stylePreviewVideo.css";
import {
  PlayCircleOutlined,
  CodeOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import VideoJS from "./VideoJS";

export default function PreviewVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="previewVideo">
      <div className="container">
        <h3 className="courseContent text-3xl uppercase font-bold mb-5">
          Course content
        </h3>
        <div className="courseDetailItem">
          <div className="courseDetailContent bg-white">
            <div className="sectionCourse flex items-center p-3 space-x-5">
              <span className="uppercase text-lg">Section 1: Introduction</span>
            </div>
            <p className="text-green-900 text-xl px-3 pt-3 pb-0">
              <CodeOutlined /> Preview Video
            </p>
            <div className="lessonContainer p-3">
              <div
                className="lessonContent mt-1 flex items-center justify-between text-green-700"
                onClick={showModal}
              >
                <span className="space-x-2">
                  {" "}
                  <PlayCircleOutlined />
                  <span>Concept of React components</span>
                </span>
                <span className="space-x-2">
                  <ClockCircleOutlined /> <span>14:35</span>
                </span>
              </div>
              <div
                className="lessonContent mt-1 flex items-center justify-between text-green-700"
                onClick={showModal}
              >
                <span className="space-x-2">
                  {" "}
                  <PlayCircleOutlined />
                  <span>Set up the environment for Windows</span>
                </span>
                <span className="space-x-2">
                  <ClockCircleOutlined /> <span>14:35</span>
                </span>
              </div>
              <div
                className="lessonContent mt-1 flex items-center justify-between text-green-700"
                onClick={showModal}
              >
                <span className="space-x-2">
                  {" "}
                  <PlayCircleOutlined />
                  <span>Create React applications - React-Scripts</span>
                </span>
                <span className="space-x-2">
                  <ClockCircleOutlined /> <span>14:35</span>
                </span>
              </div>
              <div
                className="lessonContent mt-1 flex items-center justify-between text-green-700"
                onClick={showModal}
              >
                <span className="space-x-2">
                  {" "}
                  <PlayCircleOutlined />
                  <span>
                    A quick note about quotes for string interpolation
                  </span>
                </span>
                <span className="space-x-2">
                  <ClockCircleOutlined /> <span>14:35</span>
                </span>
              </div>
              <VideoJS isModalOpen={isModalOpen} handleCancel={handleCancel} />
            </div>
          </div>
        </div>
        <div className="courseDetailItem mt-5">
          <div className="courseDetailContent bg-white">
            <div className="sectionCourse flex items-center p-3 space-x-5">
              <span className="uppercase text-lg">
                Section 2: Basic knowledge
              </span>
            </div>
            <p className="text-green-900 text-xl px-3 pt-3 pb-0">
              <CodeOutlined /> Preview Video
            </p>
            <div className="lessonContainer p-3">
              <div
                className="lessonContent mt-1 flex items-center justify-between text-green-700"
                onClick={showModal}
              >
                <span className="space-x-2">
                  {" "}
                  <PlayCircleOutlined />
                  <span>Home page and directory component</span>
                </span>
                <span className="space-x-2">
                  <ClockCircleOutlined /> <span>14:35</span>
                </span>
              </div>
              <div
                className="lessonContent mt-1 flex items-center justify-between text-green-700"
                onClick={showModal}
              >
                <span className="space-x-2">
                  {" "}
                  <PlayCircleOutlined />
                  <span>Course Guide + Github Link</span>
                </span>
                <span className="space-x-2">
                  <ClockCircleOutlined /> <span>14:35</span>
                </span>
              </div>
              <div
                className="lessonContent mt-1 flex items-center justify-between text-green-700"
                onClick={showModal}
              >
                <span className="space-x-2">
                  {" "}
                  <PlayCircleOutlined />
                  <span>E-commerce home page + SASS setup</span>
                </span>
                <span className="space-x-2">
                  <ClockCircleOutlined /> <span>14:35</span>
                </span>
              </div>
              <div
                className="lessonContent mt-1 flex items-center justify-between text-green-700"
                onClick={showModal}
              >
                <span className="space-x-2">
                  {" "}
                  <PlayCircleOutlined />
                  <span>CSS and SCSS files</span>
                </span>
                <span className="space-x-2">
                  <ClockCircleOutlined /> <span>14:35</span>
                </span>
              </div>
              <div
                className="lessonContent mt-1 flex items-center justify-between text-green-700"
                onClick={showModal}
              >
                <span className="space-x-2">
                  {" "}
                  <PlayCircleOutlined />
                  <span>React 17: Updated packages + Latest React version</span>
                </span>
                <span className="space-x-2">
                  <ClockCircleOutlined /> <span>14:35</span>
                </span>
              </div>
              <VideoJS isModalOpen={isModalOpen} handleCancel={handleCancel} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
