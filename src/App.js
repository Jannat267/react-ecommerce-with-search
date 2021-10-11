import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';
 

function App() {
  return (
    <div>
      
      <Router>
       <Header></Header>
        <Switch>
          <Route exact path='/shop'>
          <Shop></Shop>
          </Route>
          <Route  path='/'>
          <Shop></Shop>
          </Route>
          <Route exact path='/review'>
          <OrderReview></OrderReview>
          </Route>
          <Route exact path='/placeOrder'>
          <PlaceOrder></PlaceOrder>
          </Route>
          <Route exact path='/inventory'>
          <Inventory></Inventory>
          </Route>
          <Route exact path='*'>
          <Notfound></Notfound>
          </Route>

        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
