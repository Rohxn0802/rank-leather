"use client";
import Image from "next/image";
import React from "react";
import { useEffect, useRef } from "react";

function CatalogueCard({ cardTitle, cardImg }) {
  const catalogueCard = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const cardPosition =
        catalogueCard.current.getBoundingClientRect().top + window.scrollY;

      if (
        window.scrollY + window.innerHeight >= cardPosition ||
        window.scrollY >= cardPosition
      ) {
        catalogueCard.current.classList.add("visible");

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={catalogueCard} className="catalogue-card">
      <Image src={cardImg} alt={cardTitle} height={500} width={500} />
      <h3>{cardTitle}</h3>
    </div>
  );
}

export default CatalogueCard;
