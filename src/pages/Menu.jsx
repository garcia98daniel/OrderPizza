import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Brand from "../components/Brand";
import cart from "../img/cart.png";
import PizzaArticle from "../components/PizzaArticle";
import AdicionalArticle from "../components/AdicionalArticle";
import ModalSelectPizza from "../components/ModalSelectPizza";
import {pizzaPricesLigeras} from "../components/pizzaPricesData/pizzaPricesLigeras.js";
import {pizzaPricesCombinadas} from "../components/pizzaPricesData/pizzaPricesCombinadas.js";
import {pizzaPricesEspeciales} from "../components/pizzaPricesData/pizzaPricesEspeciales.js";
import {pizzaPricesGourmet} from "../components/pizzaPricesData/pizzaPricesGourmet.js";


import "./style/menu.css";

function Menu(props) {
  const [pizzaCategory, setPizzaCategory] = useState("ligeras");
  const [selectPizzaModal, setSelectPizzaModal] = useState(false);
  const [productPrice, setProductPrice] = useState(0);
  
  
  const openPizzaModal =(open, prices)=>{
    setSelectPizzaModal(open);
    setProductPrice(prices);
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
              
              <PizzaArticle 
              handleClick={openPizzaModal}
              prices={pizzaPricesLigeras[0]}
              productDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ad? Similique perferendis facilis ullam eaque repudiandae."} 

           />}
          {pizzaCategory === "combinadas" &&
              
              <PizzaArticle 
              handleClick={openPizzaModal}
              prices={pizzaPricesCombinadas[1]}
              productDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ad? Similique perferendis facilis ullam eaque repudiandae."} 
           
           />}
          {pizzaCategory === "especiales" &&
              
              <PizzaArticle 
              handleClick={openPizzaModal}
              prices={pizzaPricesEspeciales[2]}
              productDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ad? Similique perferendis facilis ullam eaque repudiandae."} 
           
           />}
          {pizzaCategory === "gourmet" &&
              
              <PizzaArticle 
              handleClick={openPizzaModal}
              prices={pizzaPricesGourmet[3]}
              productDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ad? Similique perferendis facilis ullam eaque repudiandae."} 
           
           />}
        </div>
      </div>
      <div className="aditions-section">
        <div className="aditions-title">
          <h1>Adicionales</h1>
        </div>
        <div className="aditions-container">
          <AdicionalArticle />
        </div>
      </div>
      <div className="aditions-section">
        <div className="aditions-title">
          <h1>Bebidas</h1>
        </div>
        <div className="aditions-container">
          <AdicionalArticle />
        </div>
      </div>

      {/* modals */}
      {selectPizzaModal && (
        <div className="overlay">
          <ModalSelectPizza openModal={setSelectPizzaModal} productPrice={productPrice}/>
        </div>
      )}

      <div className="overlay-two">
        <div className="make-order">
          <div className="items">
            <div className="item">
              <img src="/images/Pizza.png" alt="" />
              <div className="item-description">
                <h4>Amigera</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet sit eos at, magnam debitis ea.
                </p>
                <a href="">
                  <p>Lorem ipsum dolor sit amet.</p>
                </a>
              </div>
              <div className="price">
                <i className="fas fa-times-circle"></i>
                <p>16000 COP</p>
              </div>
            </div>
            <div className="item">
              <img src="/images/Pizza.png" alt="" />
              <div className="item-description">
                <h4>Amigera</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Eveniet sit eos at, magnam debitis ea.
                </p>
                <a href="">
                  <p>Lorem ipsum dolor sit amet.</p>
                </a>
              </div>
              <div className="price">
                <i className="fas fa-times-circle"></i>
                <p>16000 COP</p>
              </div>
            </div>
          </div>
          <div className="make-order-button">
            <div className="order-resume">
              <p>2 Items</p>
              <h4>34000 COP</h4>
            </div>
            <button>Realizar Pedido</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
