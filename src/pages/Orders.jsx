import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Order from "../components/Order";
import Navbar from "../components/Navbar";
import Brand from "../components/Brand";
import loaderGif from "../img/loading.gif";

import moment from "moment";
import "./style/orders.css";

function Orders(props) {
  const [orders, setOrders] = useState([]);
  const [loader, setLoader] = useState(false);
  // const [orderStatus, setOrderStatus] = useState(null);

  const ordersLoader = () => {
    // console.log(`/api/admin/historial/${dateValue.format('YYYY-MM-DD')}`);
    setOrders([]);
    setLoader(true);
    axios
      .get(`/api/admin/pedidos`)
      .then((res) => {
        setOrders(res.data);
        setLoader(false);
        // console.log(res.data);
      })
      .catch((err) => console.log("Error getting orders"));
  };



  useEffect(() => {
    ordersLoader();
  }, []);

  return (
    <div className="orders_body">
      <div className="orders_wrapper">
        <Navbar />
        <Brand />
        {loader ? (
          <div className="orderItem loading">
            <div className="stripe"></div>
            <img className="orderLoadingif" src={loaderGif} alt="" />
            <div className="ordersTittle">
              <h3>Pedidos</h3>
            </div>
            <div className="spaceOrderLoadingItem"></div>
            <div className="OrderObservationLoadingItem">
                <h3 className="orderProductInfo_observation">Observasion</h3>
            </div>
            <img className="orderLoadingif" src={loaderGif} alt="" />
            <div className="orderItem_bottomBar">
              <button className="btn_order btnDecline">RECHAZAR</button>
              {/* <button className="btn_order btnEdit">EDITAR</button> */}
              <button className="btn_order btnAccept">ACEPTAR</button>
            </div>
          </div>
        ) : orders.length > 0 ? (
          orders &&
          orders.map((order, index) => (
            <Order
              key={index}
              orderDate={moment(order.created_at).format(
                "YYYY-MM-DD T HH:mm:ss"
              )}
              orderId={order.id}
              orderStatus={order.status}
              userOrder={order.user.name}
              userPhone={order.user.phone_number}
              orderAddress={order.address}
              orderReference={order.reference}
              orderPay={order.wayToPay}
              orderChange={order.change}
              orderPrice={order.price}
              hiddePedidos={false}
              orderProducts={order.products}
            />
          ))
        ) : (
          <h1 className="ordersNoFound">PEDIDOS NO ENCONTRADOS</h1>
        )}
      </div>

      <div className="orders_bottomBar"></div>
    </div>
  );
}

export default Orders;
