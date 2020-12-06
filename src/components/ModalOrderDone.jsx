import "./style/ModalOrderDone.css";
import Brand from "./Brand";
import React, {useState, useEffect} from 'react';
import axios from "axios";


function ModalOrderDone({ pizzaItemsChosen, setMakeOrder }) {

    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(0);
    const [address, setAddress] = useState('');
    const [wayToPay, setWayToPay] = useState(null);
    const [change, setChange] = useState(0);
    const [addressReference, setAddressReference] = useState(0);

    const [finalOrder, setFinalOrder] = useState({products: pizzaItemsChosen});

    const finalData =(e)=>{
      e.preventDefault();

      setFinalOrder(
            {
              ...finalOrder,
                wayToPay: wayToPay,
                change: change,
                address: address,
                reference: addressReference,
                price: pizzaItemsChosen.reduce((total, pizzaItem) => {
                    return total + pizzaItem.price;
                  }, 0),
                user: {
                    name: userName,
                    phone_number: phoneNumber,
                }
            }
        );

        axios
        .post(`/api/admin/pedidos`, finalOrder)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => console.log(err+"Error creating order"));
    }

    useEffect(() => {
      console.log(finalOrder);
    });

  
    
  return (
    <div className="bg_modalOrderDone" onClick={()=>setMakeOrder(false) }>
      <div className="modalOrderDone" onClick={(e)=> e.stopPropagation()}>
        <form className="dataModal" onSubmit={(e)=> finalData(e)}>
          <Brand />
          <div className="fistDatarow dataRow">
            <div className="inputGoup">
              <h5>Nombre completo</h5>
              <input required type="text" placeholder="Nombre" onChange={(e)=>setUserName(e.target.value)}/>
            </div>
            <div className="inputGoup">
              <h5>Telefono</h5>
              <input type="tel" required placeholder="Telefono" onChange={(e)=>setPhoneNumber(e.target.value)}/>
            </div>
          </div>
          <div className="secondDatarow dataRow">
            <div className="inputGoup">
              <h5>Direccion</h5>
              <input required type="text" placeholder="Direccion" onChange={(e)=>setAddress(e.target.value)}/>
            </div>

            <div className="inputGoup">
              <h5>Forma de pago</h5>
              <div className="ways">
                <label htmlFor="efectivo">Efectivo</label>
                <input id="efectivo" name="ways"  className="efectivo" type="radio" required  onClick={()=>setWayToPay('efectivo')}/>
                <label htmlFor="transaccion">Transacción</label>
                <input id="transaccion" name="ways"  className="transaccion" type="radio" required onClick={()=>setWayToPay('transaccion')}/>
              </div>
              {wayToPay === 'efectivo' && 
              <input type="text" placeholder="¿Cambio para?" onChange={(e)=>setChange(e.target.value)}/>
              }
            </div>
          </div>
          <div className="dataRow">
            <div className="inputGoup">
              <h5>Referencia de la direccion</h5>
              <textarea required placeholder="referencia" onChange={(e)=>setAddressReference(e.target.value)}></textarea>
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

      </div>
    </div>
  );
}

export default ModalOrderDone;
