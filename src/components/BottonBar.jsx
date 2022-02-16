import './style/BottonBar.css';
import React, {useState} from 'react';  
import cart from "../img/cart.png";
import whatsapp from "../img/wa.png"
import home from "../img/home.png"
import {Link} from "react-router-dom";

function BottonBar({shoppingCarSwitchModal, pizzaItemsChosen, handlerOpenCloseShoppingcart}) {

    return (
        <div className="BottonBar">
            <Link to="/">
            <i className="botton_icons">
                    <img src={home} alt="" />
            </i>
            </Link>

            <i className="circule_btn" onClick={() => handlerOpenCloseShoppingcart(!shoppingCarSwitchModal)}>
                { pizzaItemsChosen.length > 0 ? <span>{pizzaItemsChosen.length}</span>: ''}
                {/* {addedProducts.length > 0 ? <span>{addedProducts.length}</span>: ''} */}
                <img src={cart} alt="me" width="25px" height="25px" />
            </i>
            <a href="https://wa.me/+573226625142?text=Hola, Necesito ayuda con mi pedido">
                <i className="botton_icons">
                    <img src={whatsapp} alt="" />
                </i>
            </a>
        </div>
    );
}

export default BottonBar;