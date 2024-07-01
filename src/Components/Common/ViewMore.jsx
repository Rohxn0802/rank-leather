"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

function ViewMore({ text, link }) {
  const viewMore = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const viewPosition =
        viewMore.current.getBoundingClientRect().top + window.scrollY;

      if (
        window.scrollY + window.innerHeight >= viewPosition ||
        window.scrollY >= viewPosition
      ) {
        viewMore.current.classList.add("visible");

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={viewMore} className="redirect-button">
      <Link href={link}>{text}</Link>
    </div>
  );
}

export default ViewMore;
