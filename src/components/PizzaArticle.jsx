import React from 'react';
import "./style/pizzaArticle.css";
import a from '../img/imgMenuPizzas/pizzaQueso.jpg'

function pizzaArticle({pizzaName,prices, productDescription, handleClick, pizzaImg}) {
  
    return (
        <article className="pizza-container" onClick={() => handleClick(true, prices, pizzaName, productDescription, pizzaImg)}>
            <div className="pizza-description">
              <div className="pizza_tittle">
                <small>Personal</small>
                <h3> {pizzaName}</h3>
              </div>
              <h3><small>Desde</small> {prices.value.personal} COP</h3>
              <p>
                {productDescription}
              </p>
            </div>
            <img src={pizzaImg} alt="" />
          </article>
    );
}

export default pizzaArticle;