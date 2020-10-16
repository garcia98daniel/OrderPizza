import React from 'react';
import "./style/ordersHistory.css";
import {useState, useEffect} from 'react';

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
                    23-06-2016
                </div>
            </div>
        </div>
    );
}

export default OrdersHistory;