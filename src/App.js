import React,{ Component }from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBulider/BurgerBuilder'

class App extends Component {
  render(){
      return (
        //I dont yet understand why Layout has to enclose BurgerBuilder
        <div>
          <Layout>
            <BurgerBuilder/>
          </Layout>
        </div>
      );
  }
}

export default App;
