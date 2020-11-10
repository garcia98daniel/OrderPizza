import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

import OrderUserInfo from "../components/OrderUserInfo";
import Navbar from "../components/Navbar";
import Brand from "../components/Brand";
import loaderGif from "../img/loading.gif";

import Calendar from 'ciqu-react-calendar';
import moment from 'moment';
import "./style/ordersHistory.css";

function OrdersHistory(props) {
    const [dateStartValue, setDateStartValue] = useState(moment());
    const [dateEndValue, setDateEndValue] = useState(moment());
    const [orders, setOrders] = useState([]);
    const [totalDay, setTotalDay] = useState(0);
    const [loader, setLoader] = useState(false);


    const searchDateStart = (dateStartValue) =>{
        // alert(value.format('YYYY-MM-DD'));
        const dateStart = moment(dateStartValue);
        const dateEnd = moment(dateEndValue);

        setDateStartValue(dateStart);
        setDateEndValue(dateEnd);
        ordersLoader();
    }

    const searchDateEnd = (dateEndValue) =>{
        // alert(value.format('YYYY-MM-DD'));
        const dateStart = moment(dateStartValue);
        const dateEnd = moment(dateEndValue);

        setDateStartValue(dateStart);
        setDateEndValue(dateEnd);
        ordersLoader();
    }

    const ordersLoader = () =>{
        // console.log(`/api/admin/historial/${dateStartValue.format('YYYY-MM-DD')}`);
        setOrders([]);
        setLoader(true);
        axios.get(`/api/admin/historial/${dateStartValue.format('YYYY-MM-DD')}/${dateEndValue.format('YYYY-MM-DD')}`)
        .then(res => {
            setOrders(res.data);
            setLoader(false);

        })
        .catch(err => console.log("Error getting orders"));
        // console.log(orders)
    }

    const salesSum = () =>{
        // console.log(`/api/admin/historial/${dateStartValue.format('YYYY-MM-DD')}`);
        axios.get(`/api/admin/total-ventas/${dateStartValue.format('YYYY-MM-DD')}/${dateEndValue.format('YYYY-MM-DD')}`)
        .then(res => {
            setTotalDay(res.data);
            // console.log(res.data);
        })
        .catch(err => console.log("Error getting total gains of the day"));
    }

    useEffect(() => {
        ordersLoader();
        salesSum();
    },[dateStartValue, dateEndValue])
    return (
        
        <div className="ordersHistory_body">
            <div className="ordersHistory_wrapper">
            <Navbar/>
            <Brand/>
            <div className="ordersHistory_dateContainer">

                <div className="ordersHistory_dateGroup">
                    <h3>Desde</h3>
                    <Calendar
                        onChange={searchDateStart}
                        value={dateStartValue}
                        allowClear={true}
                        disabled={false}
                        placeholder={'Selecciona la fecha inicio'}
                        onOpenChange={""}
                        disabledDate={""}
                    />
                </div>

                <div className="ordersHistory_dateGroup">
                    <h3>hasta</h3>
                    <Calendar
                        onChange={searchDateEnd}
                        value={dateEndValue}
                        allowClear={true}
                        disabled={false}
                        placeholder={'Selecciona la fecha fin'}
                        onOpenChange={""}
                        disabledDate={""}
                    />
                </div>
            </div>
            
            {
                 loader ? 
                <div className="orderItem loading">
                    <div className="stripe"></div>
                    <img className="orderLoadingif" src={loaderGif} alt=""/>
                </div>
                :
                    orders.length > 0  ?  
                        orders && orders.map((order, index) => (
                            <div className="orderItem">
                                <OrderUserInfo 
                                key={index} 
                                orderDate={moment(order.created_at).format('YYYY-MM-DD T HH:mm:ss')}
                                orderId={order.id}
                                userOrder={order.user.name}
                                userPhone={order.user.phone_number}
                                orderAddress={order.address}
                                orderReference={order.reference}
                                orderPay={order.wayToPay}
                                orderChange={order.change}
                                orderPrice={order.price}
                                hiddePedidos={true}
                                />
                            </div>
                        ))
                    
                    :
                    <h1 className="ordersNoFound">PEDIDOS NO ENCONTRADOS</h1>
            }
            </div>
            <div className="ordersHistory_bottomBar">
                <div className="totalTxt">
                    VENTAS TOTALES
                </div>
                <div className="totalPrice">
                    {totalDay} COP
                </div>
                <div className="totalDate">
                    {dateStartValue.format('YYYY-MM-DD')}
                    /
                    {dateEndValue.format('YYYY-MM-DD')}
                </div>
            </div>
        </div>
    );
}

export default OrdersHistory;