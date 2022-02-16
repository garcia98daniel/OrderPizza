import React from "react";
import { Link } from "react-router-dom";
import cart from "../img/cart.png";
import closeIcon from "../img/closeIcon.png";
import backIcon from "../img/white_arrow.png";

import "./style/menuSideShoppingCar.css";

import ItemShoppingCar from "../components/ItemShoppingCar";

function MenuSideShoppingCar({
  shoppingCarSwitchModal,
  pizzaItemsChosen,
  setPizzaItemsChosen,
  handleOpenModal,
  setMakeOrder,
}) {
  const handleDeletePizzaItemsChosen = (pizzaItem_id) => {
    setPizzaItemsChosen(
      pizzaItemsChosen.filter((pizzaItem) => pizzaItem.id !== pizzaItem_id)
    );
  };

  const handlerSetMakeOrder = () => {
    setMakeOrder(true)
    handleOpenModal(false)
  }

  return (
    <div className="overlay-two">
      <div className="make-order">
        <i className="make-order-closeIcon" onClick={() => handleOpenModal(!shoppingCarSwitchModal)}>
          <img src={backIcon} alt="" />
        </i>
        <div className="shopping-car" onClick={() => handleOpenModal(false)}>
          <div className="box1">
            <i className="fas fa-angle-left"></i>
          </div>
          <div className="box2">
            <Link to="/menu" className="cartIcon_container">
              <img src={cart} alt="cart" />
            </Link>
          </div>
        </div>
        {pizzaItemsChosen.length !== 0 ? (
          <div className="items">
            {pizzaItemsChosen &&
              pizzaItemsChosen.map((pizzaItem, index) => (
                <ItemShoppingCar
                  handleDeletePizzaItemsChosen={handleDeletePizzaItemsChosen}
                  key={index}
                  id={pizzaItem.id}
                  totalProductPrice={pizzaItem.price}
                  pizzaImg={pizzaItem.img}
                  productDescription={pizzaItem.description}
                  detailPizzaPrice={pizzaItem.details.Price}
                  detailBordePrice={pizzaItem.details.EdgePrice}
                  detailIngredientPrice={pizzaItem.details.ingredientPrice}
                  detailDrinkPrice={pizzaItem.details.drinkPrice}
                  detailExtraCheesePrice={pizzaItem.details.extraCheesePrice}
                  quantity={pizzaItem.quantity}
                  productName={pizzaItem.name}
                  size={pizzaItem.size}
                  observation={pizzaItem.observation}
                  aditionalBordeName={pizzaItem.additionals[0].name}
                  aditionalIngredientName={pizzaItem.additionals[1].name}
                  aditionalDrinkName={pizzaItem.additionals[2].name}
                  aditionalExtraCheeseName={pizzaItem.additionals[3].name}
                />
              ))}
          </div>
        ) : (
          <h1 className="emptyCar">Agrega una pizza a tu carrito</h1>
        )}

        <div className="make-order-button">
          <div className="order-resume">
            <p>{pizzaItemsChosen && pizzaItemsChosen.length} Items</p>
            <h4>
              {pizzaItemsChosen &&
                pizzaItemsChosen.reduce((total, pizzaItem) => {
                  return total + pizzaItem.price;
                }, 0)}{" "}
              COP
            </h4>
          </div>
          {pizzaItemsChosen.length !== 0 ? (
            <button onClick={() => handlerSetMakeOrder()}>Realizar Pedido</button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuSideShoppingCar;
