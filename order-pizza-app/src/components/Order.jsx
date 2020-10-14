import React from 'react';
import OrderUserInfo from "../components/OrderUserInfo";
import OrderProductInfo from "../components/OrderProductInfo";
import "./style/order.css";


function Order(props) {
    return (
        <div className="orderItem">
                <OrderUserInfo/>
                <OrderProductInfo/>
                <OrderProductInfo/>
            <div className="orderItem_bottomBar">
                <button className="btn_order btnDecline">RECHAZAR</button>
                <button className="btn_order btnEdit">EDITAR</button>
                <button className="btn_order btnAccept">ACEPTAR</button>
            </div>
        </div>
    );
}

export default Order;