"use client"
import Link from "next/link";
import {useRef, useEffect} from "react";

function Blogs() {
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
    <section class="home-blogs-section">
      <h2 ref={titleRef} class="section-title">Insights & Stories</h2>
      <div className="home-blogs">
        <div className="blog-card">
          <h3>Title</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, deserunt.</p>
          <button>Read More</button>
        </div>
      </div>
      <div className="blogs-redirect">
        <Link href="/blogs">View More</Link>
      </div>
    </section>
  );
}

export default Blogs;
