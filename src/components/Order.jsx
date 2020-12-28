import React from 'react';
import OrderUserInfo from "../components/OrderUserInfo";
import OrderProductInfo from "../components/OrderProductInfo";
import "./style/order.css";
import axios from "axios";
import { useState } from 'react';


function Order({
    orders,
    setOrders,
    key,
    orderDate,
    orderId,
    orderStatus,
    userOrder,
    userPhone,
    orderAddress,
    orderReference,
    orderPay,
    orderChange,
    orderPrice,
    hiddePedidos,
    orderProducts,
  }) {

    const [status, setStatus] = useState(null);

    const handleOrderStatus = (id, status) => {
        const newStatus = {'status': status}
        axios
            // .put(`/api/admin/pedidos/edit-status/${id}`, newStatus)
            .put(`https://evening-beyond-19007.herokuapp.com/api/admin/pedidos/edit-status/${id}`, newStatus)
            .then((res) => {
                if(status === 'acepted'){
                    setStatus("acepted");
                }else{
                    setStatus("rejected");
                    handleDeleteOrderItem(id);
                }
              console.log(res.data);
            })
            .catch((err) => console.log("Error udating orderStatus"));
      }

      const handleDeleteOrderItem =(orderItem_id)=>{
        setOrders(
            orders.filter(order => order.id !== orderItem_id)
        )
      }

    return (
        <>
        {(status === 'acepted' || status === null) &&
        <div className="orderItem">
                <OrderUserInfo
                key={key} 
                orderDate={orderDate}
                orderId={orderId}
                userOrder={userOrder}
                userPhone={userPhone}
                orderAddress={orderAddress}
                orderReference={orderReference}
                orderPay={orderPay}
                orderChange={orderChange}
                orderPrice={orderPrice}
                hiddePedidos={hiddePedidos}
                />
                {orderProducts && orderProducts.map((product, index) => (
                    <OrderProductInfo
                    productItemIndex={index + 1}
                    productQuantity={product.quantity}
                    productName={product.name}
                    productZise={product.size}
                    productObservation={product.observation}
                    productAdditionals={product.additionals}
                    />
                ))}
                
            <div className="orderItem_bottomBar">
                {status === 'acepted' || orderStatus === 'acepted' ?
                    <h2>Pedido Aceptado</h2>
                :
                <>
                <button className="btn_order btnDecline" onClick={()=>handleOrderStatus(orderId, 'rejected')} >RECHAZAR</button>
                {/* <button className="btn_order btnEdit">EDITAR</button> */}
                <button className="btn_order btnAccept" onClick={()=>handleOrderStatus(orderId, 'acepted')}>ACEPTAR</button>
                </>
                }
                </div>
        </div>
        }
        </>
    );
}

export default Order;