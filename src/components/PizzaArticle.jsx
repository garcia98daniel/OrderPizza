import React from 'react';
import "./style/pizzaArticle.css";
import pizza from '../img/pizza3.png';


function pizzaArticle({prices, productDescription, handleClick}) {
  
    return (
        <article class="pizza-container" onClick={() => handleClick(true, prices)}>
            <div class="pizza-description">
              <h3>{prices.value.personal}k amigera</h3>
              <p>
                {productDescription}
              </p>
            </div>
            <img src={pizza} alt="" />
          </article>
    );
}

export default pizzaArticle;