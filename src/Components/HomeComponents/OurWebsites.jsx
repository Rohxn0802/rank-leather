"use client";
import Link from "next/link";
import { useRef, useEffect } from "react";
import SectionTitle from "../Common/SectionTitle";

function OurWebsites() {
  const postionRef = useRef(null);
  const bullriderRef = useRef(null);
  const agRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const Position =
        postionRef.current.getBoundingClientRect().top + window.scrollY;

      if (
        window.scrollY + window.innerHeight >= Position ||
        window.scrollY >= Position
      ) {
        bullriderRef.current.classList.add("visible");
        agRef.current.classList.add("visible");
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="our-websites-section">
      <SectionTitle title={"Our Online Presence"} />
      <div ref={postionRef} className="our-websites-wrap">
        <div ref={bullriderRef} className="bullrider">
          <div className="bullrider-desc">
            <h2>BULL RIDER INDIA</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              voluptates nam numquam magnam. Ipsa deserunt eum quam eos,
              consequuntur doloribus temporibus nostrum facilis itaque sint sit
              corporis obcaecati quo sed.
            </p>
            <Link href="https://www.bullriderindia.in">VISIT NOW</Link>
          </div>
        </div>
        <div ref={agRef} className="ag">
          <div className="ag-desc">
            <h2>AGOSTINO GIANI</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit assumenda optio odio totam, commodi esse vel
              expedita saepe, deserunt corrupti neque dolorum eos, ad accusamus
              praesentium! Ex non corporis explicabo.
            </p>
            <Link href="/">VISIT NOW</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurWebsites;
