import React from 'react';
import "./style/pizzaArticle.css";
// import a from '../img/imgMenuPizzas/pizzaQueso.jpg'

function pizzaArticle({pizzaName,prices, productDescription, handleClick, pizzaImg}) {
  
    return (
        <article className="pizza-container" onClick={() => handleClick(true, prices, pizzaName, productDescription, pizzaImg)}>
            <img src={pizzaImg} alt="" />
            <div className="pizza-description">
              <div>
                <h4 className="pizza_tittle">
                  {/* <small>Personal</small> */}
                  {/* <h4 className="articule-name">  */}
                  {pizzaName}
                  {/* </h4> */}
                </h4>
                <p>
                  {productDescription}
                </p>
              </div>

              <button className="pizza-article-btn">
                Ordenar
              </button>
              {/* <h3 className="pizza-price">
                ${prices.value.personal}
              </h3> */}
            </div>
          </article>
    );
}

export default pizzaArticle;