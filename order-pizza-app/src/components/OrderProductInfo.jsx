import React from 'react';
import "./style/orderProductInfo.css";

function OrderProductInfo({ 
    productItemIndex,
    productQuantity,
    productName,
    productZise,
    productObservation,
    productAdditionals
}) {
    return (
        <div className="orderProductInfo">
            <div className="orderProductInfo_product_info">
                <div className="orderProduct_product_item_quantity_container">
                    <h3 className="orderProductInfo_product_numberItem">
                        Producto #{productItemIndex}
                    </h3>
                    <h1 className="orderProductInfo_product_quantity">
                        x{productQuantity}
                    </h1>
                </div>
                <div className="orderProductInfo_product">
                    <h3>PIZZA</h3>
                    <div className="orderProductInfo_product_details">
                        <h5>{productZise}</h5>
                        <h4>{productName}</h4> 
                    </div>
                </div>
            </div>
            <h3 className="orderProductInfo_observation">
                Observacion
            </h3>
            <h4 className="orderProductInfo_observation_txt">
                {productObservation}
            </h4>
            <div className="orderProductInfo_additionals_container">
                <div className="additionals pizza_additionals">
                    <h3>Adicionales</h3>
                    {productAdditionals && 
                    productAdditionals.filter(additional => additional.type !== "drink")
                    .map((additional, index) => (
                        <h3>{additional.name}</h3>
                    ))}
                </div>
                <div className="additionals others_additionals">
                    <h3>Bebidas</h3>
                    {productAdditionals && 
                    productAdditionals.filter(additional => additional.type !== "ownProduct")
                    .map((additional, index) => (
                        <h3>{additional.name}</h3>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OrderProductInfo;