import React from 'react';
import OrderUserInfo from "../components/OrderUserInfo";
import OrderProductInfo from "../components/OrderProductInfo";
import "./style/order.css";


function Order({
    key,
    orderDate,
    orderId,
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
    return (
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
                <button className="btn_order btnDecline">RECHAZAR</button>
                <button className="btn_order btnEdit">EDITAR</button>
                <button className="btn_order btnAccept">ACEPTAR</button>
            </div>
        </div>
    );
}

export default Order;