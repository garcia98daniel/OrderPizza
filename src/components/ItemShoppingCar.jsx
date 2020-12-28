import React, { useState } from 'react';
import "./style/itemShoppingCar.css";
import trash from '../img/trash.png';
import { Link } from 'react-router-dom';

function ItemShoppingCar({
  handleDeletePizzaItemsChosen,
  id,
  totalProductPrice,
  pizzaImg,
  productDescription,

  detailPizzaPrice,
  detailBordePrice,
  detailIngredientPrice,
  detailDrinkPrice,
  detailExtraCheesePrice,

  quantity,
  productName,
  size,
  observation,

  aditionalBordeName,
  aditionalIngredientName,
  aditionalDrinkName,
  aditionalExtraCheeseName,
}) {

  const [seeMoreDetails, setSeeMoreDetails] = useState(false);

  
    return (
          <div className="item">
            <img src={trash} alt="trash" className="closeIcon" onClick={() => handleDeletePizzaItemsChosen(id)}/>
            <div className="img_size_container">
              <h4>Pizza {productName}</h4>
              <img src={pizzaImg} alt="" />
              <h3>Cantidad <small>x</small>{quantity}</h3>
            </div>
            <div className="item-description">
              <h4>{size}</h4>
              <p>
                {productDescription}
              </p>
              <strong>Adicionales x unidad</strong>
              {aditionalBordeName !== 'Bordes' ? <small>{aditionalBordeName}</small>:'' }
              {aditionalIngredientName !== 'Ingredientes' ? <small>{aditionalIngredientName}</small>: ''}
              {aditionalDrinkName !== 'Bebidas' ? <small>{aditionalDrinkName}</small>:'' }
              {aditionalExtraCheeseName ==='Extra queso' ? <small>{aditionalExtraCheeseName}</small>:''}
              <br/>

              {seeMoreDetails ?
              <Link to="/menu" onClick={()=> setSeeMoreDetails(!seeMoreDetails)}>
                Ocultar
              </Link>
              :
              <Link to="/menu" onClick={()=> setSeeMoreDetails(!seeMoreDetails)}>
                Ver mas detalles
              </Link>
              }
              
              {seeMoreDetails &&  
              <>
                <div className="colums_verMas">
                  <div className="first_colum_verMas">
                  {detailPizzaPrice > 0 &&
                   <><strong><small>Precio neto pizza</small></strong>
                   <small><span>{detailPizzaPrice}</span></small> </>}  
                  {detailBordePrice > 0 &&
                   <><strong><small>Precio neto borde</small></strong>
                   <small><span>{detailBordePrice}</span></small></>}  
                  {detailIngredientPrice > 0 &&
                   <><strong><small>Precio neto ingrediente</small></strong>
                   <small><span>{detailIngredientPrice}</span></small></>}  
                  {detailDrinkPrice > 0 &&
                   <><strong><small>Precio bebida</small></strong>
                   <small><span>{detailDrinkPrice}</span></small></>}  
                  {detailExtraCheesePrice > 0 &&
                   <><strong><small>Precio ex queso</small></strong>
                   <small><span>{detailExtraCheesePrice}</span></small></>}  
                  </div>

                  {/* <div className="second_colum_verMas">
                  {detailPizzaPrice > 0 &&
                   <small><span>{detailPizzaPrice}</span></small>}
                  {detailBordePrice > 0 &&
                   <small><span>{detailBordePrice}</span></small>}  
                  {detailIngredientPrice > 0 &&
                   <small><span>{detailIngredientPrice}</span></small>}  
                  {detailDrinkPrice > 0 &&
                   <small><span>{detailDrinkPrice}</span></small>}  
                  {detailExtraCheesePrice > 0 &&
                   <small><span>{detailExtraCheesePrice}</span></small>} 
                    
                  </div> */}
                </div>
              </>
              }
                <br/>
                <div className="observation_container">
                  <h3>Observación</h3>
                  <h6>{observation}</h6>
                </div>

            </div>
            <div className="price">
              <p>{totalProductPrice} COP</p>
            </div>
          </div>
    );
}

export default ItemShoppingCar;
