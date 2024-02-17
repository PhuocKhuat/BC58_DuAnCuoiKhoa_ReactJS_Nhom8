import React from "react";
import "./styleBlog.css";
import { MinusOutlined } from "@ant-design/icons";

export default function Blog() {
  return (
    <div className="blog">
      <div className="container">
        <div className="grid grid-col-12 frame">
          <div className="col-span-12">
            <div className="lg:w-full flex flex-wrap">
              <div className="lg:w-1/3 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 bg-black pt-3 px-3 pb-4">
                <div className="flex mb-4">
                  <p className="flex-grow py-2 text-lg px-1 uppercase blogBorder">
                    Description
                  </p>
                </div>
                <div>
                  <ul className="leading-relaxed mb-4 text-white">
                    <li className="gap-2 flex">
                      <MinusOutlined />
                      <span className="textLi">All posts</span>
                    </li>
                    <li className="gap-2 flex">
                      <MinusOutlined />{" "}
                      <span className="textLi">Study guide</span>
                    </li>
                    <li className="gap-2 flex">
                      <MinusOutlined />{" "}
                      <span className="textLi">Should read article</span>
                    </li>
                    <li className="gap-2 flex">
                      <MinusOutlined />{" "}
                      <span className="textLi">E-learning activities</span>
                    </li>
                    <li className="gap-2 flex">
                      <MinusOutlined />{" "}
                      <span className="textLi">Success story</span>
                    </li>
                    <li className="gap-2 flex">
                      <MinusOutlined />{" "}
                      <span className="textLi">Career development</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="blogBorder py-2 px-1 mb-5">
                    SIGN UP TO RECEIVE NEW OFFERS & ARTICLES
                  </h3>
                  <form>
                    <input className="formBlog" placeholder="FullName"></input>
                    <input className="formBlog" placeholder="Email"></input>
                    <input
                      className="formBlog"
                      placeholder="Phone Number"
                    ></input>
                  </form>
                  <button className="btnBlog mt-3">Signup Now</button>
                </div>
              </div>
              <div className="px-4 borderFrame md:w-1/3 cursor-pointer">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bgFrame">
                  <div className="px-6 pt-6">
                    <h1 className="title-font text-lg font-bold text-white">
                      Tips to "beat" the automatic CV filtering system - Submit
                      your CV now
                    </h1>
                  </div>
                  <img
                    className="lg:h-56 md:h-36 w-full object-cover object-center p-2 imgBlog"
                    src="/img/ATS.jpg"
                    alt="img ATS"
                  />
                  <div className="p-6">
                    <div className="text-gray-700">
                      <span className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        500 views
                      </span>
                      <span className="inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6 comments
                      </span>
                    </div>
                    <p className="leading-relaxed mb-3 text-gray-400">
                    When participating in interviews, many programmers often focus on how to impress the employer at the first meeting but forget how to pass the CV...
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 borderFrame md:w-1/3 cursor-pointer">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bgFrame">
                  <div className="px-6 pt-6">
                    <h1 className="title-font text-lg font-bold text-white">
                    Outsource Or Product? What is the optimal choice for Fresher Developers?
                    </h1>
                  </div>
                  <img
                    className="lg:h-56 md:h-36 w-full object-cover object-center p-2 imgBlog"
                    src="/img/outsource.png"
                    alt="img outsource"
                  />
                  <div className="p-6">
                    <div className="text-gray-700">
                      <span className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        500 views
                      </span>
                      <span className="inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6 comments
                      </span>
                    </div>
                    <p className="leading-relaxed mb-3 text-gray-400">
                    Outsource is a strange term in the information technology industry, especially for developers. This process brings many benefits...
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 bottomFrame">
            <div className="flex flex-wrap -m-4">
            <div className="px-4 borderFrame md:w-1/3 opacity-0">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bgFrame">
                  <div className="px-6 pt-6">
                    <h1 className="title-font text-lg font-bold text-white">
                      Tips to "beat" the automatic CV filtering system - Submit
                      your CV now
                    </h1>
                  </div>
                  <img
                    className="lg:h-56 md:h-36 w-full object-cover object-center p-2 imgBlog"
                    src="/img/ATS.jpg"
                    alt="img ATS"
                  />
                  <div className="p-6">
                    <div className="text-gray-700">
                      <span className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        500 views
                      </span>
                      <span className="inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6 comments
                      </span>
                    </div>
                    <p className="leading-relaxed mb-3 text-gray-400">
                      When participating in interviews, many programmers often
                      focus on how to impress the ...
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 borderFrame md:w-1/3 cursor-pointer">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bgFrame">
                  <div className="px-6 pt-6">
                    <h1 className="title-font text-lg font-bold text-white">
                      Tips to "beat" the automatic CV filtering system - Submit
                      your CV now
                    </h1>
                  </div>
                  <img
                    className="lg:h-56 md:h-36 w-full object-cover object-center p-2 imgBlog"
                    src="/img/ATS.jpg"
                    alt="img ATS"
                  />
                  <div className="p-6">
                    <div className="text-gray-700">
                      <span className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        500 views
                      </span>
                      <span className="inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6 comments
                      </span>
                    </div>
                    <p className="leading-relaxed mb-3 text-gray-400">
                      When participating in interviews, many programmers often
                      focus on how to impress the ...
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-4 borderFrame md:w-1/3 cursor-pointer">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bgFrame">
                  <div className="px-6 pt-6">
                    <h1 className="title-font text-lg font-bold text-white">
                      Tips to "beat" the automatic CV filtering system - Submit
                      your CV now
                    </h1>
                  </div>
                  <img
                    className="lg:h-56 md:h-36 w-full object-cover object-center p-2 imgBlog"
                    src="/img/ATS.jpg"
                    alt="img ATS"
                  />
                  <div className="p-6">
                    <div className="text-gray-700">
                      <span className="mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx={12} cy={12} r={3} />
                        </svg>
                        500 views
                      </span>
                      <span className="inline-flex items-center leading-none text-sm">
                        <svg
                          className="w-4 h-4 mr-1"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                        6 comments
                      </span>
                    </div>
                    <p className="leading-relaxed mb-3 text-gray-400">
                      When participating in interviews, many programmers often
                      focus on how to impress the ...
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14" />
                          <path d="M12 5l7 7-7 7" />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
