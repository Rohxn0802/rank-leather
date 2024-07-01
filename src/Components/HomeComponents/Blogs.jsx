"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";

function Blogs() {
  const titleRef = useRef(null);
  const blogCard = useRef(null);
  const viewMore = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const titlePosition =
        titleRef.current.getBoundingClientRect().top + window.scrollY;

      if (
        window.scrollY + window.innerHeight >= titlePosition ||
        window.scrollY >= titlePosition
      ) {
        titleRef.current.classList.add("visible");
        blogCard.current.classList.add("visible");
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
    <section className="home-blogs-section">
      <h2 ref={titleRef} className="section-title">
        Insights & Stories
      </h2>
      <div className="home-blogs">
        <div ref={blogCard} className="blog-card">
          <div className="blog-image">
            <button>Continue Reading</button>
          </div>
          <h3>Title</h3>
        </div>
      </div>
      <div ref={viewMore} className="blogs-redirect">
        <Link href="/blogs">More to Explore</Link>
      </div>
    </section>
  );
}

export default Blogs;
