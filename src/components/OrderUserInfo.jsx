import React from "react";
import "./style/orderUserInfo.css";

function OrderUserInfo({
  orderDate,
  orderId,
  userOrder,
  userPhone,
  orderAddress,
  orderReference,
  orderPay,
  orderChange,
  orderPrice,
  hiddePedidos
}) {
  return (
    <div className="OrderUserInfo_wrapper">
      <div className="OrdersUserInfo_header">
        <h6 className="OrdersUserInfo_date">{orderDate}</h6>
        <h6 className="OrdersUserInfo_id">#{orderId}</h6>
      </div>
      <div className="OrdersUserInfo">
        <div className="OrdersUserInfo_mainInfo">
          <h2 className="OrdersUserInfo_userName">{userOrder.toUpperCase()}</h2>
          <h2 className="OrdersUserInfo_userPhone">{userPhone}</h2>
        </div>
        <div className="OrdersUserInfo_info">
          <div className="OrdersUserInfo_infoAdress_direction">
            <h3>Direccion</h3>
            <h5>{orderAddress}</h5>
          </div>
          <div className="OrdersUserInfo_infoAdress_reference">
            <h3>Referencia</h3>
            <h5>
              {orderReference}
            </h5>
          </div>
        </div>
        <div className="OrdersUserInfo_wayToPay_wrapper">
          <div className="OrdersUserInfo_wayToPay">
            <h3>Forma de pago</h3>
            <div className="wayToPay_description">
              <h4>{orderPay}</h4>
              <h6 className="wayToPay_description_change">Cambio para</h6>
              <h4>{orderChange} COP</h4>
            </div>
          </div>
          <div className="OrdersUserInfo_info_total">
            <h1>TOTAL</h1>
            <h1>{orderPrice} COP</h1>
          </div>
        </div>
        {hiddePedidos ?
         '' : 
         <div className="ordersTittle">
          <h3>Pedidos</h3>
         </div>
         }
      </div>
    </div>
  );
}

export default OrderUserInfo;
