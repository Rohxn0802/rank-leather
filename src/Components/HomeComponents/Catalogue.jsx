"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

function Catalogue() {
  const titleRef = useRef(null);
  const catalogueCard = useRef(null);
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
        catalogueCard.current.classList.add("visible");
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
    <section className="home-catalogue-section">
      <h2 ref={titleRef} className="section-title">
        Explore Our Exclusive 2024 Product Lineup
      </h2>
      <div className="home-catalogue">
        <div ref={catalogueCard} className="catalogue-card">
          <Image src={""} alt="" height={500} width={500} />
          <h3>Title</h3>
        </div>
      </div>
      <div ref={viewMore} className="catalogue-redirect">
        <Link href="/">Explore Further</Link>
      </div>
    </section>
  );
}

export default Catalogue;
