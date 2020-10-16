import React from 'react';
import "./style/ordersHistory.css";

import OrderUserInfo from "../components/OrderUserInfo";
import Navbar from "../components/Navbar";
import Brand from "../components/Brand";

function OrdersHistory(props) {
    return (
        <div className="ordersHistory_body">
            <div className="ordersHistory_wrapper">
            <Navbar/>
            <Brand/>
               {/* mapear cada elemento con ese contenedor */}
                <div className="orderItem">
                    <OrderUserInfo/>
                </div>
                
            </div>
            <div className="ordersHistory_bottomBar">
                <div className="totalTxt">
                    TOTAL
                </div>
                <div className="totalPrice">
                    168,000 COP
                </div>
                <div className="totalDate">
                    23-06-2016
                </div>
            </div>
        </div>
    );
}

export default OrdersHistory;