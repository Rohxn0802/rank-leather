"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import logo from "../../Assets/img/rank-nobg.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

function Footer() {
  const footerLine = useRef(null);
  const footerContent = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const footerPosition =
        footerContent.current.getBoundingClientRect().top + window.scrollY;

      if (
        window.scrollY + window.innerHeight >= footerPosition ||
        window.scrollY >= footerPosition
      ) {
        footerLine.current.classList.add("visible");

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer>
      <div ref={footerLine} className="footer-line"></div>

      <div className="footer-flex">
        <div className="footer-img">
          <div className="footer-logo">
            <Image src={logo} height={500} width={500} alt="Rank" />
          </div>
          <div ref={footerContent} className="footer-tagline">
            Manufacturer of Leather and Non-Leather Goods
          </div>
        </div>

        <div className="footer-info">
          <div className="footer-address">
            RANK, Laxmibai Dharmaji Pol Chawl, Opp. Kala Killa BMC School, Sant
            Rohidas Marg, Dharavi, Mumbai - 400017
            <br />
            +919869184901 | +919619184901
          </div>
          <div className="social-icons">
            <Link
              href={"https://wa.me/c/919619184901"}
              target="_blank"
              className="whatsapp-logo"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href={"https://www.facebook.com/profile.php?id=100063776868374"}
              target="_blank"
              className="facebook-logo"
            >
              <FaFacebook />
            </Link>
            <Link
              href={"https://www.instagram.com/rank.manufacturing/"}
              target="_blank"
              className="instagram-logo"
            >
              <FaInstagram />
            </Link>
            <Link href={"/"} target="_blank" className="email-logo">
              <TfiEmail />
            </Link>
          </div>
          <div className="copyright">&copy; 2024 All Rights Reserved</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
