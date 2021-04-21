import React from 'react';
import { Switch,Route} from 'react-router-dom';

import './App.css';
import Homepage from './Page/homepage/homepage.component';
import ShopPage from './Page/shop/shop.component';
import Header from './component/header/header.component';


function App() {
  return (
   <div>  
     <Header/>
     
    <Switch >
      <Route exact path = '/' component = {Homepage} />
      <Route  path = '/shop' component = {ShopPage} />
    </Switch>
    </div>
  );
}

export default App;
