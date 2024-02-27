import React from "react";
import {
  FieldTimeOutlined,
  UsergroupAddOutlined,
  MenuUnfoldOutlined,
  SafetyCertificateOutlined,
  DollarOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import './styleSchedule.css'

export default function Schedule() {
  return (
    <div className="text-gray-600 body-font schedule">
      <div className="container px-5 py-16 mx-auto">
        <div class="lg:w-full sm:mx-auto sm:mb-2 -mx-2">
          <div class="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div class="bg-gray-100 rounded flex p-4  items-center">
              <FieldTimeOutlined className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 text-2xl" />
              <span class="title-font font-medium uppercase">
                24 weeks (6 months)
              </span>
            </div>
            <div class="bg-gray-100 rounded flex p-4  items-center">
              <FieldTimeOutlined className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 text-2xl" />
              <span class="title-font font-medium uppercase">144 hours</span>
            </div>
            <div class="bg-gray-100 rounded flex p-4  items-center">
              <UsergroupAddOutlined className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 text-2xl" />
              <span class="title-font font-medium uppercase">
                Online study groups and practice videos.
              </span>
            </div>
            <div class="bg-gray-100 rounded flex p-4  items-center">
              <MenuUnfoldOutlined className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 text-2xl" />
              <span class="title-font font-medium">
                16 TOPICS & 25 PROJECTS
              </span>
            </div>
            <div class="bg-gray-100 rounded flex p-4  items-center">
              <SafetyCertificateOutlined className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 text-2xl" />
              <span class="title-font font-medium">CERTIFICATION</span>
            </div>
            <div class="bg-gray-100 rounded flex p-4  items-center">
              <DollarOutlined className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4 text-2xl" />
              <span class="title-font font-medium uppercase">
                Make CV and connect businesses
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap text-center">
          <div className="pt-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-black font-bold">
              Study schedule in HCM city
              <h2 className="title-font font-medium text-base text-gray-900">
                <p className="flex justify-evenly text-blue-800 text-lg">
                  <span>Sign up now</span>
                  <ArrowRightOutlined />
                </p>
              </h2>
            </div>
          </div>
          <div className="pt-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-black font-bold">
              Study schedule in Ha Noi capital
              <h2 className="title-font font-medium text-base text-gray-900">
                <p className="flex justify-evenly text-blue-800 text-lg">
                  <span>Sign up now</span>
                  <ArrowRightOutlined />
                </p>
              </h2>
            </div>
          </div>
          <div className="pt-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-black font-bold">
              Study schedule in Can Tho city
              <h2 className="title-font font-medium text-base text-gray-900">
                <p className="flex justify-evenly text-blue-800 text-lg">
                  <span>Sign up now</span>
                  <ArrowRightOutlined />
                </p>
              </h2>
            </div>
          </div>
          <div className="pt-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg text-black font-bold flex space-x-2">
              <span>
                Register before February 29 to receive incentives immediately
              </span>
              <button className="text-xl btnReceive">Sign up to receive incentives</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
