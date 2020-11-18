import React, {useState, useEffect} from 'react';
import "./style/modalSelectPizza.css";
import closeIcon from '../img/closeIcon.png';
import plusIcon from '../img/plusIcon.png';
import pizza3 from '../img/pizza3.png';
import plusIconSvg from '../img/plusIconSvg.svg';
import {pizzaBorder} from "./pizzaPricesData/pizzaBorder.js";
import {extraQueso} from "../components/pizzaPricesData/extraQueso.js";
import {pizzaIngredients} from "../components/pizzaPricesData/pizzaIngredients.js";
import {drinks} from "../components/pizzaPricesData/drinks.js";



function ModalSelectPizza({openModal, productPrice}) {
    const [quantity, setQuantity] = useState(1);
    const [size, setZise] = useState("Personal");
    const [pizzaEdge, setPizzaEdge] = useState("Bordes");
    const [pizzaExtraQueso, setPizzaExtraQueso] = useState(false);
    const [drink, setDrink] = useState("Bebidas");
    const [ingredient, setIngredient] = useState("Ingrediente");
    const [observation, setObservation] = useState("");
    const [totalProductPrice, setTotalProductPrice] = useState(0);


    const handleProductQuantity = (number) =>{
      if(quantity + number < 1){
        setQuantity(1);
      }else{
        setQuantity(quantity + number);
      }
    }

    const TotalPrice = () => {
      let onlyProductPrice;
      if(size === 'Personal'){
        onlyProductPrice = productPrice.value.personal;
      } else if(size === 'Pequeña'){
        onlyProductPrice = productPrice.value.pequeña;
      } else if(size === 'Mediana'){
        onlyProductPrice = productPrice.value.mediana;
      }else if(size === 'Grande'){
        onlyProductPrice = productPrice.value.grande;
      }
      
      setTotalProductPrice(onlyProductPrice * quantity);
    }

    useEffect(() => {
      TotalPrice();
    });
    
    return (
        <div className="order-popup">
            <img src={closeIcon} alt="close" className="closeIcon" onClick={() => openModal(false)}/>

        <div className="order-information">
          <article className="pizza-visual-description">
            <h1>Amigera</h1>
            <p>
              ingredients: Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Facere, voluptatibus?
            </p>
            <img src={pizza3} alt="" />
            <h4>Tamaño</h4>
          </article>
          <div className="pizza-caracteristics">
            <h3>Adicionales</h3>
            <form action="">
              <label for="border"></label>
              <select name="border" id="border" className="input-select" value={pizzaEdge} onChange={(e)=>setPizzaEdge(e.target.value)}>
                <option value="" selected >Bordes</option>
                {pizzaBorder.map((borde)=>(
                <option value="" >{borde.text}</option>
                ))}
              </select>
            </form>
            <form action="">
              <label for="ingredients"></label>
              <select name="ingredients" id="ingredients" className="input-select" value={ingredient} onChange={(e)=>setIngredient(e.target.value)}>
                <option value="" selected >Ingrediente</option>
                {pizzaIngredients.map((ingredient)=>(
                <option value="" >{ingredient.text}</option>
                ))}
              </select>
            </form>
            <form action="">
              <label for="drinks"></label>
              <select name="drinks" id="drinks" className="input-select" value={drink} onChange={(e)=>setDrink(e.target.value)}>
                <option value="" selected >Bebidas</option>
                {drinks.map((drink)=>(
                <option value="">{drink.text}</option>
                ))}
              </select>
            </form>
            <label className="extraQueso"><input checked={pizzaExtraQueso} onChange={()=> setPizzaExtraQueso(!pizzaExtraQueso)} type="checkbox" id="extraQueso" value="extraQueso"/>Extra Queso</label>
            <img src={plusIcon} alt="" className="plusCirculeIcon"/>
            <h4>Observación</h4>
            <textarea
              value={observation} 
              onChange={(e)=>setObservation(e.target.value)}
              name="observation"
              id="observation"
              cols="30"
              rows="10"
            ></textarea>
          </div>
        </div>
        <div className="order-price">
          <div className="sizes">
            <div className={ size === "Personal" ? "pizza_personal size sizeActive" : "pizza_personal  size"} onClick={() => setZise("Personal")}>Personal 
              <span className="pizzaModel">
                <div className="detailsZise"><h3>Porciones 4</h3> <span>24 CM</span></div>
                <div className="circulePizzaModel ">
                  <div className="pizza_stripe stripe_one_4"></div>
                  <div className="pizza_stripe stripe_two_4"></div>
                </div>
              </span>
            </div>
            <div className={ size === "Pequeña" ? "pizza_pequeña size sizeActive" : "pizza_pequeña size"} onClick={() => setZise("Pequeña")}>Pequeña 
              <span className="pizzaModel">
                <div className="detailsZise"><h3>Porciones 6</h3><span>32 CM</span></div>
                <div className="circulePizzaModel">
                  <div className="pizza_stripe stripe_one_6"></div>
                  <div className="pizza_stripe stripe_two_6"></div>
                  <div className="pizza_stripe stripe_three_6"></div> 
                </div>
              </span>
            </div>
            <div className={ size === "Mediana" ? "pizza_mediana size sizeActive" : "pizza_mediana size"} onClick={() => setZise("Mediana")}>Mediana 
              <span className="pizzaModel">
                <div className="detailsZise"><h3>Porciones 8</h3><span>37 CM</span></div>
                <div className="circulePizzaModel">
                  <div className="pizza_stripe stripe_one_8"></div>
                  <div className="pizza_stripe stripe_two_8"></div>
                  <div className="pizza_stripe stripe_three_8"></div>
                  <div className="pizza_stripe stripe_four_8"></div>
                </div>
              </span>
            </div>
            <div className={ size === "Grande" ? "pizza_grande size sizeActive" : "pizza_grande size"} onClick={() => setZise("Grande")}>Grande 
              <span className="pizzaModel">
                <div className="detailsZise"><h3>Porciones 10</h3><span>42 CM</span></div>
                <div className="circulePizzaModel">
                <div className="pizza_stripe stripe_one_10"></div>
                  <div className="pizza_stripe stripe_two_10"></div>
                  <div className="pizza_stripe stripe_three_10"></div>
                  <div className="pizza_stripe stripe_four_10"></div>
                  <div className="pizza_stripe stripe_five_10"></div>
                </div>
              </span>
            </div>
          </div>
          <div className="quantity">
            <div className="minus" onClick={() => handleProductQuantity(-1)}>
              -
            </div>
            <div className="number">
              {quantity}
            </div>
            <div className="plus" onClick={() => handleProductQuantity(1)}>
              +
            </div>
          </div>
          <div className="total-price">
            <img src={plusIconSvg} alt="" className="plusIcon"/>
            <p>{totalProductPrice} COP</p>
          </div>
        </div>
      </div>
    );
}

export default ModalSelectPizza;