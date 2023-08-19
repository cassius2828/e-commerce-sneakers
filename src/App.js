import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import img1 from './images/citrus11-1.webp';
import img2 from './images/citrus11-2.webp';
import img3 from './images/citrus11-3.webp';
import img4 from './images/citrus11-4.webp';
import img5 from './images/citrus11-5.webp';
import img6 from './images/citrus11-6.webp';
import img7 from './images/citrus11-7.webp';
import img8 from './images/citrus11-8.webp';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div className="main-container">
      <Navbar />
      <Carousel />
    </div>
  );
}

export default App;

export const Navbar = () => {
  const [toggleDrop, setToggleDrop] = useState(false);

  const toggleNav = () => {
    const burger = document.getElementById("burger");
    burger.classList.toggle("active");
    setToggleDrop(!toggleDrop);
  };

  return (
    <div className="navbar">
      {/* left side */}
      <div className="left-nav">
        <div
          onClick={toggleNav}
          id="burger"
          className="hamburger-container"
        ></div>
        <h1>Sneakers</h1>
      </div>
      {/* right side */}
      <div className="right-nav">
        <div className="cart-container">
          <FontAwesomeIcon
            size="lg"
            id="cart-icon"
            icon={faCartShopping}
            className="icon"
          />
          {/* on clicks I need to toggle this cart count class or something alike */}
          <div className="cart-count">
            {/* number will be controlled by state */}
            <p>3</p>
          </div>
        </div>

        <div className="profile-containter">
          <img
            src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export const Carousel = () => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={img1} class="d-block w-100" alt='' />
        </div>
        <div class="carousel-item">
          <img src={img2} class="d-block w-100" alt='' />
        </div>
        <div class="carousel-item">
          <img src={img3} class="d-block w-100" alt='' />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};
