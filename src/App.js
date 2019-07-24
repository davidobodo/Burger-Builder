import React,{ Component }from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBulider/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render(){
      return (
        //I dont yet understand why Layout has to enclose BurgerBuilder
        <div>
          <Layout>
            <Switch>
              <Route path="/" exact component={BurgerBuilder}/>
              <Route path="/Checkout" component={Checkout}/>
            </Switch>
          </Layout>
        </div>
      );
  }
}

export default App;
