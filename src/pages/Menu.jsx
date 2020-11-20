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


import "./style/menu.css";

function Menu(props) {
  const [pizzaCategory, setPizzaCategory] = useState("ligeras");
  const [selectPizzaModal, setSelectPizzaModal] = useState(false);
  const [productPrice, setProductPrice] = useState(0);

  const [pizzaItemsChosen, setPizzaItemsChosen] = useState()


  const addPizzaToShoppingCar = () => {
    
  }
  
  
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
              
              <PizzaArticle 
              handleClick={openPizzaModal}
              prices={pizzaPricesCombinadas[1]}
              productDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ad? Similique perferendis facilis ullam eaque repudiandae."} 
              imgPizza={pizza}
           />
           }
          {pizzaCategory === "especiales" &&
              
              <PizzaArticle 
              handleClick={openPizzaModal}
              prices={pizzaPricesEspeciales[2]}
              productDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ad? Similique perferendis facilis ullam eaque repudiandae."} 
              imgPizza={pizza}
           />
           }
          {pizzaCategory === "gourmet" &&
              
              <PizzaArticle 
              handleClick={openPizzaModal}
              prices={pizzaPricesGourmet[3]}
              productDescription={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ad? Similique perferendis facilis ullam eaque repudiandae."} 
              imgPizza={pizza}
           />
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

      <MenuSideShoppingCar pizzaItemsChosen={pizzaItemsChosen}/>
    </div>
  );
}

export default Menu;
