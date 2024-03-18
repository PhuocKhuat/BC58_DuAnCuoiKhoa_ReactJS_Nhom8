import React from "react";
import LottieLogin from "../Pages/LoginPage/LottieLogin";
import { Outlet } from "react-router-dom";
import { Parallax } from "@react-spring/parallax";
import Footer from "../Components/Footer/Footer";

export default function LayoutLottie() {
  return (
    <Parallax>
      <div className="layoutLottie block lg:flex container relative overflow-hidden">
        <Outlet />
        <LottieLogin />
      </div>
      <Footer />
    </Parallax>
  );
}
