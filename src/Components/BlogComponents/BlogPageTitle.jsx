"use client";
import React, { useEffect, useRef } from "react";

function BlogPageTitle() {
  const blogPage = useRef(null);

  useEffect(() => {
    if (blogPage.current) {
      blogPage.current.classList.add("visible");
    }
  }, []);
  return (
    <div ref={blogPage} className="page-title-block">
      <h2>Explore Our Leather Insights</h2>
      <p>
        Dive into daily updates on leather trends, market insights, and expert
        tips on leather care and craftsmanship. Discover high-quality leather
        products, industry news, and the art of leatherworking. Join us to
        elevate your knowledge and appreciation of leather with our informative
        and engaging articles. Stay ahead in the leather world by following our
        latest posts and updates.
      </p>
    </div>
  );
}

export default BlogPageTitle;
