import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Toggle } from "../../Redux/Toggle";

import SignIn from "../SignIn/SignIn";
import {useDispatch} from "react-redux";
import {hideToggle} from "../../Redux/Actions";

const Navbar = () => {
  const [toggleDrop, setToggleDrop] = useState(false);
  const [hoverDrop, setHoverDrop] = useState(false);
  const [userChange, setUserChange] = useState(false);

// dispatch actions
const dispatch = useDispatch();

// redux state
const toggleID = 'SHOW_MODAL';

  const toggleNav = () => {
    const burger = document.getElementById("burger");
    const nav = document.querySelector(".nav-menu");
    const carousel = document.querySelector(".carousel-container");

    // burger icon
    burger.classList.toggle("active");
    setToggleDrop( current => !current);
    // nav screen
    if (toggleDrop) {
      nav.classList.add("hide");
      nav.classList.remove("show");
      carousel.classList.remove("ghost");
    } else {
      nav.classList.add("show");
      nav.classList.remove("hide");
      setTimeout(() => {
        carousel.classList.add("ghost");
      }, 170);
    }
    // hide carousel
  };

  // dynamically grabs the size for the navbar height
  const setNavHeight = () => {
    const nav = document.getElementById("nav");
    const root = document.querySelector(":root");
    root.style.setProperty("--nav-height", `${nav.clientHeight + 20}px`);
  };

  // document.documentElement.style.setProperty('--nav-height', document.getElementById('nav').offsetHeight);
  window.addEventListener("resize", setNavHeight);
  window.addEventListener("DOMContentLoaded", setNavHeight);

  const findHeightandWidth = () => {
    const box = document.querySelector(".carousel-container");
    console.log(box.offsetWidth);
    console.log(box.offsetHeight);
  };

  useEffect(() => {
    findHeightandWidth();
  }, []);

  return (
    <div id="nav">
      <div className="nav-menu hide">
        <ul>
          <li>
            {" "}
            <a
            onClick={toggleNav}
            href="">Collections</a>
          </li>
          <li>
            {" "}
            <a
            onClick={toggleNav}
            href="#mens">Men</a>
          </li>
          <li>
            {" "}
            <a
            onClick={toggleNav}
            href="#womens">Women</a>
          </li>
          <li>
            {" "}
            <a
            onClick={toggleNav}
            href="#kids">Kids</a>
          </li>
          <li>
            {" "}
            <a
            onClick={toggleNav}
            href="">About</a>
          </li>
          <li>
            {" "}
            <a
            onClick={toggleNav}
            href=""> Sign In</a>
          </li>
          <li>
            {" "}
            <a
            onClick={toggleNav}
            href=""> Contact</a>
          </li>
        </ul>
      </div>
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
        <div className="desktop-nav">
          <ul className="flex">
            <li>
              {" "}
              <a href="">Collections</a>
            </li>

            <div
              onMouseOver={() => setHoverDrop(true)}
              onMouseOut={() => setHoverDrop(false)}
              className="dropdown-nav"
            >
              <li className="dropdown-hover">
                {" "}
                <a className="category-li" href="">
                  Categories
                  <FontAwesomeIcon
                    className="dropdown-icon"
                    icon={faAngleDown}
                  />
                </a>
              </li>
              <div
                className={!hoverDrop ? "ghost" : null}
                id="category-dropdown-nav"
              >
                <ul id="dropdown-list">
                  <li>
                    <a href="#mens">Mens</a>
                  </li>
                  <li>
                    <a href="#womens">Womens</a>
                  </li>
                  <li>
                    <a href="#kids">Kids</a>
                  </li>
                </ul>
              </div>
            </div>
            <li>
              {" "}
              <a href="">Deals</a>
            </li>
            <li>
              {" "}
              <a href="">About</a>
            </li>
            <li>
              {" "}
              <a href=""> Contact</a>
            </li>
          </ul>
        </div>
        <div className="cart-container">
          <div className="cart-count">3</div>
          <FontAwesomeIcon
            size="lg"
            id="cart-icon"
            icon={faCartShopping}
            className="icon"
          />
          {/* on clicks I need to toggle this cart count class or something alike */}
        </div>
        <div className="profile-containter">
          <img
            src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
            alt="profile"
          />
        </div>
      </div>
      {/* need to figure out how to properly toggle modal in redux */}
     {/* <Toggle> */}
     {/* {!userChange ? <SignIn/> : null} */}
        {/* <SignIn
        onClick={() => dispatch(hideToggle(toggleID))}
        /> */}
     {/* </Toggle> */}

    </div>
  );
};

export default Navbar;
