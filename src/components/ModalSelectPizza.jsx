import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import "./style/modalSelectPizza.css";
import closeIcon from "../img/closeIcon.png";
import plusIcon from "../img/plusIcon.png";
import cart from "../img/cart.png";

import plusIconSvg from "../img/plusIconSvg.svg";
import { pizzaBorder } from "../pizzaPricesData/pizzaBorder.js";
import { extraQueso } from "../pizzaPricesData/extraQueso.js";
import { pizzaIngredients } from "../pizzaPricesData/pizzaIngredients.js";
import { drinks } from "../pizzaPricesData/drinks.js";

function ModalSelectPizza({
  openModal,
  setPizzaItemsChosen,
  pizzaItemsChosen,
  productPrice,
  productPizzaName,
  productDescription,
  productPizzaImg,
}) {
  const [quantity, setQuantity] = useState(1);
  const [size, setZise] = useState("Personal");
  const [pizzaEdge, setPizzaEdge] = useState("Bordes");
  const [ingredient, setIngredient] = useState("Ingredientes");
  const [drink, setDrink] = useState("Bebidas");

  const [pizzaEdgePrice, setPizzaEdgePrice] = useState(0);
  const [ingredientPrice, setIngredientPrice] = useState(0);
  const [drinkPrice, setDrinkPrice] = useState(0);
  const [extraCheesePrice, setExtraCheesePrice] = useState(0);
  const [pizzaNetoPrice, setPizzaNetoPrice] = useState(0);

  const [pizzaExtraQueso, setPizzaExtraQueso] = useState(false);
  const [observation, setObservation] = useState("");
  const [totalProductPrice, setTotalProductPrice] = useState(0);

  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleProductQuantity = (number) => {
    if (quantity + number < 1) {
      setQuantity(1);
    } else {
      setQuantity(quantity + number);
    }
  };

  const TotalPrice = () => {
    let finalProductPrice;
    if (size === "Personal") {
      finalProductPrice = productPrice.value.personal;
      setPizzaNetoPrice(finalProductPrice);
      finalProductPrice += calcBordePrice("personal");
      finalProductPrice += calcIngredientPrice("personal");
      finalProductPrice += calcExtraCheesePrice("personal");

      // alert(calcBordePrice('personal'))
    } else if (size === "Pequeña") {
      finalProductPrice = productPrice.value.pequeña;
      setPizzaNetoPrice(finalProductPrice);
      finalProductPrice += calcBordePrice("pequeña");
      finalProductPrice += calcIngredientPrice("pequeña");
      finalProductPrice += calcExtraCheesePrice("pequeña");

      // alert(calcBordePrice('pequeña'))
    } else if (size === "Mediana") {
      finalProductPrice = productPrice.value.mediana;
      setPizzaNetoPrice(finalProductPrice);
      finalProductPrice += calcBordePrice("mediana");
      finalProductPrice += calcIngredientPrice("mediana");
      finalProductPrice += calcExtraCheesePrice("mediana");

      // alert(calcBordePrice('mediana'))
    } else if (size === "Grande") {
      finalProductPrice = productPrice.value.grande;
      setPizzaNetoPrice(finalProductPrice);
      finalProductPrice += calcBordePrice("grande");
      finalProductPrice += calcIngredientPrice("grande");
      finalProductPrice += calcExtraCheesePrice("grande");

      // alert(calcBordePrice('grande'))
    }
    finalProductPrice += calcDrinkPrice();
    setTotalProductPrice(finalProductPrice * quantity);
  };

  const calcBordePrice = (pizzaSize) => {
    let borderPrice = 0;
    // const newPizzaBorder = Object.assign({}, pizzaBorder);
    if (pizzaSize === "personal") {
      if (pizzaEdge === "Borde de Queso") {
        borderPrice = pizzaBorder[0].value.personal;
      } else if (pizzaEdge === "Borde de Queso con Bocadillo") {
        borderPrice = pizzaBorder[1].value.personal;
      } else if (pizzaEdge === "Borde de Queso con Piña") {
        borderPrice = pizzaBorder[2].value.personal;
      }
    } else if (pizzaSize === "pequeña") {
      if (pizzaEdge === "Borde de Queso") {
        borderPrice = pizzaBorder[0].value.pequeña;
      } else if (pizzaEdge === "Borde de Queso con Bocadillo") {
        borderPrice = pizzaBorder[1].value.pequeña;
      } else if (pizzaEdge === "Borde de Queso con Piña") {
        borderPrice = pizzaBorder[2].value.pequeña;
      }
    } else if (pizzaSize === "mediana") {
      if (pizzaEdge === "Borde de Queso") {
        borderPrice = pizzaBorder[0].value.mediana;
      } else if (pizzaEdge === "Borde de Queso con Bocadillo") {
        borderPrice = pizzaBorder[1].value.mediana;
      } else if (pizzaEdge === "Borde de Queso con Piña") {
        borderPrice = pizzaBorder[2].value.mediana;
      }
    } else if (pizzaSize === "grande") {
      if (pizzaEdge === "Borde de Queso") {
        borderPrice = pizzaBorder[0].value.grande;
      } else if (pizzaEdge === "Borde de Queso con Bocadillo") {
        borderPrice = pizzaBorder[1].value.grande;
      } else if (pizzaEdge === "Borde de Queso con Piña") {
        borderPrice = pizzaBorder[2].value.grande;
      }
    }
    // setPizzaEdgePrice(borderPrice);
    setPizzaEdgePrice(0); //deleting borde
    borderPrice = 0;
    return borderPrice;
  };

  const calcIngredientPrice = (pizzaSize) => {
    let ingredientPrice = 0;
    if (ingredient !== "Ingredientes") {
      if (pizzaSize === "personal") {
        ingredientPrice = pizzaIngredients[0].value.personal;
      } else if (pizzaSize === "pequeña") {
        ingredientPrice = pizzaIngredients[0].value.pequeña;
      } else if (pizzaSize === "mediana") {
        ingredientPrice = pizzaIngredients[0].value.mediana;
      } else if (pizzaSize === "grande") {
        ingredientPrice = pizzaIngredients[0].value.grande;
      }
    }
    setIngredientPrice(ingredientPrice);
    return ingredientPrice;
  };

  const calcDrinkPrice = () => {
    let drinkPrice = 0;
    if (drink === "Gaseosa Pool 250ml") {
      drinkPrice = drinks[0].value;
    } else if (drink === "Gaseosa Pool 400ml") {
      drinkPrice = drinks[1].value;
    } else if (drink === "Coca-Cola 400ml") {
      drinkPrice = drinks[2].value;
    } else if (drink === "Cocacola sin azucar 400ml") {
      drinkPrice = drinks[3].value;
    }
    setDrinkPrice(drinkPrice);
    return drinkPrice;
  };

  const calcExtraCheesePrice = (pizzaSize) => {
    let extraCheesePrice = 0;
    if (pizzaExtraQueso) {
      if (pizzaSize === "personal") {
        extraCheesePrice = extraQueso[0].value.personal;
      } else if (pizzaSize === "pequeña") {
        extraCheesePrice = extraQueso[0].value.pequeña;
      } else if (pizzaSize === "mediana") {
        extraCheesePrice = extraQueso[0].value.mediana;
      } else if (pizzaSize === "grande") {
        extraCheesePrice = extraQueso[0].value.grande;
      }
    }
    setExtraCheesePrice(extraCheesePrice);
    return extraCheesePrice;
  };

  const handleAddPizzaToShoppingCar = () => {
    setAddedAnimation(true);
    setTimeout(() => {
      setAddedAnimation(false);
    }, 1000);

    setPizzaItemsChosen([
      ...pizzaItemsChosen,
      {
        id: pizzaItemsChosen.length,
        price: totalProductPrice,
        img: productPizzaImg,
        description: productDescription,

        details: {
          Price: pizzaNetoPrice,
          EdgePrice: pizzaEdgePrice,
          ingredientPrice: ingredientPrice,
          drinkPrice: drinkPrice,
          extraCheesePrice: extraCheesePrice,
        },
        // hasta aqui product
        quantity: quantity,
        name: productPizzaName,
        size: size,
        observation: observation,
        additionals: [
          {
            name: pizzaEdge !== "Bordes" ? pizzaEdge : "",
            type: "ownProduct",
          },
          {
            name: ingredient !== "Ingredientes" ? ingredient : "",
            type: "ownProduct",
          },
          {
            name: drink !== "Bebidas" ? drink : "",
            type: drink,
          },
          {
            name: pizzaExtraQueso ? "Extra queso" : "",
            type: "ownProduct",
          },
        ],
      },
    ]);
  };

  useEffect(() => {
    TotalPrice();
    // console.log(pizzaItemsChosen);
  });

  return ReactDOM.createPortal(
    <div className="overlay">
      <div className="order-popup">
        <img
          src={closeIcon}
          alt="close"
          className="closeIcon"
          onClick={() => openModal(false)}
        />

        <div className="order-information">
          <article className="pizza-visual-description">
            <h1>{productPizzaName}</h1>
            <p>{productDescription}</p>
            <img src={productPizzaImg} alt="" />
            <h4>Tamaño</h4>
          </article>
          <div className="pizza-caracteristics">
            <h3>Adicionales</h3>
            {/* <form action="">
               <label htmlFor="border"></label>
               <select name="border" id="border" className="input-select" value={pizzaEdge} onChange={(e)=>setPizzaEdge(e.target.value)}>
                 <option value="Bordes" selected >Bordes</option>
                 {pizzaBorder.map((borde, index)=>(
                 <option key={index} value={borde.text} >{borde.text}</option>
                 ))}
               </select>
             </form> */}
            <form action="">
              <label htmlFor="ingredients"></label>
              <select
                name="ingredients"
                id="ingredients"
                className="input-select"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
              >
                <option value="Ingredientes" selected>
                  Ingredientes
                </option>
                {pizzaIngredients.map((ingredient) => (
                  <option value={ingredient.text}>{ingredient.text}</option>
                ))}
              </select>
            </form>
            <form action="">
              <label htmlFor="drinks"></label>
              <select
                name="drinks"
                id="drinks"
                className="input-select"
                value={drink}
                onChange={(e) => setDrink(e.target.value)}
              >
                <option value="" selected>
                  Bebidas
                </option>
                {drinks.map((drink) => (
                  <option value={drink.text}>{drink.text}</option>
                ))}
              </select>
            </form>
            <label className="extraQueso">
              <input
                checked={pizzaExtraQueso}
                onChange={() => setPizzaExtraQueso(!pizzaExtraQueso)}
                type="checkbox"
                id="extraQueso"
                value="extraQueso"
              />
              Extra Queso
            </label>
            <img src={plusIcon} alt="" className="plusCirculeIcon" />
            <h4>Observación</h4>
            <textarea
              value={observation}
              onChange={(e) => setObservation(e.target.value)}
              name="observation"
              id="observation"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="order-price">
          <div className="sizes">
            <div
              className={
                size === "Personal"
                  ? "pizza_personal size sizeActive"
                  : "pizza_personal  size"
              }
              onClick={() => setZise("Personal")}
            >
              Personal
              <span className="pizzaModel">
                <div className="detailsZise">
                  <h3>Porciones 4</h3> <span>24 CM</span>
                </div>
                <div className="circulePizzaModel ">
                  <div className="pizza_stripe stripe_one_4"></div>
                  <div className="pizza_stripe stripe_two_4"></div>
                </div>
              </span>
            </div>
            <div
              className={
                size === "Pequeña"
                  ? "pizza_pequeña size sizeActive"
                  : "pizza_pequeña size"
              }
              onClick={() => setZise("Pequeña")}
            >
              Pequeña
              <span className="pizzaModel">
                <div className="detailsZise">
                  <h3>Porciones 6</h3>
                  <span>32 CM</span>
                </div>
                <div className="circulePizzaModel">
                  <div className="pizza_stripe stripe_one_6"></div>
                  <div className="pizza_stripe stripe_two_6"></div>
                  <div className="pizza_stripe stripe_three_6"></div>
                </div>
              </span>
            </div>
            <div
              className={
                size === "Mediana"
                  ? "pizza_mediana size sizeActive"
                  : "pizza_mediana size"
              }
              onClick={() => setZise("Mediana")}
            >
              Mediana
              <span className="pizzaModel">
                <div className="detailsZise">
                  <h3>Porciones 8</h3>
                  <span>37 CM</span>
                </div>
                <div className="circulePizzaModel">
                  <div className="pizza_stripe stripe_one_8"></div>
                  <div className="pizza_stripe stripe_two_8"></div>
                  <div className="pizza_stripe stripe_three_8"></div>
                  <div className="pizza_stripe stripe_four_8"></div>
                </div>
              </span>
            </div>
            <div
              className={
                size === "Grande"
                  ? "pizza_grande size sizeActive"
                  : "pizza_grande size"
              }
              onClick={() => setZise("Grande")}
            >
              Grande
              <span className="pizzaModel">
                <div className="detailsZise">
                  <h3>Porciones 10</h3>
                  <span>42 CM</span>
                </div>
                <div className="circulePizzaModel">
                  <div className="pizza_stripe stripe_one_10"></div>
                  <div className="pizza_stripe stripe_two_10"></div>
                  <div className="pizza_stripe stripe_three_10"></div>
                  <div className="pizza_stripe stripe_four_10"></div>
                  <div className="pizza_stripe stripe_five_10"></div>
                </div>
              </span>
            </div>
          </div>
          <div className="quantity">
            <div className="minus" onClick={() => handleProductQuantity(-1)}>
              -
            </div>
            <div className="number">{quantity}</div>
            <div className="plus" onClick={() => handleProductQuantity(1)}>
              +
            </div>
          </div>
          <div
            className="total-price"
            onClick={() => handleAddPizzaToShoppingCar()}
          >
            <div>
              <img src={cart} alt="cart" className="cart" />
              <img src={plusIconSvg} alt="" className="plusIcon" />
            </div>
            <p>{totalProductPrice} COP</p>
            {addedAnimation && (
              <div className="addedAnimation">
                <img src={cart} alt="cart" /> Cargado al carrito
              </div>
            )}
          </div>
        </div>
      </div>
      </div>
    ,document.getElementById("modal")
  );
}

export default ModalSelectPizza;
