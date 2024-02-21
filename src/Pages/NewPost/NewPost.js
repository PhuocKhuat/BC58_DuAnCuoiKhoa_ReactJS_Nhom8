import React from "react";
import './styleNewPost.css';

export default function NewPost() {
  return (
    <div className="text-gray-600 body-font newPost">
      <div className="container py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl title-font mb-2 uppercase font-bold titleNewPost">
              New Post
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded" />
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            These are the latest articles about learning methods, programming
            thinking, career orientation and many other useful knowledge...
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/4 md:w-1/2 p-3 bgPost">
            <div className="bg-gray-100  rounded-lg p-4">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/img/lapTrinhFrontEnd.jpg"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Front End programming
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-3 bgPost">
            <div className="bg-gray-100  rounded-lg p-4">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/img/chatGpt.jpg"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                What is gpt chat?
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-3 bgPost">
            <div className="bg-gray-100  rounded-lg p-4">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/img/phongVanFrontEnd.jpg"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Pass the interview
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/4 md:w-1/2 p-3 bgPost">
            <div className="bg-gray-100  rounded-lg p-4">
              <img
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/img/reactNative.png"
                alt="content"
              />
              <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                SUBTITLE
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Basics of React Native
              </h2>
              <p className="leading-relaxed text-base">
              Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
