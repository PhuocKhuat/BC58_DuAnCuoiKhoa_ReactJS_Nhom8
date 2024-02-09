import React from "react";
import './styleNotFoundPage.css'
import { NavLink } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex-container notFoundPage">
      <div className="text-center">
        <h1>
          <span className="fade-in" id="digit1">
            4
          </span>
          <span className="fade-in" id="digit2">
            0
          </span>
          <span className="fade-in" id="digit3">
            4
          </span>
        </h1>
        <h3 className="fadeIn">PAGE NOT FOUND</h3>
        <NavLink className="btnReturnHome" type="button" name="button" to="/">
          Return To Home
        </NavLink>
      </div>
    </div>
  );
}
