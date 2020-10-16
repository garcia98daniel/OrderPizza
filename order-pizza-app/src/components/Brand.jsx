import React from "react";
import "./style/brand.css";
import PizzaLogo from "./PizzaLogo";

function Brand(props) {
  return (
    <div className="title-container">
      <div className="title">
        <h1>ENTRE AMIGOS</h1>
        <h2>Menu</h2>
      </div>
      <PizzaLogo/>
    </div>
  );
}

export default Brand;
