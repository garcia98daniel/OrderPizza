import React from "react";
import "./style/menuSideShoppingCar.css";

import ItemShoppingCar from "../components/ItemShoppingCar";

function MenuSideShoppingCar({pizzaItemsChosen}) {
  return (
    <div className="overlay-two">
      <div className="make-order">
        <div className="items">
          {pizzaItemsChosen && pizzaItemsChosen.map((pizzaItem) => (
            <ItemShoppingCar
            productName={"hola"}
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
            <p>{pizzaItemsChosen && pizzaItemsChosen.length} Items</p>
            <h4>{pizzaItemsChosen && pizzaItemsChosen.reduce((total, pizzaItem) => {
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
