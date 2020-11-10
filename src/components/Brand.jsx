import React from "react";
import "./style/brand.css";
import PizzaLogo from "./PizzaLogo";
import logoEntreAmigos from "../img/logoEntreAmigos.png"
function Brand(props) {
  return (
    <div className="title-container">
      <div className="title">
        <div className="tittleLetter_container">
          <h1>ENTRE AMIGOS</h1>
          <h2>Menu</h2>
        </div>
        <img src={logoEntreAmigos} alt="" className="logo"/>
      </div>
      
      {/* <PizzaLogo/> */}
    </div>
  );
}

export default Brand;
