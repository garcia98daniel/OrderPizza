import React from 'react';
import "./style/pizzaArticle.css";


function pizzaArticle({pizzaName,prices, productDescription, handleClick, pizzaImg}) {
  
    return (
        <article class="pizza-container" onClick={() => handleClick(true, prices)}>
            <div class="pizza-description">
              <h3>{prices.value.personal}k {pizzaName}</h3>
              <p>
                {productDescription}
              </p>
            </div>
            <img src={pizzaImg} alt="" />
          </article>
    );
}

export default pizzaArticle;