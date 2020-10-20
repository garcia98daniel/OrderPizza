import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Orders from '../pages/Orders';
import OrdersHistory from '../pages/OrdersHistory';



function App() {
  return (
    <BrowserRouter>
            {/* <Layout> */}
                <Switch>
                    <Route exact path="/admin/pedidos" component={Orders} />
                    <Route exact path="/admin/historial-pedidos" component={OrdersHistory} />
                </Switch>  
            {/* </Layout>   */}
        </BrowserRouter>
  );
}

export default App;
// Route::get('admin/pedidos', [\App\Http\Controllers\OrderController::class, 'index']);
// Route::get('admin/historialPedidos/{date?}', [\App\Http\Controllers\OrderController::class, 'getOrdersByDate']);
// Route::get('admin/total-ventas/{date?}', [\App\Http\Controllers\OrderController::class, 'getTotalSalesInAday']);
// Route::post('admin/pedidos', [\App\Http\Controllers\OrderController::class, 'store']);
