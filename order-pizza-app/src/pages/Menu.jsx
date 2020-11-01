import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style/menu.css";

function Menu(props) {
  return (
    <>
      <div class="container">
        <div class="title-container">
          <div class="title">
            <h1>ENTRE AMIGOS</h1>
            <h2>Menu</h2>
          </div>
          <div class="pizza-logo">
            <div class="pizza-cut"></div>
            <div class="pizza-cut"></div>
            <div class="jam"></div>
            <div class="jam"></div>
            <div class="jam"></div>
            <div class="jam"></div>
            <div class="jam"></div>
            <div class="jam"></div>
            <div class="jam"></div>
            <div class="jam"></div>
          </div>
        </div>
        <a href="">
          <div class="shopping-car">
            <div class="box1">
              <i class="fas fa-angle-left"></i>
            </div>
            <div class="box2">
              <i class="fas fa-shopping-cart"></i>
            </div>
          </div>
        </a>
      </div>
      <div class="menu-section">
        <div class="options">
          <ul>
            <li>
              <a href="">Option 1</a>
            </li>
            <li>
              <a href="">Option 2</a>
            </li>
            <li>
              <a href="">Option 3</a>
            </li>
            <li>
              <a href="">Option 4</a>
            </li>
            <li>
              <a href="">Option 5</a>
            </li>
            <li>
              <a href="">Option 6</a>
            </li>
          </ul>
        </div>
        <div class="options-pizza">
          <article class="pizza-container">
            <div class="pizza-description">
              <h3>18k amigera</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                ad? Similique perferendis facilis ullam eaque repudiandae.
              </p>
            </div>
            <img src="/images/Pizza.png" alt="" />
          </article>
          <article class="pizza-container">
            <div class="pizza-description">
              <h3>18k amigera</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                ad? Similique perferendis facilis ullam eaque repudiandae.
              </p>
            </div>
            <img src="/images/Pizza.png" alt="" />
          </article>
          <article class="pizza-container">
            <div class="pizza-description">
              <h3>18k amigera</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                ad? Similique perferendis facilis ullam eaque repudiandae.
              </p>
            </div>
            <img src="/images/Pizza.png" alt="" />
          </article>
          <article class="pizza-container">
            <div class="pizza-description">
              <h3>18k amigera</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                ad? Similique perferendis facilis ullam eaque repudiandae.
              </p>
            </div>
            <img src="/images/Pizza.png" alt="" />
          </article>
          <article class="pizza-container">
            <div class="pizza-description">
              <h3>18k amigera</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                ad? Similique perferendis facilis ullam eaque repudiandae.
              </p>
            </div>
            <img src="/images/Pizza.png" alt="" />
          </article>
          <article class="pizza-container">
            <div class="pizza-description">
              <h3>18k amigera</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                ad? Similique perferendis facilis ullam eaque repudiandae.
              </p>
            </div>
            <img src="/images/Pizza.png" alt="" />
          </article>
        </div>
      </div>
      <div class="aditions-section">
        <div class="aditions-title">
          <h1>Adicionales</h1>
        </div>
        <div class="aditions-container">
          <div class="adition-container">
            <div class="adition-text">
              <h3>3k borde de queso</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                reprehenderit labore hic iusto, accusantium
              </p>
            </div>
            <img src="/images/Pizza-adition.png" alt="" />
          </div>
          <div class="adition-container">
            <div class="adition-text">
              <h3>3k borde de queso</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                reprehenderit labore hic iusto, accusantium
              </p>
            </div>
            <img src="/images/Pizza-adition.png" alt="" />
          </div>
          <div class="adition-container">
            <div class="adition-text">
              <h3>3k borde de queso</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                reprehenderit labore hic iusto, accusantium
              </p>
            </div>
            <img src="/images/Pizza-adition.png" alt="" />
          </div>
          <div class="adition-container">
            <div class="adition-text">
              <h3>3k borde de queso</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                reprehenderit labore hic iusto, accusantium
              </p>
            </div>
            <img src="/images/Pizza-adition.png" alt="" />
          </div>
        </div>
      </div>
      <div class="aditions-section">
        <div class="aditions-title">
          <h1>Bebidas</h1>
        </div>
        <div class="aditions-container">
          <div class="adition-container">
            <div class="adition-text">
              <h3>Gaseosa</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                reprehenderit labore hic iusto, accusantium
              </p>
            </div>
            <img src="/images/Coca.jpg" alt="" />
          </div>
          <div class="adition-container">
            <div class="adition-text">
              <h3>postobon</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                reprehenderit labore hic iusto, accusantium
              </p>
            </div>
            <img src="/images/Coca.jpg" alt="" />
          </div>
          <div class="adition-container">
            <div class="adition-text">
              <h3>Cocacola</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                reprehenderit labore hic iusto, accusantium
              </p>
            </div>
            <img src="/images/Coca.jpg" alt="" />
          </div>
          <div class="adition-container">
            <div class="adition-text">
              <h3>3k borde de queso</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                reprehenderit labore hic iusto, accusantium
              </p>
            </div>
            <img src="/images/Pizza-adition.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
