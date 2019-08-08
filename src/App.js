import React,{ Component }from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBulider/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom'
import Orders from './containers/Orders/Orders'
import Auth from './containers/Auth/Auth'

class App extends Component {
  render(){
      return (
        //I dont yet understand why Layout has to enclose BurgerBuilder
        <div>
          <Layout>
            <Switch>
              <Route path="/orders" component={Orders}/>
              <Route path="/auth" component={Auth}/>
              <Route path="/" exact component={BurgerBuilder}/>
              <Route path="/checkout" component={Checkout}/>
            </Switch>
          </Layout>
        </div>
      );
  }
}

export default App;
