import React from 'react';
import "./style/pizzaArticle.css";


function pizzaArticle({prices, productDescription, handleClick, imgPizza}) {
  
    return (
        <article class="pizza-container" onClick={() => handleClick(true, prices)}>
            <div class="pizza-description">
              <h3>{prices.value.personal}k amigera</h3>
              <p>
                {productDescription}
              </p>
            </div>
            <img src={imgPizza} alt="" />
          </article>
    );
}

export default pizzaArticle;