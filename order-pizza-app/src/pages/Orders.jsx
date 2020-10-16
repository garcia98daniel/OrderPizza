import React from 'react';
import "./style/orders.css";

import Order from "../components/Order";
import Navbar from "../components/Navbar";
import Brand from "../components/Brand";


function Orders(props) {
    return (
        <div className="orders_body">
            <div className="orders_wrapper">
                <Navbar/>
                <Brand/>
                <Order/>
            </div>

            <div className="orders_bottomBar">
                
            </div>
        </div>
    );
}

export default Orders;