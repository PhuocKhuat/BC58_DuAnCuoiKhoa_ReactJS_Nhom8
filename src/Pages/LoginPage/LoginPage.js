import React from "react";
import "./style.css";
import FormLogin from "./FormLogin";
import LottieLogin from "./LottieLogin";
import { Parallax } from "@react-spring/parallax";
import Footer from "../../Components/Footer/Footer";

export default function LoginPage() {
  return (
    <Parallax>
      <div className="loginPage block lg:flex container relative overflow-hidden">
        <FormLogin />
        <LottieLogin />
      </div>
      <Footer />
    </Parallax>
  );
}
