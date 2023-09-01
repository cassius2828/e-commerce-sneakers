import { faShoppingCart, faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export const DescriptionCart = () => {
  return (
    <div className="details-container">
      <div className="description-container mt4">
        <span 
        style={{color: 'orange'}}
        className="company-name">Sneaker Company</span>
        <h2 className="edition">Fall Limited Edition Sneakers</h2>
        <p className="description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste harum,
          animi sit dolores alias adipisci incidunt at veniam odio obcaecati
          nisi excepturi soluta in unde quibusdam nihil dolor autem officia.
        </p>
      </div>
      <div className="price-cart-container">
        <div className="price-container">
          <div>
            <span className="price fw6">$125.00</span>
            <span id="discount">50%</span>
          </div>
          <div>
            <span id="original-price">$250.00</span>
          </div>
        </div>
        <div className="btn-container">
          <input id="discount-code" type="text" name="discount" placeholder="Enter Discount Code..."/>
          <div className="cart-counter-container">
            <FontAwesomeIcon
              icon={faMinusCircle}
              className="cart-counter-btn"
            />
            <span>0</span>
            <FontAwesomeIcon
              icon={faPlusCircle}
              className="cart-counter-btn"
            />
          </div>
          <button>
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};
