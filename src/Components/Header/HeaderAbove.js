import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderAbove() {
  return (
    <div className="h-9">
      <div className="fixed headerAbove text-sm">
      <div className="container">
        <ul className="flex justify-end space-x-5 cursor-pointer">
          <NavLink to='/blog'>Blog</NavLink>
          <li className="flex space-x-1 hover:text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>

            <a href="tel:+0937638892">HotLine: 0937638892</a>
          </li>
        </ul>
      </div>
      <div className="headerTopWrapper"></div>
    </div>
    </div>
  );
}
