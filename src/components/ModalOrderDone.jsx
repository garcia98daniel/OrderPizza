import "./style/ModalOrderDone.css";
import Brand from "./Brand";
import React, {useState, useEffect} from 'react';
import axios from "axios";
import succes from "../img/succes.gif";

function ModalOrderDone({ 
  pizzaItemsChosen,
  setMakeOrder ,
  finalOrder,
  setFinalOrder
}) {

    const [orderSucces, setOrderSucces] = useState(false);

    const finalData =(e)=>{
      e.preventDefault();
            
        axios
        .post(`/api/admin/pedidos`, finalOrder)
        .then((res) => {
          // console.log(res.data);
          setOrderSucces(true);
          setTimeout(()=>{
            setOrderSucces(false);
          }, 3000);
          setOrderSucces(true);
          setTimeout(()=>{
            setMakeOrder(false);
          }, 3000);
        })
        .catch((err) => console.log("Error creating order"));
    }

    // useEffect(() => {
    //   console.log(finalOrder);
    // });

  
    
  return (
    <div className="bg_modalOrderDone" onClick={()=>setMakeOrder(false) }>
      <div className="modalOrderDone" onClick={(e)=> e.stopPropagation()}>
        <form className="dataModal" onSubmit={(e)=> finalData(e)}>
          <Brand />
          <div className="fistDatarow dataRow">
            <div className="inputGoup">
              <h5>Nombre completo</h5>
              <input required type="text" placeholder="Nombre" name="name" value={finalOrder.user.name}onChange={(e)=>setFinalOrder({...finalOrder, user:{...finalOrder.user, [e.target.name]:e.target.value}})}/>
            </div>
            <div className="inputGoup">
              <h5>Telefono</h5>
              <input type="tel" required placeholder="Telefono" name="phone_number" value={finalOrder.phone_number} onChange={(e)=>setFinalOrder({...finalOrder, user:{...finalOrder.user, [e.target.name]:e.target.value}})}/>
            </div>
          </div>
          <div className="secondDatarow dataRow">
            <div className="inputGoup">
              <h5>Direccion</h5>
              <input required type="text" placeholder="Direccion" name="address" value={finalOrder.address} onChange={(e)=>setFinalOrder({...finalOrder, [e.target.name]:e.target.value})}/>
            </div>

            <div className="inputGoup">
              <h5>Forma de pago</h5>
              <div className="ways">
                <label htmlFor="efectivo">Efectivo</label>
                <input id="efectivo" name="wayToPay"  className="efectivo" type="radio" required  onClick={(e)=>setFinalOrder({...finalOrder, [e.target.name]:'efectivo'})}/>
                <label htmlFor="transaccion">Transacción</label>
                <input id="transaccion" name="wayToPay"  className="transaccion" type="radio" required onClick={(e)=>setFinalOrder({...finalOrder, [e.target.name]:'transaccion'})}/>
              </div>
              {finalOrder.wayToPay === 'efectivo' && 
              <input type="text" placeholder="¿Cambio para?" value={finalOrder.change} name="change" onChange={(e)=>setFinalOrder({...finalOrder, [e.target.name]:e.target.value})}/>
              }
            </div>
          </div>
          <div className="dataRow">
            <div className="inputGoup">
              <h5>Referencia de la direccion</h5>
              <textarea required placeholder="referencia" value={finalOrder.addressReference} name="reference" onChange={(e)=>setFinalOrder({...finalOrder, [e.target.name]:e.target.value})}></textarea>
            </div>
          </div>
          <div className="infoDatarow dataRow">
            <p>
              Por favor asegúrese que el telefono que esta colocando sea el
              correcto tenga bateria y este a su mano, sele llamara para
              confirmarle pedido y la tarifa del domicilio si está fuera del perimetro gratis.
            </p>
            <div className="checkData">
              <label htmlFor="radioCheckData">
                He leido y aceptado terminos
              </label>
              <input className="radioCheckData" type="radio" required />
            </div>
          </div>
          <section className="footerModal">
          <p className="itemNumber">
            {pizzaItemsChosen && pizzaItemsChosen.length} items
          </p>
          <div className="buttonConfir">
            <button >Confirmar</button>
          </div>
          <div className="totalInfoOrder">
            <h3>Total</h3>
            <h4>
              {pizzaItemsChosen &&
                pizzaItemsChosen.reduce((total, pizzaItem) => {
                  return total + pizzaItem.price;
                }, 0)} COP
            </h4>
          </div>
        </section>
        </form>
        {orderSucces &&
        <div className="orderSucces">
          <img src={succes} alt="succes"/>
          <h1>Pedido exitoso</h1>
        </div>
        }
      </div>
    </div>
  );
}

export default ModalOrderDone;
