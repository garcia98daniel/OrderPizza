import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/index.css";
import especias from "../img/especias.png";
import pizza1 from "../img/pizza1.png";
import pizza2 from "../img/pizza2.png";
import pizza3 from "../img/pizza3.png";
import arrow from "../img/arrow.png";
import whiteArrow from "../img/white_arrow.png";
import fb_icon from "../img/fb.png";
import ig_icon from "../img/ig.png";
import wa_icon from "../img/wa.png";
import cart from "../img/cart.png";

function index(props) {

  const scrollingWithButton = (direction) => {
    let scrollDiv = document.querySelector(".img_menuSection_container");
    scrollDiv.scrollLeft += direction;
  } 

  return (
    <>
      <section className="hero">
        <div className="heroImg"></div>
        <div className="index_wrapper">
          <nav className="navBarIndex">
            <h1 className="brand">ENTRE AMIGOS</h1>
            <div className="navigationsItems">
              <Link>INICIO</Link>
              <a href="#menu"> MENU</a>
              <a href="#ourHistory">NOSOTROS</a>
              <a href="#footer">CONTACTANOS</a>
            </div>
          </nav>

          <div className="mainWords">
            <h1 className="welcomeTxt">Bienbenidos</h1>
            <h1 className="entreAmigostxt">ENTRE AMIGOS</h1>
            <div className="star_container">
              <div className="stripeIndex"></div>
              <div className="star">⭐</div>
              <div className="stripeIndex"></div>
            </div>
            <div className="frace">Deliciosamente saludabe!</div>
            <a href="#menu" className="btn_menu">Menu</a>
          </div>
        </div>
      </section>
      <section className="ourHistory" id="ourHistory">
        <div className="index_wrapper">
          <div className="ourHistoryWords_container">
            <h1 className="ourHistory_mainWords">Descubre</h1>
            <h1>Nuestra filosofía</h1>
            <p>
              Nuestras pizzas deben llevar ingredientes frescos del campo
              Colombiano de nuestra región Caribe, deben ser seleccionados
              personalmente y cortadas a mano, cuidando cada detalle, en
              especial la higiene de nuestra cocina y herramientas, para
              garantizar no solamente una pizza de buena calidad y gran sabor,
              si no totalmente inocua!
            </p>
          </div>
          <img className="imgSectionOurHistory" src={especias} alt="image" />
        </div>
      </section>
      <section className="enjoyPizza">
        <div className="enjoyPizzaImg"></div>
        <div className="index_wrapper">
          <div className="enjoy_words_container">
            <h1>Disfruta</h1>
            <h2>NUESTRAS RECETAS</h2>
          </div>
        </div>
      </section>
      <section className="menu" name="menu" id="menu">
        <div className="index_wrapper">
          <div className="menu_section_tittle">MENU</div>
          <div className="arrows_img_container">
            <img className="arrow left" src={arrow} alt="img_arrow" onClick={() => scrollingWithButton(-250)}/>
            <div className="img_menuSection_container">
              <img className="img_menuSection" src={pizza1} alt="img_pizza" />
              <img className="img_menuSection" src={pizza2} alt="img_pizza" />
              <img className="img_menuSection" src={pizza3} alt="img_pizza" />
              <img className="img_menuSection" src={pizza3} alt="img_pizza" />
              <img className="img_menuSection" src={pizza3} alt="img_pizza" />
            </div>
            <img className="arrow right" src={arrow} alt="img_arrow" onClick={() => scrollingWithButton(250)}/>
          </div>
          <p>
            Lograr la satisfacción de nuestros clientes, con una pizza artesanal
            vegetariana de excelente calidad y extraordinario sabor.
          </p>
          <Link to="/menu">FULL MENU</Link>
        </div>
      </section>
      <footer id="footer">
        <div className="index_wrapper">
          <div className="footer_arrow_up">
            <img className="arrow_up" src={whiteArrow} alt="" />
          </div>
          <div className="footer_text_container">
            <h1 className="contactTxt">Contactanos</h1>
            <span>*</span>
            <p>
              La dieta carnívora, además de la crueldad con los animales, supone
              un despilfarro de recursos naturales, genera un gran impacto
              ambiental y más cambio climático, unetenos.
            </p>
          </div>
          <div className="footer_section2" >
            <div className="followUs">
              <h2>SIGUENOS</h2>
              <div className="socialMedia">
                <Link>
                  <img
                    className="socialMedia_icon wa"
                    src={fb_icon}
                    alt="socialM_icon"
                  />
                </Link>
                <Link>
                  <img
                    className="socialMedia_icon fb"
                    src={ig_icon}
                    alt="socialM_icon"
                  />
                </Link>
                <Link>
                  <img
                    className="socialMedia_icon ig"
                    src={wa_icon}
                    alt="socialM_icon"
                  />
                </Link>
              </div>
            </div>
            <div className="contactUs">
              <h2>SUGERENCIAS</h2>
              <input type="text" placeholder="Email" />
              <textarea
                placeholder="Dejanos tu mensaje"
                name="txtArea"
                id=""
                cols="20"
                rows="8"
              ></textarea>
              <button>Enviar</button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default index;
