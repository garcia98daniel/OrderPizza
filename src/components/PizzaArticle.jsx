import React from 'react';
import "./style/pizzaArticle.css";
import pizza from '../img/pizza3.png';


function pizzaArticle(props) {
  
    return (
        <article class="pizza-container" onClick={() => props.openModal(true)}>
            <div class="pizza-description">
              <h3>18k amigera</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui,
                ad? Similique perferendis facilis ullam eaque repudiandae.
              </p>
            </div>
            <img src={pizza} alt="" />
          </article>
    );
}

export default pizzaArticle;