import { useEffect } from "react";
// style sheets
import "./App.css";
import "./components/Nav/Nav.css";
import "./components/Carousel/Carousel.css";
import "./components/Descriptons/Descriptions.css";
import "./components/MoreStyles/MoreStyles.css";
import "./MediaQueries.css";
import './components/SignIn/SignIn.css';

import Navbar from "./components/Nav/Nav";
import HomeCarousel from "./components/Carousel/Carousel";
import { DescriptionCart } from "./components/Descriptons/DescriptionCart";
import { MoreStyles } from "./components/MoreStyles/MoreStyles";

function App() {
  const windowWidth = window.innerWidth;
  useEffect(() => {
    console.log(windowWidth + " hi");
  }, windowWidth);

  return (
    <div className="main-container">
      <Navbar />
      <section id="main-section">
        <div className=" content-container flex">
          <HomeCarousel />
          <DescriptionCart />
        </div>
      </section>
      <MoreStyles />
      <footer>
        <p>
          Developed By{" "}
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/cassius2828"
          >
            Cassius Reynolds
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
/*
Things to add
1. a way to track each item's price and add it in the cart
2. Keeping track of the cart count
3. ability to apply discounts
4. drop down menu to show categories
5. deals section with exclusive discount codes
6. Add modal for checkout
7. make discount entry on checkout modal
8. create login and logout, with correspingn photos
9. do category dropdown
10. Make separate page for exclusive discount codes
11. Make alert for collections



DISCOUNT CODES
1. FREE99 (BOGO)
2. CHEFCURRY (30% off)
3. UNCLEDREW (11% off)
4. STAYMELO ($62 off)
5. MAMBA (24% off)



*/
