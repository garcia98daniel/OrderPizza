import React from "react";
import "./style/orderUserInfo.css";

function OrderUserInfo(props) {
  return (
    <div className="OrderUserInfo_wrapper">
        <div className="OrdersUserInfo_header">
          <h6 className="OrdersUserInfo_date">##-##-##</h6>
          <h6 className="OrdersUserInfo_id">#####</h6>
        </div>
      <div className="OrdersUserInfo">
        <div className="OrdersUserInfo_mainInfo">
          <h2 className="OrdersUserInfo_userName">USER NAME</h2>
          <h2 className="OrdersUserInfo_userPhone">##########</h2>
        </div>
        <div className="OrdersUserInfo_info">
          <div className="OrdersUserInfo_infoAdress_direction">
            <h3>Direccion</h3>
            <h5>Lorem, ipsum dolor sit amet consectetur.</h5>
          </div>
          <div className="OrdersUserInfo_infoAdress_reference">
            <h3>Referencia</h3>
            <h5>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
              expedita ut non iste iusto sapiente dolor quis.
            </h5>
          </div>
        </div>
        <div className="OrdersUserInfo_wayToPay_wrapper">
          <div className="OrdersUserInfo_wayToPay">
            <h3>Forma de pago</h3>
            <div className="wayToPay_description">
              <h5>Efectivo</h5>
              <h6 className="wayToPay_description_change">Cambio para</h6>
              <h5>#### COP</h5>
            </div>
          </div>
          <div className="OrdersUserInfo_info_total">
            <h1>TOTAL</h1>
            <h1>50,000 COP</h1>
          </div>
        </div>
        <div className="ordersTittle">
          <h3>Pedidos</h3>
        </div>
      </div>
    </div>
  );
}

export default OrderUserInfo;
