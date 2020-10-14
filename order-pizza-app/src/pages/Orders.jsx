import React from 'react';
import "./style/orders.css";

import Order from "../components/Order";


function Orders(props) {
    return (
        <div className="orders_body">
            <div className="orders_wrapper">
                <Order/>
            </div>
        </div>
    );
}

export default Orders;