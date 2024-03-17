import React, { useEffect, useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import "./styleBackToTop.css";

export default function BackToTop() {
  const [goToTop, setGoToTop] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      setGoToTop(window.scrollY >= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {goToTop && <button className="backTop" onClick={scrollToTop}>
        <ArrowUpOutlined className="absolute top-4 left-4 text-xl" />
      </button>}
    </>
  );
}
