"use client"
import Link from "next/link";
import { useRef, useEffect } from "react";

function OurWebsites() {
  const titleRef = useRef(null);
  const bullriderRef = useRef(null);
  const agRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const titlePosition =
        titleRef.current.getBoundingClientRect().top + window.scrollY;
      
      // Check if the top of the title is visible in the viewport
      if (window.scrollY + window.innerHeight >= titlePosition ||
          window.scrollY >= titlePosition) {
        titleRef.current.classList.add("visible");
        window.removeEventListener("scroll", handleScroll);
      }
      
      // Check if bullrider element is visible
      if (bullriderRef.current) {
        const bullriderPosition = bullriderRef.current.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY + window.innerHeight >= bullriderPosition) {
          bullriderRef.current.classList.add("visible");
        }
      }

      // Check if ag element is visible
      if (agRef.current) {
        const agPosition = agRef.current.getBoundingClientRect().top + window.scrollY;
        if (window.scrollY + window.innerHeight >= agPosition) {
          agRef.current.classList.add("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="our-websites-section">
      <h2 ref={titleRef} className="section-title">
        Our Online Presence
      </h2>
      <div className="our-websites-wrap">
        <div ref={bullriderRef} className="bullrider">
          <div className="bullrider-desc">
            <h2>BULL RIDER INDIA</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
              voluptates nam numquam magnam. Ipsa deserunt eum quam eos,
              consequuntur doloribus temporibus nostrum facilis itaque sint sit
              corporis obcaecati quo sed.
            </p>
            <Link href="https://www.bullriderindia.in">Visit</Link>
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
            <Link href="/">Visit</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurWebsites;
