import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import img1 from "../../images/citrus11-1.webp";
import img2 from "../../images/citrus11-2.webp";
import img3 from "../../images/citrus11-3.webp";
import img4 from "../../images/citrus11-4.webp";
import img5 from "../../images/citrus11-5.webp";
import img6 from "../../images/citrus11-6.webp";
import img7 from "../../images/citrus11-7.webp";
import img8 from "../../images/citrus11-8.webp";

const data = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
  {
    image: img5,
  },
  {
    image: img6,
  },
  {
    image: img7,
  },
  {
    image: img8,
  },
];

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="carousel-container">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {data.map((slide, i) => {
          return (
            <Carousel.Item data-bs-interval='5000'>
              <img className="d-block w-100" src={slide.image} alt="slider" />
              <Carousel.Caption>
                <h3>{slide.caption}</h3>
                <p>{slide.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
export default HomeCarousel;
