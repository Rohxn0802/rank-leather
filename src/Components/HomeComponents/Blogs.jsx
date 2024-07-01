"use client";
import { useRef, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";
import ViewMore from "../Common/ViewMore";

function Blogs() {
  const blogCard = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const cardPosition =
        blogCard.current.getBoundingClientRect().top + window.scrollY;

      if (
        window.scrollY + window.innerHeight >= cardPosition ||
        window.scrollY >= cardPosition
      ) {
        blogCard.current.classList.add("visible");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="home-blogs-section">
      <SectionTitle title={"Insights & Stories"} />
      <div className="home-blogs">
        <div ref={blogCard} className="blog-card">
          <div className="blog-image">
            <button>Continue Reading</button>
          </div>
          <h3>Title</h3>
        </div>
      </div>
      <ViewMore text={"More to Explore"} link={"/blogs"} />
    </section>
  );
}

export default Blogs;
