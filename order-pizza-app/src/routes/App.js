import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Orders from '../pages/Orders';


function App() {
  return (
    <BrowserRouter>
            {/* <Layout> */}
                <Switch>
                    <Route exact path="/" component={Orders} />
                </Switch>  
            {/* </Layout>   */}
        </BrowserRouter>
  );
}

export default App;
