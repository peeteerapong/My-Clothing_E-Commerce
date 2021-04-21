import React from 'react';
import { Switch,Route} from 'react-router-dom';

import './App.css';
import Homepage from './component/homepage/homepage.component'

const HatsPage = () => (
  <div> 
      <h1>  HATS PAGE</h1>

  </div>

)

function App() {
  return (
    <Switch >
      <Route exact path = '/' component = {Homepage} />
      <Route  path = '/' component = {HatsPage} />
    </Switch>
  );
}

export default App;
