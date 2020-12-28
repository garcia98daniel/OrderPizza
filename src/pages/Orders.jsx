import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Order from "../components/Order";
import Navbar from "../components/Navbar";
import Brand from "../components/Brand";
import loaderGif from "../img/loading.gif";
import sound_icon from "../img/sound_icon.webp";

import newNotificationAlert from "../img/newNotificationAlert.gif";
import moment from "moment";
import "./style/orders.css";

import Pusher from 'pusher-js';

import machinegunSound from "../sound/machinegunSound.mp3";
import siuuu from "../sound/siuuu.mp3"
import johncena from "../sound/johncena.mp3"
import chaturbate from "../sound/chaturbate.mp3"

import {Howl, Howler} from "howler";

function Orders(props) {
  const [orders, setOrders] = useState([]);
  const [loader, setLoader] = useState(false);
  const [newOrder, setNewOrder] = useState(false);

  const [activarSound, setActivarSound]  = useState(false);

  const ordersLoader = () => {
    // console.log(`/api/admin/historial/${dateValue.format('YYYY-MM-DD')}`);
    setOrders([]);
    setLoader(true);
    axios
    // .get(`http://127.0.0.1:8000/api/admin/pedidos`)
    .get(`https://evening-beyond-19007.herokuapp.com/api/admin/pedidos`)
    .then((res) => {
      setOrders(res.data);
      setLoader(false);
      // console.log(res.data);
    })
    .catch((err) => console.log("Error getting orders"));
  };
  var sound = null;
  const soundPlay1 = (src) => {
    sound = new Howl({
      src
    });
    sound.play();
  }

  const soundPlay2 = (src) => {
    sound = new Howl({
      src
    });
    sound.play();
  }

  const soundPlay3 = (src) => {
    sound = new Howl({
      src
    });
    sound.play();
  }

  const soundPlay4 = (src) => {
    sound = new Howl({
      src
    });
    // sound.stop();
    sound.play();
  }

  var iSound = 0;
  const renderSound = () => {
  // alert(iSound);
    switch (iSound) {
      case 0:
          soundPlay1(siuuu);
        break;
      case 1:
          soundPlay2(machinegunSound);
        break;
      case 2:
          soundPlay3(johncena);
        break;
      case 3:
        
        let intervalsound = setInterval(() => {
            soundPlay4(chaturbate);
        }, 1500);

        setTimeout(() => {
          clearInterval(intervalsound); //stop interval
        }, 10000);
        break;
      default:
        break;
    }
    iSound = iSound + 1;
    if(iSound>3){
      iSound = 0;
    }
  }

  useEffect(() => {
    Howler.volume(1.0);
    ordersLoader();

    Pusher.logToConsole = true;
    const pusher = new Pusher('959526922a3e68c98042', {
      cluster: 'mt1',
      // encrypted: true
    });
    const channel = pusher.subscribe('orderNotification');
    channel.bind('event-pusher', data => {
      setOrders((prevState) => { 
        return [...prevState, data.order.original[0]]
      });
      // console.log(JSON.stringify( data.order.original[0]));
      showAlert();
      //playing sound new order
      renderSound();
    });

      return () => { //componet will unmount
      pusher.disconnect();
     }
  }, []);

const showAlert =()=>{
  setNewOrder(true);
  setTimeout(()=>{
    setNewOrder(false);
  }, 2200);
}


  return (
    <div className="orders_body">
      <div className="orders_wrapper">
        <Navbar />
        <Brand page={"Pedidos"} />
        <i className={activarSound ? "btn_sound" : "btn_sound disable"} onClick={() => setActivarSound(true)}> <img src={sound_icon} className="sound_icon"/></i>
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
              orders={orders}
              setOrders={setOrders}
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
          <h1 className="ordersNoFound">NO TIENEN PEDIDOS AÚN</h1>
        )}
      </div>

      <div className="orders_bottomBar"></div>
      {newOrder &&
      <div className="newOrderAlert">
          <img src={newNotificationAlert} alt=""/>
          <h1>Nueva orden</h1>
      </div>
      }
      
    </div>
  );
}

export default Orders;
