import React from "react";
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
import cart from "../img/cart.png";

function index(props) {
  return (
    <>
      <section className="hero">
        <div className="index_wrapper">
          <nav className="navBarIndex">
            <h1 className="brand">ENTRE AMIGOS</h1>
            <div className="navigationsItems">
              <Link>INICIO</Link>
              <Link>MENU</Link>
              <Link>NOSOTROS</Link>
              <Link>CONTACTANOS</Link>
              <Link className="cartIcon_container">
                <img src={cart} alt="cart" />
              </Link>
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
            <Link className="btn_menu">Menu</Link>
          </div>
        </div>
      </section>
      <section className="ourHistory">
        <div className="index_wrapper">
          <div className="ourHistoryWords_container">
            <h1 className="ourHistory_mainWords">Descubre</h1>
            <h1>Nuestra historia</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              deserunt minus, voluptatum ullam, libero eos dignissimos tenetur,
              incidunt eveniet molestias esse? Explicabo nulla tenetur molestias
              ullam voluptate at temporibus ipsum?
            </p>
          </div>
          <img className="imgSectionOurHistory" src={especias} alt="image" />
        </div>
      </section>
      <section className="enjoyPizza">
        <div className="index_wrapper">
          <div className="enjoy_words_container">
            <h1>Disfruta</h1>
            <h2>NUESTRAS RECETAS</h2>
          </div>
        </div>
      </section>
      <section className="menu">
        <div className="index_wrapper">
          <div className="menu_section_tittle">MENU</div>
          <div className="arrows_img_container">
            <img className="arrow left" src={arrow} alt="img_arrow" />
            <div className="img_menuSection_container">
              <img className="img_menuSection" src={pizza1} alt="img_pizza" />
              <img className="img_menuSection" src={pizza2} alt="img_pizza" />
              <img className="img_menuSection" src={pizza3} alt="img_pizza" />
              <img className="img_menuSection" src={pizza3} alt="img_pizza" />
              <img className="img_menuSection" src={pizza3} alt="img_pizza" />
            </div>
            <img className="arrow right" src={arrow} alt="img_arrow" />
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            ipsam sint ab! Sapiente nesciunt magnam facilis officia aperiam
            officiis Quidem ipsam sint ab! Sapiente nesciunt magnam facilis
            officia aperiam officiis.
          </p>
          <Link to="/menu">FULL MENU</Link>
        </div>
      </section>
      <footer>
        <div className="index_wrapper">
          <div className="footer_arrow_up">
            <img className="arrow_up" src={whiteArrow} alt="" />
          </div>
          <div className="footer_text_container">
            <h1 className="contactTxt">Contactanos</h1>
            <span>*</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              corporis numquam velit? Aliquid reiciendis non iusto perferendis
              praesentium itaque nulla placeat nihil iste! Ab tempora autem
              doloribus reiciendis cum ullam.
            </p>
          </div>
          <div className="footer_section2">
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
                    src={fb_icon}
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
