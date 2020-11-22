import React from 'react';
import "./style/pizzaArticle.css";
import a from '../img/imgMenuPizzas/pizzaQueso.jpg'

function pizzaArticle({pizzaName,prices, productDescription, handleClick, pizzaImg}) {
  
    return (
        <article class="pizza-container" onClick={() => handleClick(true, prices, pizzaName, productDescription, pizzaImg)}>
            <div class="pizza-description">
            <div className="pizza_tittle">
              <h3>{pizzaName}</h3>
              <h3>{prices.value.personal+4000} COP</h3>
            </div>
              <p>
                {productDescription}
              </p>
            </div>
            <img src={pizzaImg} alt="" />
          </article>
    );
}

export default pizzaArticle;