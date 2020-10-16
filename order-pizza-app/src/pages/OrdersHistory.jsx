import React from 'react';
import "./style/ordersHistory.css";
import {useState, useEffect} from 'react';
import axios from 'axios';

import OrderUserInfo from "../components/OrderUserInfo";
import Navbar from "../components/Navbar";
import Brand from "../components/Brand";
import moment from 'moment'
import Calendar from 'ciqu-react-calendar'

function OrdersHistory(props) {
    const [dateValue, setDateValue] = useState(moment());

    const searchDate = (value) =>{
        alert(value.format('YYYY-MM-DD'));
        setDateValue(value);
    }

    useEffect(() => {
        console.log(`/api/admin/historial/${dateValue.format('YYYY-MM-DD')}`);
        axios.get(`/api/admin/historial/${dateValue.format('YYYY-MM-DD')}`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log("Error getting orders"));
    },)
    return (
        <div className="ordersHistory_body">
            <div className="ordersHistory_wrapper">
            <Navbar/>
            <Brand/>
            <div className="ordersHistory_dateContainer">
                <Calendar
                    onChange={searchDate}
                    value={dateValue}
                    allowClear={true}
                    disabled={false}
                    placeholder={'Selecciona una fecha'}
                    format={'YYYY-MM-DD'}
                    onOpenChange={""}
                    disabledDate={""}
                />
            </div>
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
                    {dateValue.format('YYYY-MM-DD')}
                </div>
            </div>
        </div>
    );
}

export default OrdersHistory;