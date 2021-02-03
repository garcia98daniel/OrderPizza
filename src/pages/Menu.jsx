import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Brand from "../components/Brand";
import cart from "../img/cart.png";
import PizzaArticle from "../components/PizzaArticle";
import AdicionalArticle from "../components/AdicionalArticle";
import ModalSelectPizza from "../components/ModalSelectPizza";
import MenuSideShoppingCar from "../components/MenuSideShoppingCar";
import ModalOrderDone from "../components/ModalOrderDone";

// import {pizzaPricesLigeras} from "../pizzaPricesData/pizzaPricesLigeras.js";
// import {pizzaPricesCombinadas} from "../pizzaPricesData/pizzaPricesCombinadas.js";
// import {pizzaPricesEspeciales} from "../pizzaPricesData/pizzaPricesEspeciales.js";
// import {pizzaPricesGourmet} from "../pizzaPricesData/pizzaPricesGourmet.js";

import {pizzaPricesClasicas} from "../pizzaPricesData/pizzaPricesClasicas.js";
import {pizzaPricesCombinadas} from "../pizzaPricesData/pizzaPricesCombinadas.js";
import {pizzaPricesClasicasVegetarianas} from "../pizzaPricesData/pizzaPricesClasicasVegetarianas.js";
import {pizzaPricesCombinadasVegetarianas} from "../pizzaPricesData/pizzaPricesCombinadasVegetarianas.js";

// import banerDomicilio from '../img/domicilios-gratis.png';

import "./style/menu.css";
import { pizzaBorder } from "../pizzaPricesData/pizzaBorder";
import { drinks } from "../pizzaPricesData/drinks";

function Menu(props) {
  const [pizzaCategory, setPizzaCategory] = useState("clasicas");
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



  const openPizzaModal =(open, prices, pizzaName, Description, pizzaImg)=>{
    setSelectPizzaModal(open);
    setProductPrice(prices);
    setProductPizzaName(pizzaName);
    setProductDescription(Description);
    setProductPizzaImg(pizzaImg);
  }
  return (
    <div className="menuBody">
      {/* <div className="domicilioBaner_container">
      <img src={banerDomicilio} alt=""/>
      <h1>En el perimetro <br/> urbano</h1>
      </div> */}
      <div className="container">
        <Brand page={"Menu"} link={"/"}/>
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
              className={pizzaCategory === "clasicas" ? "categoryActive" : ""}
              onClick={() => setPizzaCategory("clasicas")}
            >
              <Link to="/menu">Pizzas clasicas</Link>
            </li>
            <li
              className={pizzaCategory === "combinadas" ? "categoryActive" : ""}
              onClick={() => setPizzaCategory("combinadas")}
            >
              <Link to="/menu">Pizzas Combinadas</Link>
            </li>
            {/* <li
              className={pizzaCategory === "clasicas vegetarianas" ? "categoryActive" : ""}
              onClick={() => setPizzaCategory("clasicas vegetarianas")}
            >
              <Link to="/menu">Pizzas clasicas vegetarianas</Link>
            </li> */}
            <li
              className={pizzaCategory === "Combinadas vegetarianas" ? "categoryActive" : ""}
              onClick={() => setPizzaCategory("Combinadas vegetarianas")}
            >
              <Link to="/menu">Pizzas vegetarianas</Link>
            </li>
          </ul>
        </div>
        <div className="options-pizza">
          {pizzaCategory === "clasicas" &&
              pizzaPricesClasicas.map((pizzaItem)=>(
                <PizzaArticle 
                handleClick={openPizzaModal}
                pizzaName={pizzaItem.text}
                prices={pizzaItem}
                productDescription={pizzaItem.description} 
                pizzaImg={pizzaItem.pizzaImg}
                />
              ))
           }
          {pizzaCategory === "combinadas" &&
              pizzaPricesCombinadas.map((pizzaItem)=>(
                <PizzaArticle 
                handleClick={openPizzaModal}
                pizzaName={pizzaItem.text}
                prices={pizzaItem}
                productDescription={pizzaItem.description} 
                pizzaImg={pizzaItem.pizzaImg}
                />
              ))
           }
          {/* {pizzaCategory === "clasicas vegetarianas" &&
              pizzaPricesClasicasVegetarianas.map((pizzaItem)=>(
                <PizzaArticle 
                handleClick={openPizzaModal}
                pizzaName={pizzaItem.text}
                prices={pizzaItem}
                productDescription={pizzaItem.description} 
                pizzaImg={pizzaItem.pizzaImg}
                />
              ))
           } */}
          {pizzaCategory === "Combinadas vegetarianas" &&
              pizzaPricesCombinadasVegetarianas.map((pizzaItem)=>(
                <PizzaArticle 
                handleClick={openPizzaModal}
                pizzaName={pizzaItem.text}
                prices={pizzaItem}
                productDescription={pizzaItem.description} 
                pizzaImg={pizzaItem.pizzaImg}
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
          <ModalSelectPizza 
          openModal={setSelectPizzaModal} 
          setPizzaItemsChosen={setPizzaItemsChosen}
          pizzaItemsChosen={pizzaItemsChosen}
          productPrice={productPrice}
          productPizzaName={productPizzaName}
          productDescription={productDescription}
          productPizzaImg={productPizzaImg}
          />
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
        handleOpenModal={setShoppingCarSwitchModal}
        setPizzaItemsChosen={setPizzaItemsChosen}
        />
      }
    </div>
  );
}

export default Menu;
