import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css";
import {
  faCartArrowDown,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

function App() {
  return (
    <div className="main-container">
      <Navbar />
    </div>
  );
}

export default App;

export const Navbar = () => {
  const [toggleDrop, setToggleDrop] = useState(false);

  const toggleNav = () => {
    const burger = document.getElementById('burger');
    burger.classList.toggle('active');
    setToggleDrop(!toggleDrop);
  }

  return (
    <div className="navbar">
{/* left side */}
      <div className="left-nav">
        <div
        onClick={toggleNav}
        id="burger"
        className="hamburger-container"></div>
        <h1>Sneakers</h1>
      </div>
 {/* right side */}
      <div className="right-nav">
        <div className="cart-container">
          <FontAwesomeIcon 
          size="lg"
          id="cart-icon" 
          icon={faCartShopping}
          className="icon" />
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
