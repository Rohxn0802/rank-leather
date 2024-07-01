import Image from "next/image";
import Link from "next/link";
import React from "react";

function BlogsContainer() {
  return (
    <div className="blogs-wrapper">
      <div className="blog-card">
        <Link href="/">
          <div className="blog-card-image">
            <Image height={500} width={500} src={""} alt="" />
          </div>
          <div className="blog-card-title">
            <h3></h3>
          </div>
          <div className="blog-card-content">
            <p></p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default BlogsContainer;
