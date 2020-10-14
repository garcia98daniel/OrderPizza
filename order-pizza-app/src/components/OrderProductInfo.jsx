import React from 'react';
import "./style/orderProductInfo.css";

function OrderProductInfo(props) {
    return (
        <div className="orderProductInfo">
            <div className="orderProductInfo_product_info">
                <div className="orderProduct_product_item_quantity_container">
                    <h3 className="orderProductInfo_product_numberItem">
                        #1
                    </h3>
                    <h1 className="orderProductInfo_product_quantity">
                        x1
                    </h1>
                </div>
                <div className="orderProductInfo_product">
                    <h3>ProductType</h3>
                    <div className="orderProductInfo_product_details">
                        <h5>Size</h5>
                        <h4>Product</h4> 
                    </div>
                </div>
            </div>
            <h3 className="orderProductInfo_observation">
                Observacion
            </h3>
            <h4 className="orderProductInfo_observation_txt">
                Nulla praesentium asperiores consequatur cumque impedit soluta sed voluptas esse aut sequi minima provident ratione et.
            </h4>
            <div className="orderProductInfo_additionals_container">
                <div className="additionals pizza_additionals">
                    <h3>Adicionales</h3>
                    <h3>Borde de queso</h3>
                    <h3>Extra queso</h3>
                </div>
                <div className="additionals others_additionals">
                    <h3>Bebidas</h3>
                    <h3>CocaCola 250ml</h3>
                </div>
            </div>
        </div>
    );
}

export default OrderProductInfo;