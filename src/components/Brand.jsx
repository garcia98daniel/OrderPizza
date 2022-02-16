import React from "react";
import "./style/brand.css";
// import PizzaLogo from "./PizzaLogo";
import {Link} from "react-router-dom";
import logoEntreAmigos from "../img/entre_amigos2022.jpeg"
function Brand({page, link}) {
  return (
    <div className="title-container">
      <div className="title">
        <div className="tittleLetter_container">
        <Link to={link}>
          <h1>ENTRE AMIGOS</h1>
          <h2>{page}</h2>
        </Link>
        </div>
        <Link to={link}>
          <img src={logoEntreAmigos} alt="" className="logo"/>
        </Link>
      </div>
      
      {/* <PizzaLogo/> */}
    </div>
  );
}

export default Brand;
