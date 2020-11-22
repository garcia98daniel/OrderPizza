import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Brand from "../components/Brand";
import cart from "../img/cart.png";
import PizzaArticle from "../components/PizzaArticle";
import AdicionalArticle from "../components/AdicionalArticle";
import ModalSelectPizza from "../components/ModalSelectPizza";
import MenuSideShoppingCar from "../components/MenuSideShoppingCar";

import {pizzaPricesLigeras} from "../pizzaPricesData/pizzaPricesLigeras.js";
import {pizzaPricesCombinadas} from "../pizzaPricesData/pizzaPricesCombinadas.js";
import {pizzaPricesEspeciales} from "../pizzaPricesData/pizzaPricesEspeciales.js";
import {pizzaPricesGourmet} from "../pizzaPricesData/pizzaPricesGourmet.js";

import pizza from '../img/pizza3.png';

import pizza2 from '../img/imgMenuPizzas/pizzaQueso.jpg';



import "./style/menu.css";
import { pizzaBorder } from "../pizzaPricesData/pizzaBorder";
import { drinks } from "../pizzaPricesData/drinks";

function Menu(props) {
  const [pizzaCategory, setPizzaCategory] = useState("ligeras");
  const [selectPizzaModal, setSelectPizzaModal] = useState(false);
  const [pizzaItemsChosen, setPizzaItemsChosen] = useState(null);

  const [productPrice, setProductPrice] = useState(0);
  const [productPizzaName, setProductPizzaName] = useState(0);
  const [productDescription, setProductDescription] = useState(0);
  const [productPizzaImg, setProductPizzaImg] = useState(0);


  const addPizzaToShoppingCar = () => {
    
  }
  
  
  const openPizzaModal =(open, prices, pizzaName, Description, pizzaImg)=>{
    setSelectPizzaModal(open);
    setProductPrice(prices);
    setProductPizzaName(pizzaName);
    setProductDescription(Description);
    setProductPizzaImg(pizzaImg);
  }
  return (
    <div className="menuBody">
      <div className="container">
        <Brand />
        <div className="shopping-car">
          <div className="box1">
            <i className="fas fa-angle-left"></i>
          </div>
          <div className="box2">
            <Link className="cartIcon_container">
              <img src={cart} alt="cart" />
            </Link>
          </div>
        </div>
      </div>
      <div className="menu-section">
        <div className="options">
          <ul>
            <li
              className={pizzaCategory === "ligeras" ? "categoryActive" : ""}
              onClick={() => setPizzaCategory("ligeras")}
            >
              <Link href="">Pizzas Ligeras</Link>
            </li>
            <li
              className={pizzaCategory === "combinadas" ? "categoryActive" : ""}
              onClick={() => setPizzaCategory("combinadas")}
            >
              <Link href="">Pizzas Combinadas</Link>
            </li>
            <li
              className={pizzaCategory === "especiales" ? "categoryActive" : ""}
              onClick={() => setPizzaCategory("especiales")}
            >
              <Link href="">Pizzas Especiales</Link>
            </li>
            <li
              className={pizzaCategory === "gourmet" ? "categoryActive" : ""}
              onClick={() => setPizzaCategory("gourmet")}
            >
              <Link href="">Pizzas Gourmet</Link>
            </li>
          </ul>
        </div>
        <div className="options-pizza">
          {pizzaCategory === "ligeras" &&
              pizzaPricesLigeras.map((pizzaLigeraItem)=>(
                <PizzaArticle 
                handleClick={openPizzaModal}
                pizzaName={pizzaLigeraItem.text}
                prices={pizzaLigeraItem}
                productDescription={pizzaLigeraItem.description} 
                pizzaImg={pizzaLigeraItem.pizzaImg}
                />
              ))
           }
          {pizzaCategory === "combinadas" &&
              pizzaPricesCombinadas.map((pizzaCombinadasItem)=>(
                <PizzaArticle 
                handleClick={openPizzaModal}
                pizzaName={pizzaCombinadasItem.text}
                prices={pizzaCombinadasItem}
                productDescription={pizzaCombinadasItem.description} 
                pizzaImg={pizzaCombinadasItem.pizzaImg}
                />
              ))
           }
          {pizzaCategory === "especiales" &&
              pizzaPricesEspeciales.map((pizzaEspecialesItem)=>(
                <PizzaArticle 
                handleClick={openPizzaModal}
                pizzaName={pizzaEspecialesItem.text}
                prices={pizzaEspecialesItem}
                productDescription={pizzaEspecialesItem.description} 
                pizzaImg={pizzaEspecialesItem.pizzaImg}
                />
              ))
           }
          {pizzaCategory === "gourmet" &&
              pizzaPricesGourmet.map((pizzaGourmetItem)=>(
                <PizzaArticle 
                handleClick={openPizzaModal}
                pizzaName={pizzaGourmetItem.text}
                prices={pizzaGourmetItem}
                productDescription={pizzaGourmetItem.description} 
                pizzaImg={pizzaGourmetItem.pizzaImg}
                />
              ))
           }
           <div className="spaceItemInvisble">
           </div>
        </div>
      </div>
      <div className="aditions-section">
        <div className="aditions-title">
          <h1>Adicionales</h1>
        </div>
        <div className="aditions-container">
          {pizzaBorder &&
              pizzaBorder.map((pizzaBordeItem)=>(
                <AdicionalArticle 
                adicionalName={pizzaBordeItem.text}
                adicionalprices={pizzaBordeItem.value.personal}
                adicionalDescription={pizzaBordeItem.description} 
                adicionalImg={pizzaBordeItem.borderImg}
                />
              ))
           }
        </div>
      </div>
      <div className="aditions-section">
        <div className="aditions-title">
          <h1>Bebidas</h1>
        </div>
        <div className="aditions-container">
          {drinks &&
              drinks.map((drinksItem)=>(
                <AdicionalArticle 
                adicionalName={drinksItem.text}
                adicionalprices={drinksItem.value}
                adicionalDescription="" 
                adicionalImg={drinksItem.imgDrink}
                />
              ))
           }
        </div>
      </div>

      {/* modals */}
      {selectPizzaModal && (
        <div className="overlay">
          <ModalSelectPizza 
          openModal={setSelectPizzaModal} 
          productPrice={productPrice}
          productPizzaName={productPizzaName}
          productDescription={productDescription}
          productPizzaImg={productPizzaImg}
          />
        </div>
      )}

      <MenuSideShoppingCar pizzaItemsChosen={pizzaItemsChosen}/>
    </div>
  );
}

export default Menu;
