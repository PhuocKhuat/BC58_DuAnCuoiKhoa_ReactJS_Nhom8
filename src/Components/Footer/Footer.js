import React, { memo } from "react";
import { RightOutlined } from "@ant-design/icons";
import "./styleFooter.css";

const Footer = () => {
  return (
    <div className="footer py-10">
      <div className="container grid grid-cols-3 text-white">
        <div>
          <div>
            <h3 className="tittleSignUp font-bold">
              Sign up to receive offers and new articles
            </h3>
            <div>
              <p className=" introFooter">
                CyberSoft will send online courses & CyberLive programs
                completely FREE and attractive PROMOTION programs to you.
              </p>
              <div>
                <form>
                  <input className="formFooter" placeholder="FullName"></input>
                  <input className="formFooter" placeholder="Email"></input>
                  <input
                    className="formFooter"
                    placeholder="Phone Number"
                  ></input>
                </form>
                <button className="btnFooter">Signup Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="link text-white">
              <h3 className="font-bold">Links</h3>
              <ul className="cursor-pointer mt-2">
                <li className="py-1">
                  <RightOutlined />
                  <span>Homepage</span>
                </li>
                <li className="py-1">
                  <RightOutlined />
                  <span>Infomation</span>
                </li>
                <li className="py-1">
                  <RightOutlined />
                  <span>Blogs</span>
                </li>
              </ul>
            </div>
            <div className="courses ">
              <h3 className="font-bold">Courses</h3>
              <ul className="cursor-pointer mt-2">
                <li className="py-1">
                  <RightOutlined />
                  <span>Front End</span>
                </li>
                <li className="py-1">
                  <RightOutlined />
                  <span>Back End</span>
                </li>
                <li className="py-1">
                  <RightOutlined />
                  <span>Full Stack</span>
                </li>
                <li className="py-1">
                  <RightOutlined />
                  <span>Node JS</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="address">
                <h2 className="text-base font-bold text-gray-500">Ho Chi Minh City</h2>
            <div className="flex space-x-32 items-center">
                <div>
                <h3>headquaters: 228 Nguyen Huu Tho, District 7</h3>
                <h6>Hotline: 0937638892</h6>    
                </div>
                <div>
                <h3>37 Nguyen Thien Thuat, District 3</h3>
                <h6>Hotline: 0937638892</h6>    
                </div>
                <div>
                <h3>headquaters: 191 Nguyen Thi Minh khai, District 1</h3>
                <h6>Hotline: 0937638892</h6>    
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Footer);
