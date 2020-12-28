import React from 'react';
import { Link } from 'react-router-dom';
import "./style/navbar.css";
// import PizzaLogo from "./PizzaLogo";

function Navbar(props) {
    return (
        <div className="navbar">
            <Link to="/admin/pedidos">
                PEDIDOS <div className="navbar_pizzaLogoLink"></div>
            </Link>
            <Link to="/admin/historial-pedidos">
                HISTORIAL <div className="navbar_pizzaLogoLink"></div>
            </Link>
            {/* <Link to="/admin/pedidos">
                PEDIDOS <div className="navbar_pizzaLogoLink"><PizzaLogo/></div>
            </Link>
            <Link to="/admin/historial-pedidos">
                HISTORIAL <div className="navbar_pizzaLogoLink"><PizzaLogo/></div>
            </Link> */}
        </div>
    );
}

export default Navbar;