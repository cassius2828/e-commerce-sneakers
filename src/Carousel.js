import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

import img1 from "./images/citrus11-1.webp";
import img2 from "./images/citrus11-2.webp";
import img3 from "./images/citrus11-3.webp";
import img4 from "./images/citrus11-4.webp";
import img5 from "./images/citrus11-5.webp";
import img6 from "./images/citrus11-6.webp";
import img7 from "./images/citrus11-7.webp";
import img8 from "./images/citrus11-8.webp";

const data = [
  {
    image: img1,
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: img2,
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: img3,
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: img4,
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: img5,
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: img6,
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: img7,
    caption: "Caption",
    description: "Description Here",
  },
  {
    image: img8,
    caption: "Caption",
    description: "Description Here",
  }
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
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={slide.image}
                  alt="slider"
                />
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
