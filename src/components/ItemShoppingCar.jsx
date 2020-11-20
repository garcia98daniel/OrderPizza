import React, { useState } from 'react';
import "./style/itemShoppingCar.css";
import closeIcon from '../img/closeIcon.png';
import pizza from '../img/pizza3.png';
import { Link } from 'react-router-dom';

function ItemShoppingCar({
  productName,
  pizzaImg, 
  productDescription, 
  totalProductPrice, 
  detailsProdutPrice, 
  detailsBorderProduct, 
  detailsDrinkName,
  detailsDrinkPrice, 
  detailsExtraChesePrice,
  observation}) {

  const [seeMoreDetails, setSeeMoreDetails] = useState(false);
    return (
          <div className="item">
            <img src={closeIcon} alt="close" className="closeIcon" onClick=""/>
            <img src={pizzaImg} alt="" />
            <div className="item-description">
              <h4>{productName}</h4>
              <p>
                {productDescription}
              </p>
              <h6>Adicionales</h6>
              {detailsBorderProduct > 0 && <small>Borde de queso</small> }
              {detailsDrinkPrice > 0 && <small>{detailsDrinkName}</small> }
              {detailsExtraChesePrice > 0 && <small>Extra queso</small> }
              <br/>

              {!seeMoreDetails ?
              <Link href="" onClick={() => setSeeMoreDetails(!seeMoreDetails)}>
                Ver mas detalles
              </Link>
              :
              <Link href="" onClick={() => setSeeMoreDetails(!seeMoreDetails)}>
                Ocultar
              </Link>
              }
              
              {seeMoreDetails && 
              <>
                <div className="colums_verMas">
                  <div className="first_colum_verMas">
                    <strong><small>Precio neto pizza</small></strong>
                    <strong><small>Precio neto borde</small></strong>
                    <strong><small>Precio bebida</small></strong>
                    <strong><small>Precio ex queso</small></strong>
                  </div>
                  <div className="second_colum_verMas">
                    <small><span>{detailsProdutPrice}</span></small>
                    <small><span>{detailsBorderProduct}</span></small>
                    <small><span>{detailsDrinkPrice}</span></small>
                    <small><span>{detailsExtraChesePrice}</span></small>
                  </div>
                </div>
                <p>{observation}</p>
              </>
              }
            </div>
            <div className="price">
              <i className="fas fa-times-circle"></i>
              <p>{totalProductPrice} COP</p>
            </div>
          </div>
    );
}

export default ItemShoppingCar;
