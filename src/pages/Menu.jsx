import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Brand from "../components/Brand";
import cart from "../img/cart.png";
import PizzaArticle from "../components/PizzaArticle";
import AdicionalArticle from "../components/AdicionalArticle";
import ModalSelectPizza from "../components/ModalSelectPizza";
import MenuSideShoppingCar from "../components/MenuSideShoppingCar";
import ModalOrderDone from "../components/ModalOrderDone";

import {pizzaPricesLigeras} from "../pizzaPricesData/pizzaPricesLigeras.js";
import {pizzaPricesCombinadas} from "../pizzaPricesData/pizzaPricesCombinadas.js";
import {pizzaPricesEspeciales} from "../pizzaPricesData/pizzaPricesEspeciales.js";
import {pizzaPricesGourmet} from "../pizzaPricesData/pizzaPricesGourmet.js";

import banerDomicilio from '../img/domicilios-gratis.png';

import "./style/menu.css";
import { pizzaBorder } from "../pizzaPricesData/pizzaBorder";
import { drinks } from "../pizzaPricesData/drinks";

function Menu(props) {
  const [pizzaCategory, setPizzaCategory] = useState("ligeras");
//order
  const [pizzaItemsChosen, setPizzaItemsChosen] = useState([]);

  //precios de las pizzas
  const [productPrice, setProductPrice] = useState(0);
  const [productPizzaName, setProductPizzaName] = useState(0);
  const [productDescription, setProductDescription] = useState(0);
  const [productPizzaImg, setProductPizzaImg] = useState(0);

  const [selectPizzaModal, setSelectPizzaModal] = useState(false);
  const [shoppingCarSwitchModal, setShoppingCarSwitchModal] = useState(false);

  const [makeOrder, setMakeOrder] = useState(false);

  const [finalOrder, setFinalOrder] = useState(
    {products: pizzaItemsChosen,
        wayToPay: '',
        change: 0,
        address: '',
        reference: '',
        price: pizzaItemsChosen.reduce((total, pizzaItem) => {
            return total + pizzaItem.price;
          }, 0),
        user: {
            name: '',
            phone_number: 0,
        }
      }
    );

  const openPizzaModal =(open, prices, pizzaName, Description, pizzaImg)=>{
    setSelectPizzaModal(open);
    setProductPrice(prices);
    setProductPizzaName(pizzaName);
    setProductDescription(Description);
    setProductPizzaImg(pizzaImg);
  }
  return (
    <div className="menuBody">
      <div className="domicilioBaner_container">
      <img src={banerDomicilio} alt=""/>
      <h1>En el perimetro <br/> urbano</h1>
      </div>
      <div className="container">
        <Brand />
        <div className="shopping-car" onClick={() => setShoppingCarSwitchModal(true)}>
          <div className="box1">
           
          </div>
          <div className="box2">
            <Link to="/menu" className="cartIcon_container">
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
              <Link to="/menu">Pizzas Ligeras</Link>
            </li>
            <li
              className={pizzaCategory === "combinadas" ? "categoryActive" : ""}
              onClick={() => setPizzaCategory("combinadas")}
            >
              <Link to="/menu">Pizzas Combinadas</Link>
            </li>
            <li
              className={pizzaCategory === "especiales" ? "categoryActive" : ""}
              onClick={() => setPizzaCategory("especiales")}
            >
              <Link to="/menu">Pizzas Especiales</Link>
            </li>
            <li
              className={pizzaCategory === "gourmet" ? "categoryActive" : ""}
              onClick={() => setPizzaCategory("gourmet")}
            >
              <Link to="/menu">Pizzas Gourmet</Link>
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
          setPizzaItemsChosen={setPizzaItemsChosen}
          pizzaItemsChosen={pizzaItemsChosen}
          productPrice={productPrice}
          productPizzaName={productPizzaName}
          productDescription={productDescription}
          productPizzaImg={productPizzaImg}
          />
        </div>
      )}
      {shoppingCarSwitchModal &&
        <MenuSideShoppingCar 
        pizzaItemsChosen={pizzaItemsChosen} 
        setPizzaItemsChosen={setPizzaItemsChosen}
        handleOpenModal={setShoppingCarSwitchModal}
        setMakeOrder={setMakeOrder}
        />
      }
      {makeOrder &&
        <ModalOrderDone
        setMakeOrder={setMakeOrder}
        pizzaItemsChosen={pizzaItemsChosen}
        finalOrder={finalOrder}
        setFinalOrder={setFinalOrder}
        />
      }
    </div>
  );
}

export default Menu;
