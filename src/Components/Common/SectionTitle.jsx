"use client";
import React, { useEffect, useRef } from "react";

function SectionTitle({ title }) {
  const titleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const titlePosition =
        titleRef.current.getBoundingClientRect().top + window.scrollY;

      if (
        window.scrollY + window.innerHeight >= titlePosition ||
        window.scrollY >= titlePosition
      ) {
        titleRef.current.classList.add("visible");

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <h2 ref={titleRef} className="section-title">
      {title}
    </h2>
  );
}

export default SectionTitle;
