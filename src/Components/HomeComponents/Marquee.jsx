import Image from "next/image";
import React from "react";

import img1 from "../../Assets/img/clients/bank.png";
import img2 from "../../Assets/img/clients/dbsk.png";
import img3 from "../../Assets/img/clients/fiat.jpg";
import img4 from "../../Assets/img/clients/jb.jpg";
import img5 from "../../Assets/img/clients/nse.jpg";
import img6 from "../../Assets/img/clients/piramal.png";
import img7 from "../../Assets/img/clients/tcs.png";

const Marquee = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  const doubledImages = [...images, ...images];

  return (
    <div className="marquee-wrapper">
      <ul className="marquee-list">
        {doubledImages.map((image, index) => (
          <li key={index}>
            <Image
              height={500}
              width={500}
              src={image}
              alt={`marquee-img-${index}`}
              className="marquee-img"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Marquee;
