import './App.css';

import ProductDetails from './components/ProductDetails/ProductDetails';
import Shop from './components/Shop/Shop';


import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/">
          <Shop></Shop>
        </Route>
        <Route path="/products">
          <Shop></Shop>
        </Route>
        <Route path="/product/:productKey">
          <ProductDetails ></ProductDetails>
        </Route>
        <Route path="*">
          <Shop></Shop>
        </Route>
      </Switch>
      </Router>
        
    </div>
  );
}

export default App;
