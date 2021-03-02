import "./style/ModalOrderDone.css";
import Brand from "./Brand";
import React, {useState} from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import succes from "../img/succes.gif";
// import loaderGif from "../img/loading.gif";

function ModalOrderDone({ 
  pizzaItemsChosen,
  setMakeOrder ,
  setPizzaItemsChosen,
  handleOpenModal,
}) {

  const [finalOrder, setFinalOrder] = useState(
    {products: pizzaItemsChosen,
        wayToPay: '',
        change: 0,
        address: '',
        reference: '',
        price: pizzaItemsChosen.reduce((total, pizzaItem) => {
            return total + pizzaItem.price;
          }, 0),
        user: {
            name: '',
            phone_number: 0,
        }
      }
    );

    const [orderSucces, setOrderSucces] = useState(false);

    const [orderSend, setOrderSend] = useState(false);

    const finalData =(e)=>{
      e.preventDefault();
        //cambia la palabra del boton confirmar por enviando
      setOrderSend(true);
        axios
        // .post(`http://127.0.0.1:8000/api/admin/pedidos`, finalOrder)
        .post(`https://evening-beyond-19007.herokuapp.com/api/admin/pedidos`, finalOrder)
        .then((res) => {
          // console.log(res.data);
          //borra lo que tiene el carrito de compras
          setPizzaItemsChosen([]);

          //cierra el modal carrito de compras
          handleOpenModal(false);

          //cambia la palabra del boton enviando por confirmar
          setOrderSend(false);

          //activa el giff de succes
          setOrderSucces(true);

          //desactiva el giff de succes a los 3s
          setTimeout(()=>{
            setOrderSucces(false);
          }, 3000);
          setOrderSucces(true);

          //cierra el modal a los 3s
          setTimeout(()=>{
            setMakeOrder(false);
          }, 3000);
        })
        .catch((err) =>{ 
          // setOrderSend(false);
          console.log("Error creating order")
        });
    }

    // useEffect(() => {
    //   console.log(finalOrder);
    // });

  
    
  return ReactDOM.createPortal(
    <div className="bg_modalOrderDone" onClick={()=>setMakeOrder(false) }>
      <div className="modalOrderDone" onClick={(e)=> e.stopPropagation()}>
        <form className="dataModal" onSubmit={(e)=> finalData(e)}>
          <Brand page={""}/>
          <div className="fistDatarow dataRow">
            <div className="inputGoup">
              <h5>Nombre completo</h5>
              <input autocomplete="off" required type="text" placeholder="Nombre" name="name" value={finalOrder.user.name}onChange={(e)=>setFinalOrder({...finalOrder, user:{...finalOrder.user, [e.target.name]:e.target.value}})}/>
            </div>
            <div className="inputGoup">
              <h5>Telefono</h5>
              <input autocomplete="off" type="tel" required placeholder="Telefono" name="phone_number" value={finalOrder.user.phone_number===0 ? '': finalOrder.user.phone_number} onChange={(e)=>setFinalOrder({...finalOrder, user:{...finalOrder.user, [e.target.name]:e.target.value}})}/>
            </div>
          </div>
          <div className="secondDatarow dataRow">
            <div className="inputGoup">
              <h5>Direccion</h5>
              <input autocomplete="off" required type="text" placeholder="Direccion" name="address" value={finalOrder.address} onChange={(e)=>setFinalOrder({...finalOrder, [e.target.name]:e.target.value})}/>
            </div>

            <div className="inputGoup">
              <h5>Forma de pago</h5>
              <div className="ways">
                <label htmlFor="efectivo">Efectivo</label>
                <input autocomplete="off" id="efectivo" name="wayToPay"  className="efectivo" type="radio" required  checked={finalOrder.wayToPay === 'efectivo' && true} onClick={(e)=>setFinalOrder({...finalOrder, [e.target.name]:'efectivo'})}/>
                <label htmlFor="transaccion">Transacción</label>
                <input autocomplete="off" id="transaccion" name="wayToPay"  className="transaccion" type="radio" required checked={finalOrder.wayToPay === 'transaccion' && true} onClick={(e)=>setFinalOrder({...finalOrder, [e.target.name]:'transaccion'})}/>
              </div>
              {finalOrder.wayToPay === 'efectivo' && 
              <input autocomplete="off" type="text" placeholder="¿Cambio para?" value={finalOrder.change === 0 ? '' : finalOrder.change} name="change" onChange={(e)=>setFinalOrder({...finalOrder, [e.target.name]:e.target.value})}/>
              }
            </div>
          </div>
          <div className="dataRow">
            <div className="inputGoup">
              <h5>Referencia de la direccion</h5>
              <textarea required placeholder="referencia" value={finalOrder.reference} name="reference" onChange={(e)=>setFinalOrder({...finalOrder, [e.target.name]:e.target.value})}></textarea>
            </div>
          </div>
          <div className="infoDatarow dataRow">
            <p>
              Por favor asegúrese que el telefono que ingreso sea el
              correcto, tenga bateria y este a su mano, sele llamara para
              confirmarle pedido y la <strong>tarifa del domicilio</strong> si es necesario.
            </p>
            <div className="checkData">
              <label htmlFor="radioCheckData">
                He leido y aceptado terminos
              </label>
              <input autocomplete="off" id ="radioCheckData" className="radioCheckData" type="radio" required />
            </div>
          </div>
          <section className="footerModal">
          <p className="itemNumber">
            {pizzaItemsChosen && pizzaItemsChosen.length} items
          </p>
          {!orderSend ?
            <div className="buttonConfir">
              <button >Confirmar</button>
            </div>
            :
            <div className="buttonConfir">
              <div className="loaderConfir">
                Enviando...
              </div>
            </div>
          }
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
    ,document.getElementById("modal")
  );
}

export default ModalOrderDone;
