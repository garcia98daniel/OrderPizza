import React from "react";
import { Link } from "react-router-dom";
import cart from "../img/cart.png";
import "./style/menuSideShoppingCar.css";

import ItemShoppingCar from "../components/ItemShoppingCar";

function MenuSideShoppingCar({pizzaProducts, handleOpenModal}) {
  return (
    <div className="overlay-two">
      <div className="make-order">
        <div className="shopping-car" onClick={() => handleOpenModal(false)}>
          <div className="box1">
            <i className="fas fa-angle-left"></i>
          </div>
          <div className="box2">
            <Link className="cartIcon_container">
              <img src={cart} alt="cart" />
            </Link>
          </div>
        </div>
        <div className="items">
          {pizzaProducts && pizzaProducts.map((pizzaItem) => (
            <ItemShoppingCar
            productName={pizzaItem.name}
            pizzaImg={"hola"} 
            productDescription={"hola"} 
            totalProductPrice={"hola"} 
            detailsProdutPrice={"hola"} 
            detailsBorderProduct={"hola"} 
            detailsDrinkName={"hola"}
            detailsDrinkPrice={"hola"} 
            detailsExtraChesePrice={"hola"}
            observation={"hola"}
            />
          ))}
        </div>
        <div className="make-order-button">
          <div className="order-resume">
            <p>{pizzaProducts && pizzaProducts.length} Items</p>
            <h4>{pizzaProducts && pizzaProducts.reduce((total, pizzaItem) => {
                  return total + pizzaItem.productPrice;
                }, 0)} COP
            </h4>
          </div>
          <button>Realizar Pedido</button>
        </div>
      </div>
    </div>
  );
}

export default MenuSideShoppingCar;
